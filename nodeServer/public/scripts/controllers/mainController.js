let app = angular.module( 'todoListApp' , []);

app.controller("mainController", function($scope) {
    $scope.tasksManager = new TasksManager(new BackupManager(), $scope.$apply.bind($scope));
    $scope.searchText = "";
});
