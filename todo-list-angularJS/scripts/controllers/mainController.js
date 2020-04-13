const TASKS_BACKUP_KEY = "tasks";
let app = angular.module( 'todoListApp' , []);

app.controller("mainController", function($scope) {
    $scope.tasksManager = new TasksManager(new BackupManager());
    $scope.searchText = "";
});
