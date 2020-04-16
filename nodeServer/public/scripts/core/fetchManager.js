class FetchManager {
    addTask(data) {
        return fetch('api/tasks/add', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status >= 400) {
                throw 'fetch failed, cant add task';
            }
            return res.text();
        });
    }

    deleteTask(data) {
        return fetch('api/tasks/delete', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status >= 400) {
                throw 'fetch failed, cant delete task';
            }
        });
    }

    updateTask(data) {
        return fetch('api/tasks/update', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status >= 400) {
                throw 'fetch failed, cant update task';
            }
        });
    }

    restoreTasks() {
        return fetch('api/tasks', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    }
}