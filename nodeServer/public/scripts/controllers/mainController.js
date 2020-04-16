app.controller("mainController", function($scope, tasksManager) {
    tasksManager.init(new FetchManager(), $scope.$apply.bind($scope));
    $scope.searchText = "";
});
