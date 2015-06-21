(function($) {

  $(function() {
    // switch viewport
    $('.btn-toggle').on('click', function() {
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

    $('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });


  });

}(jQuery));