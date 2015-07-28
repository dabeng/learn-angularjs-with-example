var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate'])
  .controller('RootCtrl', function($scope) {

    $scope.$on('openTips', function(event, data) {
      var popover = angular.element('.popover');
      if (popover.length) {
        popover.children('.arrow').css('margin-left',
          angular.element(data.target).offset().left - (popover.outerWidth()/2) - 30);
      }
    });

  });