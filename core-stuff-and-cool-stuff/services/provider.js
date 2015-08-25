app.config(function (authenticationProvider) {
  authenticationProvider.setName('Snoopy');
});

app.controller('ProviderCtrl', function($scope, $element, authentication) {

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

  $scope.dataFromProvider = authentication.name;

});