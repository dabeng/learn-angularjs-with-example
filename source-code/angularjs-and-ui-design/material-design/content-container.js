app.controller('ContentContainerCtrl', function($scope, $element) {

  $scope.$on('selectOneVersion', function(event, data) {
    $scope.$broadcast('filterIssues', data);
  });



});