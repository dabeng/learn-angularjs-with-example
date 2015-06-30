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

    // binding 
    $('.feature').on('click', '.btn-toggle-code', function() {
      var $this = $(this);
      if ($this.is('.fa-chevron-circle-up')) {
        $this.removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down')
          .parent().next().children().addClass('hidden');
      } else {
        $this.removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up')
          .parent().next().children().removeClass('hidden');
      }
    });

    // event-binding feature
    $('#ng-event-bind').load( 'view/angularjs/event-bind.html', function() {
      angular.bootstrap('#ng-event-bind', ['eventBindApp']);
      formatSourceCode('#ng-event-bind');
    });
    $('#jq-event-bind').load( 'view/jquery/event-bind.html', function() {
      formatSourceCode('#jq-event-bind');
    });

    // data-binding feature
    $('#ng-data-bind').load( 'view/angularjs/data-bind.html', function() {
      angular.bootstrap('#ng-data-bind', ['dataBindApp']);
      formatSourceCode('#ng-data-bind');
    });

    // show/hide dom feature
    $('#ng-show-hide').load('view/angularjs/show-hide.html', function() {
      angular.bootstrap('#ng-show-hide', ['showHideApp']);
      formatSourceCode('#ng-show-hide');
    });
    $('#jq-show-hide').load('view/jquery/show-hide.html', function() {
      formatSourceCode('#jq-show-hide');
    });

    // show/hide feature
    $('#ng-switch-dom').load('view/angularjs/switch-dom.html', function() {
      angular.bootstrap('#ng-switch-dom', ['switchDomApp']);
      formatSourceCode('#ng-switch-dom');
    });
    $('#jq-switch-dom').load('view/jquery/switch-dom.html', function() {
      formatSourceCode('#jq-switch-dom');
    });

    // free rendering feature
    $('#ng-free-render').load('view/angularjs/free-render.html', function() {
      angular.bootstrap('#ng-free-render', ['freeRenderApp']);
      formatSourceCode('#ng-free-render');
    });
    $('#jq-free-render').load('view/jquery/free-render.html', function() {
      formatSourceCode('#jq-free-render');
    });

    // filter feature
    $('#ng-filter').load('view/angularjs/filter.html', function() {
      angular.bootstrap('#ng-filter', ['filterApp']);
      formatSourceCode('#ng-filter');
    });
    $('#jq-filter').load('view/jquery/filter.html', function() {
      formatSourceCode('#jq-filter');
    });

    // watcher behind tow-way data-bing
    $('#ng-watcher').load( 'view/angularjs/watcher.html', function() {
      angular.bootstrap('#ng-watcher', ['watcherApp']);
      formatSourceCode('#ng-watcher');
    });

  });

}(jQuery));