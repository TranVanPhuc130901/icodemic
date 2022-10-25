$('.banner.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    // animateOut: 'fadeOut',
   
})

$('.sec1_trangchu .right .bot.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
   
})


$('.sec1_trangchu .left .gr_items.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:false,
    dots:true,
    margin: 20,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})

$('.sec2_trangchu .right .bot .gr_item.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin: 25,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})


$('.logo_ow .wrp .gr_items.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin: 25,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    // autoHeight:true,
    autoWidth:true,
    items: 9,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:9
        }
    }
   
})

$('.thuvienanhct .left .gr_item.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin: 25,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})
$('.duanct .left .gr_itemDa.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    margin: 25,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})
$('.menu_btn').on('click', function(){
    $('header .bot ').show()
    $('header .light').show()
});

$('header .light').on('click', function(){
    $('header .bot').hide()
    $('header .light').hide()
});

$('.menu_z').on('click',function(){
    $(' .right_menu').toggle().animate({
       
    })
    // $('header .light').toggle()
})

$('.menu_chat').on('click',function(){
    $(' .right2_menu').toggle().animate({
       
    })
    // $('header .light').toggle()
})

// $('.header .light').on('click',function(){
//     $('.right_menu').hide()
//     $('header .light').hide()
// })





$('.wrp .left .date_time .cong').click(function(){
    $('.wrp .left .decs').animate({
        fontSize: '+=2px',
    });
    $('.wrp .left .des').animate({
        fontSize: '+=2px',
    });
});
$('.wrp .left .date_time .tru').click(function(){
    $('.wrp .left .decs').animate({
        fontSize: '-=2px',
    });
    $('.wrp .left .des').animate({
        fontSize: '-=2px',
    });
});

