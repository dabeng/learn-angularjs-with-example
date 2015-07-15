var app = angular.module('myApp', ['ngAnimate'])
  .controller('RootCtrl', function($scope) {

    $scope.singleWindow = false;

    $scope.$on('openSingleWindow', function(event, data) {
      console.log(data);
      $scope.singleWindow = !$scope.singleWindow;
    });
  });