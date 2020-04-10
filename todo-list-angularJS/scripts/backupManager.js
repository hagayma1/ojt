class BackupManager {
    
    save(key, data) {
        localStorage.setItem(key,JSON.stringify(data));
    }

    restore(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}