app.controller("addTaskController", function($scope) {
    $scope.onAddTask = function() {
        let task = {text:$scope.newTask, checked:false};
        tasksManager.add(task);
        $scope.newTask = "";
    }
}).directive("addtask", function() {
    return {
        restrict: 'E',
        template: `<div class="card-container">
        <a class="circle-link" ng-click="onAddTask()" title="Add To List">
      <svg class="material-icons" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
        </a>
        <div class="new-task-textbox">
          <input type="text" placeholder="Your task here" ng-model="newTask"/>
        </div>
    </div>`
    };
});