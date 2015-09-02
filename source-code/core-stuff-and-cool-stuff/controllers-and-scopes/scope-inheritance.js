app.controller('ScopeInheritanceCtrl', function($scope, $element, $timeout,$location, $anchorScroll, $routeParams) {
   // $location.hash($location.$$path.slice(1));
   // $anchorScroll(); 

  $scope.toggleTips = function($event) {
    $scope.$emit('openTips', $event);
  };
  $timeout(function() {
   angular.forEach($element.find('code'), function(block, index) {
     hljs.highlightBlock(block);
   });
  }, 10);
})
.controller('MainController', function($scope, $rootScope) {
  $rootScope.subject = "Today, we'll disscuss AngularJS.";
  $scope.product = 'AngularJS';
  $scope.job = 'front-end';
})
.controller('ChildController', function($scope) {
  $scope.job = 'javascript';
})
.controller('GrandChildController', function($scope) {
  $scope.job = 'MEAN.JS';
});