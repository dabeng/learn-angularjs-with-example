app.controller('ControllerCommunicationCtrl', function($scope, $element) {

  $scope.showCode = false;
  $scope.toggleCodeTip = 'source code';

  $scope.toggleCode = function() {
    this.showCode = !this.showCode;
    this.toggleCodeTip = this.showCode ? 'example' : 'source code';
  };


});