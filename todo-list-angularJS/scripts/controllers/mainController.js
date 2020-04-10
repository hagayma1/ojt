const TASKS_BACKUP_KEY = "tasks";
let tasksManager = new TasksManager(new BackupManager());
let app = angular.module( 'todoListApp' , []);

app.controller("mainController", function($scope) {
    $scope.searchText = "";
});
