let app = angular.module( 'todoListApp' , []);

app.service('tasksManager', function() {
    this.init = (fetchManager, refresh) => {
        this.fetchManager = fetchManager;
        this.refresh = refresh;
        this.tasks = [];
        this.fetchManager.restoreTasks().then(tasks => {
            if(tasks != null) {
                tasks.forEach(task => {
                    this.tasks.push(task);
                });
                refresh();
            }
        });
    }
     
    this.add = async function (task) {
        if(this.tasks.findIndex(item => item.text === task.text) === -1) {
            return this.fetchManager.addTask(task).then(id => {
                task._id = id;
                this.tasks.push(task);
                return this.refresh;
            });
        }

        throw "this task already exists";
    }

    this.delete = async function (task) {
        let indexToDelete = this.tasks.findIndex(current => task.text === current.text);
        if (indexToDelete > -1) {
            return this.fetchManager.deleteTask(task).then(() => {
                this.tasks.splice(indexToDelete, 1);
                this.refresh();
            });
        }

        throw "the task doesn't exist";
    }

    this.update = async function (task) {
        let indexToUpdate = this.tasks.findIndex(current => task.text === current.text);
        if (indexToUpdate > -1) {
            return this.fetchManager.updateTask(task).then(() => {
                this.tasks[indexToUpdate] = task;
            });
        }

        throw "the task doesn't exist";
    } 
});
