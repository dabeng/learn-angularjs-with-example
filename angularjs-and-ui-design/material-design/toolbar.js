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
    { 'id': '1', 'name': 'Bug'},
    { 'id': '2', 'name': 'New Feature'},
    { 'id': '3', 'name': 'Task'},
    { 'id': '4', 'name': 'Improvement'},
    { 'id': '5', 'name': 'Epic'},
    { 'id': '6', 'name': 'Story'},
    { 'id': '7', 'name': 'Risk'},
    { 'id': '8', 'name': 'Milestone'}
  ];

  $scope.issue_type = { 'id': 1, 'name': 'Bug' };

}

});