$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW();
wow.init();

$(document).ready(function() {

    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1400,
        rtl: true,
        margin: 5,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    $('.sub-sliders .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        margin: 30,
        stagePadding: 15,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        dotsEach: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            550: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.stat-counter').each(function() {
        var myCounter = $(this),
            countTo = myCounter.attr('count');

        $({ countNum: myCounter.text() }).animate({
                countNum: countTo
            },

            {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    myCounter.text(Math.floor(this.countNum));
                },
                complete: function() {
                    myCounter.text(this.countNum);
                }
            }
        );
    });

    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box2").fadeIn(500);
    });
    $(".close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box2").fadeOut(500);
    });

    if ($(window).width() <= 991) {
        $(".config-box .nav-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".config-list").slideToggle(300);
        });
    }



    //This is To make faetures as slider in small screens
    if ($(window).width() <= 991) {
        $(".goals .goals-box").addClass("owl-carousel owl-theme");
        $(".goals-box .goal").removeClass("owl-carousel");
        $('.goals .owl-carousel').owlCarousel({
            margin: 20,
            rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1,

                },
                620: {
                    items: 2,
                }
            }
        })
    } else {
        $(".goals .goals-box").removeClass("owl-carousel");
        $(".goals-box .goal").removeClass("owl-carousel");
    };
})