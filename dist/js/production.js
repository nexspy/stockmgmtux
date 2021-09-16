$(document).ready(function(){

    var $btn_nav = $('.nav_btn');
    var $btn_link = $('.sidebar a');

    $btn_nav.click(function(){
        $('.mobile_nav_items').toggleClass('active');
    });

    $btn_link.click(function(e) {
        e.preventDefault();

        $btn_link.removeClass('active');
        $(this).addClass('active');
    });

});

