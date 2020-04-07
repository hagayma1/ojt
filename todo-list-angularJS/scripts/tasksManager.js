class TasksManager {
    constructor(backupManager) {
        this.backupManager = backupManager;
        this.tasks = backupManager.restore(TASKS_BACKUP_KEY);
        if (this.tasks == null) {
            this.tasks = [];
        }
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
        this.backupManager.save(TASKS_BACKUP_KEY, this.tasks);
    }

}