app.controller("mainController", ['$scope', 'tasksManager', function($scope, tasksManager) {
    tasksManager.init($scope.$apply.bind($scope));
    $scope.searchText = "";
}]);
