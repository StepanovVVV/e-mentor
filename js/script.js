// MENU-BURGER
$('.header__burger').click(function(event) {
    $('.header__burger, .header__nav, .header').toggleClass('active');
    $('body').toggleClass('lock');
});
// MENU-BURGER