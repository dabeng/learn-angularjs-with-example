app.controller('SecondaryToolbarCtrl', function($scope, $timeout, $mdSidenav, $mdUtil) {

  $scope.toggleLeftSidebar = function() {
    angular.element('#sidebar-left').toggle();
  };

});