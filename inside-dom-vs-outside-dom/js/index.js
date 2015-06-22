(function($) {

  $(function() {
    // switch viewport
    $('.feature').on('click', '.btn-toggle', function() {
      var $this  = $(this);
      if ($this.is('.fa-square')) {
        $this.removeClass('fa-square').addClass('fa-th-large');
        $this.closest('.feature-wrapper').removeClass('col-md-6 ').addClass('col-md-12')
          .siblings().removeClass('show').addClass('hidden');
        $this.closest('.feature-pk').siblings().removeClass('show').addClass('hidden');
      } else {
        $this.removeClass('fa-th-large').addClass('fa-square');
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

    // event-binding feature
    $( '#ng-event-bind' ).load( 'view/angularjs/event-bind.html', function() {
      angular.bootstrap('#ng-event-bind', ['eventBindApp']);
    });

    // data-binding feature
    $( '#ng-data-bind' ).load( 'view/angularjs/data-bind.html', function() {
      angular.bootstrap('#ng-data-bind', ['dataBindApp']);
    });

      // show/hide feature
    $( '#ng-show-hide' ).load( 'view/angularjs/show-hide.html', function() {
      angular.bootstrap('#ng-show-hide', ['showHideApp']);

      // just need to highlight all the source code at a time
      $('code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

  });

}(jQuery));