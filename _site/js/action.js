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
$('.hand').click(function(){
    $('#header_donation').modal('show')
});



    $('.modal').on('show.bs.modal', function () {
        $('.modal-content').css({'height': ($(window).height()-130), 'overflow':'scroll','margin-top':'91px'});
    });

});
