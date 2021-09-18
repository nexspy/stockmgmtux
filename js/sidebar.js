$(document).ready(function(){

    var current_parent_page = 'products';
    var current_page = current_parent_page + '-manage';
    var $btn_nav = $('.nav_btn');
    var $btn_link = $('.sidebar > ul > li');

    /**
     * Update : sidebar active menu item and collapse
     */
    function updateSidebar() {
        $('.sidebar-menu li').removeClass('active');
        $('li[db-page=' + current_parent_page + ']').addClass('active');
    }

    function start() {
        $('.page-' + current_page).fadeIn();
        updateSidebar();
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

