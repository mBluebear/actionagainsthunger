$(document).ready(function () {
    $('.play').on('click', function (ev) {

        $("#video")[0].src += "?autoplay=1";
        ev.preventDefault();
        $(this).hide();
    });

    jQuery(function ($) {

        $('button.navbar-toggle').on('click', function () {
            var $el = $(this),
                textNode = this.lastChild;
            $el.find('span').toggleClass('glyphicon-remove glyphicon-align-justify');
        });
    });
    $(".back_top").click(function () {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 90) {
            $('nav.navbar.navbar-default').addClass('scroll');
        } else {
            $('nav.navbar.navbar-default').removeClass('scroll');
        }

    });
$('.hand, .help_us_button').click(function(){
    $('#header_donation').modal('show')
});

    $('.learn_more_button').click(function(){
        $('#nutrition').modal('show')
    });

    $('.modal').on('show.bs.modal', function () {
        $('.modal-content').css({'height': ($(window).height()-130), 'overflow':'scroll','margin-top':'91px'});
    });

    $('.menu_action').click(function(){
        $('.action_menu_click').show();
        if($(this).hasClass('make_donation'))
        {
            $('.action_menu_click').show();
        }

        if($(this).hasClass('fundraise'))
        {
            console.log('s');
        }

        if($(this).hasClass('give_monthly'))
        {
            console.log('s');
        }

        if($(this).hasClass('buy_live_saving'))
        {
            console.log('s');
        }

    });


});
