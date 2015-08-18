'use strict';

angular.module('myApp').directive('tagPool', function() {
  return {
    restrict: 'E',
    scope: {
      datasource: '='
    },
    templateUrl: 'tag-pool.html',
    link: function(scope, iElement, iAttrs) {
      var a =1;
    }
  };
});