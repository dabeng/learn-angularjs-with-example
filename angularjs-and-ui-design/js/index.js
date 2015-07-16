var app = angular.module('myApp', ['ngAnimate'])
  .controller('RootCtrl', function($scope) {

    $scope.singleWindow = false;

    $scope.$on('openSingleWindow', function(event, data) {
      var exampleCard = data.parent();
      if (!exampleCard.is('.single-window')) {
        exampleCard.addClass('single-window').siblings().addClass('hidden');
      } else {
        exampleCard.removeClass('single-window').siblings().removeClass('hidden');
      }
    });
  });