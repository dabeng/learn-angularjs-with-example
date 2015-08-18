var app = angular.module('myApp', ['ui.bootstrap'])
  .controller('RootCtrl', function($scope, $rootScope) {

    $scope.$on('openTips', function(event, data) {
      var popover = angular.element('.popover');
      if (popover.length) {
        popover.children('.arrow').css('margin-left',
          angular.element(data.target).offset().left - (popover.outerWidth()/2) - 30);
      }
    });

    $scope.toggleCode =  function(example) {
      if (!example.find('.hljs').length) {
      angular.forEach(example.find('code'), function(block, index) {
        hljs.highlightBlock(block);
      });
    }
    // this.showCode = !this.showCode;
    // this.toggleCodeTip = this.showCode ? 'example' : 'source code';
    };

  });