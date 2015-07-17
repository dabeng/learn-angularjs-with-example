app.controller('AnimationCtrl', function($scope, $element) {
    // customize the style of UI elements on toolbar
    $scope.toggleTips = function($event) {
      $scope.$emit('openTips', $event);
    }


    $element.find('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    $scope.toggleWindow = function() {
      $scope.$emit('openSingleWindow', $element);
    };

    $scope.candidates =
      [{name:'Sebastiane', department:'Philosophy'},
       {name:'Wendy', department:'Mathematics'},
       {name:'Mike', department:'Economics'},
       {name:'Adam', department:'Computer Science'},
       {name:'Barton', department:'Electronics'},
       {name:'Clark', department:'Accountancy'},
       {name:'Emma', department:'Mechanical Engineering'},
       {name:'George', department:'Communications'},
       {name:'Mike', department:'Civil Engineering'},
       {name:'Marina', department:'Human Resources'},
       {name:'Julia', department:'Tourism Science'},
       {name:'Donald', department:'Politics'}];

    $scope.myFilter = {};
    $scope.myFilter.sortby = 'name';

    $scope.newCandidate = {};
    $scope.appendCandidate = function() {
      if (this.newCandidate.name && this.newCandidate.department) {
        this.candidates.push({ 'name': this.newCandidate.name, 'department': this.newCandidate.department });
      }
    };
  });