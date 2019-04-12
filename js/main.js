$(document).ready(function () {

    console.log("Everything is ready!");

    /*=== HOME PAGE - first section ===*/

    // Hamburger menu
    $('.menu').click(function () {
        $(this).toggleClass('open');

    });
    // Toggle menu
    $('.menu').click(function () {
        $('ul.menu-slider').fadeToggle(180);

    });

    // Navigation menu on click
    $('#navigation-menu span').click(function () {
        $('#navigation-menu span').removeClass('active');
        $(this).addClass('active');
    });

    // Navigation menu on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() < $('section[data-anchor="about"]').offset().top) {
           $('#navigation-menu span').removeClass('active');
        }
        
        if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top) {
          $('#navigation-menu span').removeClass('active');
          $('#navigation-menu span:eq(0)').addClass('active');
        }
        
        if ($(this).scrollTop()  >= $('section[data-anchor="work"]').offset().top - 300) {
          $('#navigation-menu span').removeClass('active');
          $('#navigation-menu span:eq(1)').addClass('active');
        }
        
        if ($(this).scrollTop() >= $('section[data-anchor="process"]').offset().top - 400) {
          $('#navigation-menu span').removeClass('active');
          $('#navigation-menu span:eq(2)').addClass('active');
        }
        
        if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top - 400) {
          $('#navigation-menu span').removeClass('active');
          $('#navigation-menu span:eq(3)').addClass('active');
          $('#navigation-menu span').css('background-color', '#450468');
          $('<style data-test>#navigation-menu span.active:before { border-color: #450468; }</style>').appendTo('head');
          $('<style data-test>#navigation-menu span:hover:before { border-color: #450468; }</style>').appendTo('head');
        }
        else{
          $('#navigation-menu span').css('background-color', '#ffffff');
          $('#navigation-menu span:before').css('border-color', '#ffffff');
            $("style[data-test]").remove();
        }
    });

    // Srcoll down button
    $('#scroll-down-btn').click(function () {
        $('.first-screen-home').fadeOut();
        $('.second-screen-home').fadeIn();
    });

    $('#scroll-down-btn-two').click(function () {
        $('.first-screen-home').fadeOut();
        $('#second-screen-home').fadeIn();
    });

    // Hover profile img
    $('#profile-img').hover(function () {
        $(this).attr('src', 'img/about-me-me-hover.png').fadeIn();
    }, function () {
        $(this).attr('src', 'img/about-me-me.png').fadeIn();
    });

    console.log("Everything is fine! :)");

});