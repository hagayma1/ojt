class TasksManager {
    constructor(backupManager) {
        this.backupManager = backupManager;
        this.tasks = backupManager.restore(TASKS_BACKUP_KEY);
        if (this.tasks == null) {
            this.tasks = [];
        }
    }

    add(task) {
        this.tasks.push(task);
        this.makeBackup();
    }

    delete(task) {
        let indexToDelete = this.tasks.findIndex(current => task.text === current.text 
                                                  && task.checked === current.checked);
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

    search(filter) {
        return this.tasks.filter(task => task.text.includes(filter));
    }

    getAllTasks() {
        return this.tasks;
    }

    makeBackup() {
        this.backupManager.save(TASKS_BACKUP_KEY, this.tasks);
    }

}