app.controller("addTaskController", function($scope) {
    $scope.tasksManager = $scope.$parent.tasksManager;
    
    $scope.onAddTask = function() {
        let task = {text:$scope.newTask, checked:false};
        $scope.tasksManager.add(task);
        $scope.newTask = "";
    }
}).directive("addtask", function() {
    return {
        restrict: 'E',
        templateUrl: '../partials/addTask.html'
    };
});