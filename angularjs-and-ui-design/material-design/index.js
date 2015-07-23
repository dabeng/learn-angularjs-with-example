var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('brown')
    .warnPalette('light-green');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  // $scope.toggleSidenav = function(menuId) {
  //   $mdSidenav(menuId).toggle();
  // };
 
}]);