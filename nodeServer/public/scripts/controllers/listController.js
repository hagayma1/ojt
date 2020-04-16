app.controller("listController", function($scope, tasksManager) {
    $scope.tasks = tasksManager.tasks;
    
    $scope.onUpdateTask = function(event) {
        event.task.checked = !event.task.checked;
        tasksManager.update(event.task).catch(err => {
            event.task.checked = !event.task.checked;
            alert(err);
        });
    }
    
    $scope.onDeleteTask = function(event) {
        tasksManager.delete(event.task).catch(err => {
            alert(err);
        });
    }
}).directive("tasks", function() {
    return {
        restrict: 'E',
        templateUrl: '../partials/tasks.html'
    };
});