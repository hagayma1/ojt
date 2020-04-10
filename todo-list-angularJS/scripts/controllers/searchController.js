app.controller("searchController", ['$scope',function($scope) {

}]).directive("search", function() {
    return {
        restrict: 'E',
        template: '<input type="text" placeholder="search..." ng-model="$parent.searchText"/>'
    };
});