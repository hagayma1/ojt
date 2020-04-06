class backupSaver {
    
    save(key, data):void {
        localStorage.setItem(key,JSON.stringify(data));
    }

    restore(key) {
        return eval(localStorage.getItem(key));
    }

}
export default new backupSaver();