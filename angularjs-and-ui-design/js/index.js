var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate'])
  .controller('RootCtrl', function($scope) {

    $scope.singleWindow = false;

    $scope.$on('openSingleWindow', function(event, data) {
      var toggleButton = data.find('.btn-toggle');
      var exampleCard = data.parent();
      if (!exampleCard.is('.single-window')) {
        toggleButton.removeClass('fa-square-o').addClass('fa-th-large');
        exampleCard.addClass('single-window').siblings().addClass('hidden');
      } else {
        toggleButton.removeClass('fa-th-large').addClass('fa-square-o');
        exampleCard.removeClass('single-window').siblings().removeClass('hidden');
      }
    });

    $scope.$on('openTips', function(event, data) {
      var popover = angular.element('.popover');
      if (popover.length) {
        popover.children('.arrow').css('margin-left',
          angular.element(data.target).offset().left - (popover.outerWidth()/2) - 30);
      }
    });

  });