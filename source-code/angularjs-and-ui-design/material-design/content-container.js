app.controller('ContentContainerCtrl', function($scope, $element) {

  $scope.$on('selectOneVersion', function(event, data) {
    $scope.$broadcast('filterIssues', data);
  });

  $scope.$on('selectOneIssue', function(event, data) {
    $scope.$broadcast('openIssueWindow', data);
  });

  $scope.$on('closeSidebar', function(event,data) {
    data.toggle();
  });

});