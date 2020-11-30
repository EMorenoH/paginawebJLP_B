$('.container-menu.covid').hide();

//$('.container-menu-covid').css({
//    left: '-100%'
//});


$('.icon-menu-covid').on('click', function(){
    
    $('.container-menu-covid').show();
    $('.container-menu-covid').animate({
        left: '0%'
    }, 'swing');
    
    $('main').addClass("main2");
    
})


$('.close-covid').on('click', function(){
    
    $('.container-menu-covid').animate({
        left: '-100%'
    }, 'swing');
    $('main').removeClass("main2");
    
})