'use strict';

angular.module('myApp').directive('tagPool', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      datasource: '='
    },
    templateUrl: 'tag-pool.html',
    controller: function($scope, $element, $attrs) {
      $scope.selectTag = function($event) {
        var clickedTag = angular.element($event.target);
        if (clickedTag.is('.selected')) {
          clickedTag.removeClass('selected');
        } else {
          clickedTag.addClass('selected');
        }
      };

      $scope.closeTag = function($event) {
        $event.stopPropagation();
        var closedTag = angular.element($event.target).parent()[0].childNodes[0].nodeValue.trim();
        angular.forEach($scope.datasource, function(item, index) {
          if (closedTag === item) {
            $scope.datasource.splice(index, 1);
          }
        });
      };

      $scope.addTag = function($event) {
        $event.stopPropagation();

        if ($event.which === 13) {
          var inputTag = angular.element($event.target);
          var tagName = inputTag.val().trim();
          if (tagName) {
            $scope.datasource.push(tagName);
            inputTag.val('');
          }
        }
      };

      $scope.deleteTags = function($event) {

        $event.stopPropagation();
        var selectedTags = $element.find('.selected');
        if ($event.which === 46 && selectedTags.length) {
          var tagNames = [];
          angular.forEach(selectedTags, function(item, index) {
            tagNames.push(item.childNodes[0].nodeValue.trim());
          });
          $scope.datasource = $scope.datasource.filter(function(item) {
            return tagNames.indexOf(item) < 0;
          });
        }
      };

    }
  };
});