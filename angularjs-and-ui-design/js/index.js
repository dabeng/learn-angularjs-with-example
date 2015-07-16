var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate'])
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

    // angular.element('.example-card').popover({
    //   selector: '.btn-toggleTips',
    //   html : true,
    //   content: function() {
    //     return angular.element(this).siblings('.coreTips').html();
    //   }
    // });

  });