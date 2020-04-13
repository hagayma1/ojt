app.controller("listController", function($scope) {
    $scope.tasksManager = $scope.$parent.tasksManager;
    $scope.tasks = $scope.tasksManager.tasks;

    $scope.onUpdateTask = function(event) {
        event.task.checked = !event.task.checked;
        $scope.tasksManager.update(event.task);
    }
    
    $scope.onDeleteTask = function(event) {
        $scope.tasksManager.delete(event.task);
    }
}).directive("tasks", function() {
    return {
        restrict: 'E',
        templateUrl: '../partials/tasks.html'
    };
});