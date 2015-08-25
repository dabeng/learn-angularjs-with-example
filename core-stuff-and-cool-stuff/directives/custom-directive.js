app.controller('CustomDirectiveCtrl', function($scope, $element) {

   hljs.highlightBlock($element.find('.boilerplate').find('code')[0]);

  $scope.tags = [ 'AngularJS', 'React', 'Polymer', 'Meteor', 'Ember','Backbone.js', 'jQuery' ];

  $scope.toggleTips = function($event) {
    $scope.$emit('openTips', $event);
  };

  $scope.toggleCode = function() {
    $scope.$emit('toggleCode', $element.find('.pane-sourcecode'));

    this.showCode = !this.showCode;
    this.toggleCodeTip = this.showCode ? 'example' : 'source code';
  };

});