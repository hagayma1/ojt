app.controller("listController", function($scope) {
    $scope.tasks = tasksManager.tasks;

    $scope.onUpdateTask = function(event) {
        event.task.checked = !event.task.checked;
        tasksManager.update(event.task);
    }
    
    $scope.onDeleteTask = function(event) {
        tasksManager.delete(event.task);
    }
}).directive("tasks", function() {
    return {
        restrict: 'E',
        template: `<div ng-repeat="task in tasks | filter: $parent.searchText track by $index">
        <task></task>
      </div>`
    };
});