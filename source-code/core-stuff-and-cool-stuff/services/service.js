app.controller('ServiceCtrl', function($scope, $element, authenticationService) {

    angular.forEach($element.find('code'), function(block, index) {
      hljs.highlightBlock(block);
    });

  $scope.toggleTips = function($event) {
    $scope.$emit('openTips', $event);
  };

  $scope.toggleCode = function() {
    $scope.$emit('toggleCode', $element.find('.pane-sourcecode'));

    this.showCode = !this.showCode;
    this.toggleCodeTip = this.showCode ? 'example' : 'source code';
  };

  $scope.dataFromService = authenticationService.setName('Snoopy');

});