app.controller('IssuesContainerCtrl', function($scope, $element) {

  $scope.issues = [
    { id: '1', vId: '1', asId: '2', icon: 'trending_up', name: 'TCMS-462' , summary: 'implement html fragment updating with dynamic dom building instead of the redundant html segment' },
    { id: '2', vId: '1', asId: '1', icon: 'trending_up', name: 'TCMS-434' , summary: 'replace unnecessary form submission with ajax update in order to avoid unnecessary whole page refresh' },
    { id: '3', vId: '1', asId: '1', icon: 'trending_up', name: 'TCMS-400' , summary: 'promote the performance optimization of front-end based on Google PageSpeed Insights（app level） and Chrome Dev Tools(function level)' },
    { id: '4', vId: '2', asId: '4', icon: 'local_florist', name: 'TCMS-508' , summary: 'with the help of revok and pen-test, avoid XSS attcks ' },
    { id: '5', vId: '2', asId: '5', icon: 'trending_up', name: 'TCMS-555' , summary: 're-organize js code with uniform namespace, avoiding global scope as far as possible' },
    { id: '6', vId: '3', asId: '6', icon: 'face', name: 'TCMS-602', summary: 'remove the redundant nested callback functions' },
    { id: '7', vId: '3', asId: '6', icon: 'trending_up', name: 'TCMS-608' , summary: 'improve the jquery selectors' },
    { id: '8', vId: '4', asId: '2', icon: 'local_florist', name: 'TCMS-700', summary: 'replace js namespacing pattern with modular js pattern based on require.js' },
    { id: '9', vId: '5', asId: '2', icon: 'mail', name: '', summary: 'build complete unit tests for front-end code based on Qunit' },
    { id: '10', vId: '5', asId: '2', icon: 'bug_report', name: 'TCMS-401', summary: 'service error when searching for component in "Admin" page' },
    { id: '11', vId: '5', asId: '1', icon: 'trending_up', name: 'TCMS-404', summary: 'The input field of case summary is too small to input long text' },
    { id: '12', vId: '6', asId: '4', icon: 'trending_up', name: 'TCMS-423', summary: 'It\'s hard to get history information from Change log, sometimes it\'s impossible'},
    { id: '13', vId: '6', asId: '6', icon: 'trending_up', name: 'TCMS-425', summary: 'Improve changelog for reverting data if data lost' },
    { id: '14', vId: '6', asId: '5', icon: 'mail', name: 'TCMS-433', summary: 'migrate nitrate from django1.5 to 1.7' },
    { id: '15', vId: '6', asId: '5', icon: 'local_florist', name: 'TCMS-444', summary: 'Integration with FAS' },
    { id: '16', vId: '7', asId: '3', icon: 'bug_report', name: 'TCMS-502', summary: 'Should be status name rather than its id' },
    { id: '17', vId: '7', asId: '2', icon: 'local_florist', name: 'TCMS-505', summary: 'OpenID and OAuth2 authentication support' },
    { id: '18', vId: '7', asId: '4', icon: 'trending_up', name: 'TCMS-509', summary: 'Involve tox to test multiple Python versions support' },
    { id: '19', vId: '7', asId: '5', icon: 'local_florist', name: 'TCMS-600', summary: 'RESTful API support' },
    { id: '20', vId: '7', asId: '1', icon: 'local_florist', name: 'TCMS-610', summary: 'CI Integration - Jenkins' },
    { id: '21', vId: '7', asId: '3', icon: 'trending_up', name: 'TCMS-611', summary: 'Paginate reviewing cases, confirmed cases and run in a test case page instead of "show-more"' },
    { id: '22', vId: '7', asId: '3', icon: 'trending_up', name: 'TCMS-613', summary: 'Separate each TestPlan\'s tab page into standalone page individually instead of using anchor via URL' },
    { id: '23', vId: '8', asId: '3', icon: 'trending_up', name: 'TCMS-615', summary: 'tag filter support and operation' },
    { id: '24', vId: '8', asId: '2', icon: 'trending_up', name: 'TCMS-618', summary: 'Give a more readable view to TestCase\'s change log' },
    { id: '25', vId: '8', asId: '5', icon: 'face', name: 'TCMS-620', summary: 'TestCase Change Logs should log more info with good content format' },
    { id: '26', vId: '8', asId: '1', icon: 'mail', name: 'TCMS-622', summary: 'unify file upload' },
    { id: '27', vId: '0', asId: '4', icon: 'trending_up', name: 'TCMS-623', summary: 'auto-complete support for user related form field' },
    { id: '28', vId: '0', asId: '4', icon: 'trending_up', name: 'TCMS-626', summary: 'Upgrade supported version of Python and Django' },
    { id: '29', vId: '0', asId: '6', icon: 'mail', name: 'TCMS-627', summary: 'Replace tinymce editor with markdown' },
    { id: '30', vId: '0', asId: '6', icon: 'trending_up', name: 'TCMS-629', summary: 'Trim whitespace(e.g. "\\t", "\\n","\\r") from charfield'}
  ];
  $scope.slectedVersion = '';

  $scope.$on('filterIssues', function(event, data) {
    $scope.selectedVersion = data.slice(2);
  });

  $scope.focusOneIssue = function($event) {
    if (angular.element('#sidebar-right').is(':hidden')) {
      angular.element('#sidebar-right').toggle();
    }
    $element.find('md-list-item.selected').removeClass('selected');
    var item = angular.element($event.target).closest('md-list-item').addClass('selected');
    var data = {
      name: item.find('.md-list-item-inner').children('span')[0].textContent,
      summary: item.find('.md-list-item-inner').children('span')[1].textContent
    }
    $scope.$emit('selectOneIssue', data);
  };

});