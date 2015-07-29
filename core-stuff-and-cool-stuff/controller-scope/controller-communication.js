app.controller('ControllerCommunicationCtrl', function($scope, $element) {

  $scope.showCode = false;
  $scope.toggleCodeTip = 'source code';

  $element.find('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $scope.toggleCode = function() {
    this.showCode = !this.showCode;
    this.toggleCodeTip = this.showCode ? 'example' : 'source code';
  };

});

app.controller('SelfCtrl', function($scope) {
  $scope.makeInvitation = function () {
    $scope.$broadcast('to-child', 'Child');
    $scope.$emit('to-parent', 'Parent');
    $scope.$emit('to-brother', 'Brother');
  };
});

app.controller('ParentCtrl', function($scope) {
  $scope.myResponse = 'Parent Node';

  $scope.$on('to-parent', function(event,data) {
    $scope.myResponse = data + ': anytime is OK!';
  });

  $scope.$on('to-brother', function(event,data) {
    $scope.$broadcast('to-another-child', data);
  });

  $scope.reset = function() {
    $scope.myResponse = 'Parent Node';
    $scope.$broadcast('reset');
  };

  // the following code snippets alse work, but it's redundant
  // $scope.$on('reset', function(event,data) {
  //   $scope.myResponse = 'Parent Node';
  // });
});

app.controller('ChildCtrl', function($scope){
  $scope.myResponse = 'Child Node';

  $scope.$on('to-child', function(event,data) {
    $scope.myResponse = data + ': anytime is OK!';
  });

  $scope.$on('reset', function(event,data) {
    $scope.myResponse = 'Child Node';
  });
});

app.controller('BrotherCtrl', function($scope){  
	$scope.myResponse = 'Brother Node';

  $scope.$on('to-another-child', function(event,data) {  
    $scope.myResponse = data + ': anytime is OK!';
  });

  $scope.$on('reset', function(event,data) {
    $scope.myResponse = 'Brother Node';
  });
});