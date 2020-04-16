let mongoSaver = require('./mongodb-saver');
var uuid = require('uuid');

class tasksCore {
    constructor() {
        this.tasks = new Map();
    }

    addTask(key, task) {
        task._id = uuid.v4();
        if (this.tasks[key] === undefined) this.tasks[key] = {};
        return mongoSaver.addNewItem(key, task).then(() => {
            this.tasks[key][task._id] = task;
            return task;
        });
    }

    updateTask(key, task) {
        if (this.tasks[key] === undefined) throw ('cant find task ' + task);
        if (this.tasks[key][task._id] === undefined) throw ('cant find task ' + task);
        return mongoSaver.updateItem(key, task).then(() => {
            this.tasks[key][task._id] = task;
        });
    }

    deleteTask(key, task) {
        if (this.tasks[key] === undefined) throw ('cant find task ' + task);
        if (this.tasks[key][task._id] === undefined) throw ('cant find task ' + task);
        return mongoSaver.deleteItem(key, task).then(() => {
            delete this.tasks[key][task._id];
        });
    }

    saveAllTasks(key, tasks) {
        if (this.tasks[key] === undefined) this.tasks[key] = {};
        return mongoSaver.resetAndSave(key, tasks).then(() => {
            this.tasks[key] = {};
            tasks.forEach(task => {
                this.tasks[key][task._id] = task;
            });
        });
    }

    async getAllTasks(key) {
        if (this.tasks[key] === undefined) this.tasks[key] = {};
        return mongoSaver.restore(key).then(tasks => {
            tasks.forEach(task => {
                this.tasks[key][task._id] = task;
            });
            return tasks;
        });
    }

}

module.exports = new tasksCore();