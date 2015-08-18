app.controller('CustomDirectiveCtrl', function($scope, $element) {

  $scope.tags = [ 'AngularJS', 'React', 'Polymer', 'Meteor', 'Ember','Backbone.js', 'jQuery' ];

  $scope.toggleTips = function($event) {
    $scope.$emit('openTips', $event);
  };

  $scope.toggleCode = function() {
    if (!$element.find('.hljs').length) {
      angular.forEach($element.find('code'), function(block, index) {
        hljs.highlightBlock(block);
      });
    }
    this.showCode = !this.showCode;
    this.toggleCodeTip = this.showCode ? 'example' : 'source code';
  };

});