app.controller('FactoryCtrl', function($scope, $element, authenticationFactory) {

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

  authenticationFactory.setName('Snoopy');
  $scope.dataFromFactory = authenticationFactory.name;

});