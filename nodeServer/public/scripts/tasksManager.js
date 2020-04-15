class TasksManager {
    constructor(backupManager, refresh) {
        this.backupManager = backupManager;
        this.tasks = [];
        this.backupManager.restore().then(tasks => {
            if(tasks != null) {
                tasks.forEach(task => {
                    this.tasks.push(task);
                    refresh();
                });
            }
        });
    }

    add(task) {
        if(this.tasks.findIndex(item => item.text === task.text) === -1) {
            this.tasks.push(task);
            this.makeBackup();
            return 1;
        }

        return -1;
    }

    delete(task) {
        let indexToDelete = this.tasks.findIndex(current => task.text === current.text);
        if (indexToDelete > -1) {
            this.tasks.splice(indexToDelete, 1);
            this.makeBackup();
        }

        return indexToDelete;
    }

    update(task) {
        let indexToUpdate = this.tasks.findIndex(current => task.text === current.text);
        if (indexToUpdate > -1) {
            this.tasks[indexToUpdate] = task;
            this.makeBackup();
        }

        return indexToUpdate;
    }

    makeBackup() {
        this.backupManager.save(this.tasks)
        .catch(err => alert(err));
    }

}