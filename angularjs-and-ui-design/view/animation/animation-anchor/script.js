angular.module('animationAnchor', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .state('profile', {
    url: '/profile/:index',
    templateUrl: 'profile.html',
    controller: 'ProfileController'
  });
})
.run(['$rootScope', function($rootScope) {
  $rootScope.candidates = [
    { index: 0, name:'Sebastiane', department:'Philosophy' },
    { index: 1, name:'Wendy', department:'Mathematics' },
    { index: 2, name:'Mike', department:'Economics' },
    { index: 3, name:'Adam', department:'Computer Science' },
    { index: 4, name:'Barton', department:'Electronics'} ,
    { index: 5, name:'Clark', department:'Accountancy' },
    { index: 6, name:'Emma', department:'Mechanical Engineering' },
    { index: 7, name:'George', department:'Communications' }
  ];
}])
.controller('HomeController', [function() {
  //empty
}])
.controller('ProfileController', function($rootScope,$scope, $stateParams) {
  $scope.candidate = $rootScope.candidates[parseInt($stateParams.index, 10)];
});