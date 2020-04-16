app.service('fetchManager', function() {
    this.addTask = function(data) {
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

    this.deleteTask = function(data) {
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

    this.updateTask = function(data) {
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

    this.restoreTasks = function() {
        return fetch('api/tasks', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    }
});