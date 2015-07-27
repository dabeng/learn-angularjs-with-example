app.controller('RightSidebarCtrl', function($scope, $element, $timeout, $mdSidenav, $mdUtil, $log) {

  $scope.versions = [
    { id: '1', name: '3.8.13' , complete: 100 },
    { id: '2', name: '3.8.14' , complete: 100 },
    { id: '3', name: '3.8.15' , complete: 100 },
    { id: '4', name: '4.x' , complete: 0 },
    { id: '5', name: '4.0' , complete: 0 },
    { id: '6', name: '3.9.0', complete: 50 },
    { id: '7', name: '3.9.1' , complete: 0},
    { id: '8', name: '3.9.2', complete: 0 }
  ];

  $scope.closeSidebar = function($event) {
    $scope.$emit('closeSidebar', $($event.target).closest('.sidebar'));
  };

  $scope.$on('openIssueWindow', function(event, data) {
    $scope.name = data.name;
    $scope.summary = data.summary;
  });



});