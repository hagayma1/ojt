app.controller("addTaskController", function($scope) {
    $scope.onAddTask = function() {
        let task = {text:$scope.newTask, checked:false};
        tasksManager.add(task);
        $scope.newTask = "";
    }
});