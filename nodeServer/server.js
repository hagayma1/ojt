let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let mongoBackup = require('./mongo-backup.js');
const TASKS_BACKUP_KEY = "tasks";

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(__dirname + '/public/pages/index.html'));

app.get('/tasks', function (req, res) {
    mongoBackup.restore(TASKS_BACKUP_KEY)
        .then(tasks => { res.send(JSON.stringify(tasks)) })
        .catch(error => {
            console.error(error);
            res.send('[]');
        })

});

app.post('/save/tasks', function (req, res) {
    mongoBackup.save(TASKS_BACKUP_KEY, req.body)
        .then(() => { res.sendStatus(200); })
        .catch(error => {
            console.error(error);
            res.sendStatus(501);
        });
});

app.listen(3000, function () {
    console.log('app listening on port 3000.');
});