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

    $('.learn_more_button, .learn_more').click(function(){
        $('#nutrition').modal('show')
    });

    $('.modal').on('show.bs.modal', function () {
        $('.modal-content').css({'height': ($(window).height()-130), 'overflow':'scroll','margin-top':'91px'});
    });

    $('.menu_action').click(function(){
        $('.action_menu_click').show();
        $('.action_menu_click div.action_click').hide();
        $('.menu_action').removeClass('active');
        if($(this).hasClass('make_donation'))
        {
            $('.action_menu_click .make_donation').show();
            $('.menu_action.make_donation').addClass('active');
        }


        if($(this).hasClass('fundraise'))
        {
            $('.action_menu_click .fundraise').show();
            $('.menu_action.fundraise').addClass('active');
        }

        if($(this).hasClass('give_monthly'))
        {
            $('.action_menu_click .give_monthly').show();
            $('.menu_action.give_monthly').addClass('active');
        }

        if($(this).hasClass('buy_live_saving'))
        {
            $('.action_menu_click .buy_live').show();
            $('.menu_action.buy_live_saving').addClass('active');
        }

    });



        $('#checkbox').change(function(){
            setInterval(function () {
                moveRight();
            }, 3000);
        });

        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        $('#slider').css({ width: slideWidth, height: slideHeight });

        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

        $('#slider ul li:last-child').prependTo('#slider ul');

        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        $('div.control_prev').click(function () {
            moveLeft();
        });

        $('div.control_next').click(function () {
            moveRight();
        });

});
