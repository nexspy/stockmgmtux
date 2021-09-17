(function($) {

    $(document).ready(function() {

        var $sel_all = $('.item-header .checkbox input[type=checkbox]');

        $sel_all.change(function(e) {
            var val = $(this).prop('checked');
            $('.item-list .checkbox input[type=checkbox]').prop('checked', val);
        })

    });

})(jQuery);