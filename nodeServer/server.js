let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let tasksCore = require('./server_files/tasks-core.js');
const TASKS_BACKUP_KEY = "tasks";

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(__dirname + '/public/pages/index.html'));

app.get('/api/tasks', function (req, res) {
    tasksCore.getAllTasks(TASKS_BACKUP_KEY)
        .then(tasks => { res.json(tasks) })
        .catch(error => {
            console.error(error);
            res.json([]);
        })
});

app.post('/api/tasks/add', function (req, res) {
    tasksCore.addTask(TASKS_BACKUP_KEY, req.body)
        .then(task => { res.send(task._id); })
        .catch(error => {
            console.error(error);
            res.sendStatus(501);
        });
});

app.post('/api/tasks/update', function (req, res) {
    tasksCore.updateTask(TASKS_BACKUP_KEY, req.body)
        .then(() => { res.sendStatus(200); })
        .catch(error => {
            console.error(error);
            res.sendStatus(501);
        });
});

app.post('/api/tasks/delete', function (req, res) {
    tasksCore.deleteTask(TASKS_BACKUP_KEY, req.body)
        .then(() => { res.sendStatus(200); })
        .catch(error => {
            console.error(error);
            res.sendStatus(501);
        });
});

app.post('/api/tasks/save', function (req, res) {
    tasksCore.saveAllTasks(TASKS_BACKUP_KEY, req.body)
        .then(() => { res.sendStatus(200); })
        .catch(error => {
            console.error(error);
            res.sendStatus(501);
        });
});

app.listen(3000, function () {
    console.log('app listening on port 3000.');
});