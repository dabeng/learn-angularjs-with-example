app.controller('IssuesContainerCtrl', function($scope, $element) {

  $scope.issues = [
    { id: '1', icon: 'trending_up', name: 'TCMS-462' , summary: 'implement html fragment updating with dynamic dom building instead of the redundant html segment' },
    { id: '2', icon: 'trending_up', name: 'TCMS-434' , summary: 'replace unnecessary form submission with ajax update in order to avoid unnecessary whole page refresh' },
    { id: '3', icon: 'trending_up', name: 'TCMS-400' , summary: 'promote the performance optimization of front-end based on Google PageSpeed Insights（app level） and Chrome Dev Tools(function level)' },
    { id: '4', icon: 'local_florist', name: 'TCMS-508' , summary: 'with the help of revok and pen-test, avoid XSS attcks ' },
    { id: '5', icon: 'trending_up', name: 'TCMS-555' , summary: 're-organize js code with uniform namespace, avoiding global scope as far as possible' },
    { id: '6', icon: 'face', name: 'TCMS-602', summary: 'remove the redundant nested callback functions' },
    { id: '7', icon: 'trending_up', name: 'TCMS-608' , summary: 'improve the jquery selectors'},
    { id: '8', icon: 'local_florist', name: 'TCMS-700', summary: 'replace js namespacing pattern with modular js pattern based on require.js' },
    {id: '9', icon: 'mail', name: '', summary: 'build complete unit tests for front-end code based on Qunit'}
  ];

  // $scope.focusItem = function($event) {
  //   $element.find('md-list-item').removeClass('selected');
  //   angular.element($event.target).closest('md-list-item').addClass('selected');
  // };

});