class UIGenerator {
    constructor() {
        this.tasksDiv = document.getElementById(TASKS_LIST_DIV_ID);
    }

    showTasks(tasks) {
        this.tasksDiv.innerHTML = "";
        tasks.forEach(task => {
            this.tasksDiv.appendChild(this.generateTaskHtml(task));
        });
    }

    generateTaskHtml(task) {
        let div = document.createElement('div');
        div.className = "card";
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.checked;
        checkbox.onchange = onUpdateTask.bind(this, task.text, checkbox);

        let span = document.createElement('span');
        span.innerText = task.text;
        
        let button = document.createElement('input');
        button.type = 'button';
        button.value = 'delete';
        button.onclick = onDeleteTask.bind(this, task.text, checkbox);

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(button);

        return div;
    }
}