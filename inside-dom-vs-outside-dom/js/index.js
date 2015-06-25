(function($) {

  // format the source code
  function formatSourceCode(selector) {
    $(selector).find('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  $(function() {
    // switch viewport
    $('.feature').on('click', '.btn-toggle', function() {
      var $this  = $(this);
      if ($this.is('.fa-square-o')) {
        $this.removeClass('fa-square-o').addClass('fa-th-large');
        $this.closest('.feature-wrapper').removeClass('col-md-6 ').addClass('col-md-12')
          .siblings().removeClass('show').addClass('hidden');
        $this.closest('.feature-pk').siblings().removeClass('show').addClass('hidden');
      } else {
        $this.removeClass('fa-th-large').addClass('fa-square-o');
        $this.closest('.feature-wrapper').removeClass('col-md-12 ').addClass('col-md-6')
          .siblings().removeClass('hidden').addClass('show');
        $this.closest('.feature-pk').siblings().removeClass('hidden').addClass('show');
      }
    });

    // show additional explanation
    $('.feature').popover({
        selector: '.btn-expl',
        html : true,
        content: function() {
          return $(this).siblings('.popoverContent').html();
        }
    });

    // initialize tooltips of toolbar buttons
    $('.feature').tooltip({
      selector: '[data-toggle="tooltip"]'
    });

    // event-binding feature
    $('#ng-event-bind').load( 'view/angularjs/event-bind.html', function() {
      angular.bootstrap('#ng-event-bind', ['eventBindApp']);
      formatSourceCode('#ng-event-bind');
    });

    // data-binding feature
    $('#ng-data-bind').load( 'view/angularjs/data-bind.html', function() {
      angular.bootstrap('#ng-data-bind', ['dataBindApp']);
      formatSourceCode('#ng-data-bind');
    });

    // show/hide dom feature
    $('#ng-show-hide').load( 'view/angularjs/show-hide.html', function() {
      angular.bootstrap('#ng-show-hide', ['showHideApp']);
      formatSourceCode('#ng-show-hide');
    });

    // show/hide feature
    $('#ng-switch-dom').load( 'view/angularjs/switch-dom.html', function() {
      angular.bootstrap('#ng-switch-dom', ['switchDomApp']);
      formatSourceCode('#ng-switch-dom');
    });

    // filter feature
    $('#ng-filter').load( 'view/angularjs/filter.html', function() {
      angular.bootstrap('#ng-filter', ['filterApp']);
      formatSourceCode('#ng-filter');
    });

  });

}(jQuery));