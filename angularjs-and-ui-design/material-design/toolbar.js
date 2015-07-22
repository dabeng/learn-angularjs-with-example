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
        { category: 'recent', name: 'TCMS' },
        { category: 'recent', name: 'OnePieceJS' },
        { category: 'recent', name: 'Cantas' },
        { category: 'all', name: 'TCMS' },
        { category: 'all', name: 'OnePieceJS' },
        { category: 'all', name: 'Cantas' }
      ];
}

});