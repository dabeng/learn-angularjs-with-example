app.controller('AnimationAnchorCtrl', function($scope, $element) {
    // customize the style of UI elements on toolbar
    $scope.toggleTips = function($event) {
      $scope.$emit('openTips', $event);
    }

    $element.find('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    $scope.toggleWindow = function() {
      $scope.$emit('openSingleWindow', $element);
    };

  });