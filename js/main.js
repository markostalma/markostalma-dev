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

    // Srcoll down button
    $('#scroll-down-btn').click(function () {
        $('#first-screen-home').fadeOut();
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