/**
 * Created by Admin on 5/24/2016.
 */
(function($) {

    $('.product-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><i aria-hidden="true" class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i aria-hidden="true" class="fa fa-chevron-right"></i></button>',
    });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i aria-hidden="true" class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i aria-hidden="true" class="fa fa-chevron-right"></i></button>',

    });


    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i aria-hidden="true" class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i aria-hidden="true" class="fa fa-chevron-right"></i></button>',
    });




})(jQuery);