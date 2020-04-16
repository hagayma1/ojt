app.controller("addTaskController", ['$scope', 'tasksManager', function($scope, tasksManager) {
    $scope.onAddTask = function() {
        let task = {text:$scope.newTask, checked:false};
        tasksManager.add(task).then(refresh => {
            $scope.newTask = "";
            refresh();
        }).catch(err => {
            alert(err);
        });
    }
}]).directive("addtask", function() {
    return {
        restrict: 'E',
        templateUrl: '../partials/addTask.html'
    };
});