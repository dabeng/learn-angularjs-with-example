app.directive('jqDatatables', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<table class="display" width="100%"></table>',
    link: function(scope, element, attrs) {
      // apply DataTable options, use defaults if none specified by user
      var options = {};
      if (attrs.options) {
          options = scope.$eval(attrs.options);
      }

      // apply the plugin
      options.data = scope.$eval(attrs.datasource)
      element.dataTable(options);
    }
  };
});