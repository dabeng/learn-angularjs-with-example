app.directive('jqDatatables', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<table class="display" width="100%"></table>',
    scope: {
      options: '=',
      datasource: '='
    },
        link: function(scope, element, attrs) {

            // apply DataTable options, use defaults if none specified by user
            // var options = {};
            // if (attrs.jqDatatables.length > 0) {
            //     options = scope.$eval(attrs.jqDatatables);
            // }

            // apply the plugin
            scope.options.data = scope.datasource;
            var dataTable = element.dataTable(scope.options);

            
            
            // watch for any changes to our data, rebuild the DataTable
            scope.$watch(scope.datasource, function(value) {
                var val = value || null;
                if (val) {
                    dataTable.fnClearTable();
                    dataTable.fnAddData(scope.datasource);
                }
            });
        }
      };
});