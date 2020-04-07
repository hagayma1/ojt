function onUpdateTask(text, checkbox) {
    tasksManager.update({text:text, checked:checkbox.checked});
}

function onDeleteTask(text, checkbox) {
    tasksManager.delete({text:text, checked:checkbox.checked});
    refreshTasks();
}

function onAddTask(text) {
    let newTaskTextbox = document.getElementById(NEW_TASK_TEXTBOX_ID);
    tasksManager.add({text:newTaskTextbox.value, checked:false});
    newTaskTextbox.value = "";
    refreshTasks();
}

function onSearchChanged(textbox) {
    searchFilter = textbox.value;
    refreshTasks();
}

function refreshTasks() {
    if(searchFilter == null || searchFilter === "") {
        uiGenerator.showTasks(tasksManager.getAllTasks());
    }
    else {
        uiGenerator.showTasks(tasksManager.search(searchFilter));
    }
}