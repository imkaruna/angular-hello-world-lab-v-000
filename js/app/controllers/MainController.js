function MainController($scope) {
  $scope.name = "Kay"
  $scope.email = "thisisme@me.com"
  $scope.phone = "445-566-7898"
}

angular
  .module('app')
  .controller('MainController', MainController);
