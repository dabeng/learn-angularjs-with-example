'use strict';

angular.module('myApp').directive('tagPool', function() {
  return {
    restrict: 'E',
    scope: {
      datasource: '='
    },
    templateUrl: 'tag-pool.html',
    link: function(scope, iElement, iAttrs) {
      iElement.on('click', '.tp-tag', function() {
        var clickedTag = angular.element(this);
        if (clickedTag.is('.focus')) {
          clickedTag.removeClass('focus');
        } else {
          clickedTag.addClass('focus');
        }
      });

      iElement.on('click', '.tp-close', function() {
        var clickedTag = angular.element(this);
        if (clickedTag.is('.focus')) {
          clickedTag.removeClass('focus');
        } else {
          clickedTag.addClass('focus');
        }
      });
    }
  };
});