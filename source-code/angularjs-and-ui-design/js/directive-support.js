app.controller('DirectiveSupportCtrl', function($scope, $element) {
    // customize the style of UI elements on toolbar
    $scope.toggleTips = function($event) {
      $scope.$emit('openTips', $event);
    }

    $scope.toggleWindow = function() {
      $scope.$emit('openSingleWindow', $element);
    };

  });