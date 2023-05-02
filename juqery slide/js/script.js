$(document).ready(function () {
    // Owl.js - karuseller yaratmaga imkan veren meshur Jquery plaginidir.
    // Tamamile pulsuz olmasi ve kommersiya istifadesi uchun uygun olmasi da vacibdir
    // Bundan elave, plagin ela brauzer desteyime mlikdir

    $('.carousel').owlCarousel({
        // item:5,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:250,
        mouseDrag:false,
        touchDrag:true,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'],
            // dots:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3
            }
        }








    })










});











