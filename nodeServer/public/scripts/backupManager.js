class BackupManager {
    save(data) {
        return fetch('save/tasks', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status >= 400) {
                throw 'backup failed';
            }
        });
    }

    restore() {
        return fetch('tasks', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    }
}