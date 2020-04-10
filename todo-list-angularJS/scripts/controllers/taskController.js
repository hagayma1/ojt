app.controller("taskController", function($scope) {

}).directive("task", function() {
    return {
        restrict: 'E',
        template: `<div class="card-container">
            <input type="checkbox" ng-model="task.checked" ng-click="onUpdateTask(this)" />
            {{ task.text }}
            <input type="button" value="delete" ng-click="onDeleteTask(this)" />
        </div>`
    };
});