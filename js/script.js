$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        dots:false,
        nav:true,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        //navText : ['ZURÜCK', 'WEITER'],
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    });

    //Project silder
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
                items: 1,
                nav: false,
                margin: 0,
            },
            768:{
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
            }
        }
    })
});

