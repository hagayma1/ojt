let MongoClient = require('mongodb').MongoClient;
const DB_NAME = "ojt";
const MONGO_URI = "mongodb+srv://ojt:ojt@cluster0-2mzpd.mongodb.net/test?retryWrites=true&w=majority";

class mongoBackup {
    constructor(uri) {
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.tasks = new Map();
    }

    save(key, tasks) {
        this.tasks[key] = tasks;
        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            collection.removeMany({},function(err, removed){if(err) throw err;});
            collection.insertMany(tasks);
        });
    }

    async restore(key) {
        if (this.tasks[key] != undefined) {
            return this.tasks[key];
        }

        return this.client.connect().then(() => {
            const collection = this.client.db(DB_NAME).collection(key);
            let items = collection.find().toArray();
            return items;
        }).then(items => {
            this.tasks[key] = items;
            return this.tasks[key];
        });
    }

}

module.exports = new mongoBackup(MONGO_URI);