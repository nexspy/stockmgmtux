(function($) {

    $(document).ready(function() {

        var $sel_all = $('.item-header .checkbox input[type=checkbox]');

        $sel_all.change(function(e) {
            var val = $(this).prop('checked');
            $('.item-list .checkbox input[type=checkbox]').prop('checked', val);
        })

    });

})(jQuery);
$(document).ready(function(){

    var current_page = 'products-manage';
    var $btn_nav = $('.nav_btn');
    var $btn_link = $('.sidebar > ul > li');


    function start() {
        $('.page-' + current_page).fadeIn();
    }

    start();

    /**
     * Event : mobile menu burger click
     */
    $btn_nav.click(function(){
        $('.mobile_nav_items').toggleClass('active');
    });

    /**
     * Event : sidebar menu clicked
     */
    $btn_link.click(function(e) {
        e.preventDefault();
        var page = $(this).attr('db-page');
        
        // update page content visibility
        $('.page').hide();

        console.log('current: ' + current_page);
        console.log(e.target);
        console.log($(e.target).attr('db-page'))

        current_page = $(e.target).attr('db-page');
        $('.page-' + current_page).fadeIn();

        // update link classes
        $btn_link.removeClass('active');
        $(this).addClass('active');
    });

});

