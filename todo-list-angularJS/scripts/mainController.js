const TASKS_BACKUP_KEY = "tasks";
let tasksManager = new TasksManager(new BackupManager());
let app = angular.module( 'todoListApp' , []);

app.controller("mainController", function($scope) {
    $scope.tasks = tasksManager.tasks;

    $scope.onUpdateTask = function(event) {
        event.task.checked = !event.task.checked;
        tasksManager.update(event.task);
    }
    
    $scope.onDeleteTask = function(event) {
        tasksManager.delete(event.task);
    }
    
    $scope.onAddTask = function() {
        tasksManager.add({text:$scope.newTask, checked:false});
        $scope.newTask = "";
    }
    
    $scope.onSearchChanged = function(textbox) {
        searchFilter = textbox.value;
    }
});
