$(document).ready(function () {
    $('.owl-carousel.owl-carousel-articles').owlCarousel({
        loop: true,
        margin: 10,
        rtl:true,
        responsiveClass: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })   


    $('.owl-carousel.owl-carousel-articles-page').owlCarousel({
        loop: true,
        margin: 10,
        rtl:true,
        responsiveClass: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })  
     
});
