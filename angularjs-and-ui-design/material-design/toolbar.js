app.controller('ToolbarCtrl', function($scope, $mdDialog) {
  $scope.showCreateIssueDialog = function($event) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: $event,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };

  $scope.projects = [
        { id: '1', name: 'TCMS', category: 'recent' },
        { id: '2', name: 'OnePieceJS', category: 'recent' },
        { id: '3', name: 'Cantas', category: 'recent' },
        { id: '1', name: 'TCMS', category: 'all' },
        { id: '2', name: 'OnePieceJS', category: 'all' },
        { id: '3', name: 'Cantas', category: 'all' }
      ];
  $scope.project =  { id: '1', name: 'TCMS', category: 'recent' };

  $scope.issue_types = [
    { id: '1', name: 'Bug', icon: 'bug_report' },
    { id: '2', name: 'New Feature', icon: 'local_florist' },
    { id: '3', name: 'Task', icon: 'mail' },
    { id: '4', name: 'Improvement', icon: 'trending_up' },
    { id: '5', name: 'Epic', icon: 'local_offer' },
    { id: '6', name: 'Story', icon: 'face' },
    { id: '7', name: 'Risk', icon: 'flash_on' },
    { id: '8', name: 'Milestone', icon: 'cake' }
  ];

  $scope.issue_type = { 'id': 1, 'name': 'Bug' };

}

});