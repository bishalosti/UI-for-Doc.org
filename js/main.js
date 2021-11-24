// article carousel
$('.article-carousel').owlCarousel({
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 35,
            stagePadding: 15
        },
        768: {
            items: 2,
            margin: 15,
            stagePadding: 15
        },
        1400: {
            items: 3,
            margin: 40,
            stagePadding: 30,
        }
    }
})

// reveiew carousel
$('.review-carousel').owlCarousel({
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 35,
            stagePadding: 15,
        },
        768: {
            items: 2,
            margin: 35,
            stagePadding: 15,
        },
        1366: {
            items: 3,
            margin: 80,
            stagePadding: 30,
        }
    }
})

// specialist carousel
$('.specialist-carousel').owlCarousel({
    nav: false,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1,
            margin: 35,
            stagePadding: 15,
            dots: true,
            loop: true,
        },
        768: {
            items: 3,
            margin: 35,
            stagePadding: 15,
            dots: false,
            loop: false,
            mouseDrag: false,
            freeDrag: false,
            pullDrag: false,
            touchDrag: false
        },
    }
})

// featured carousel
$('.featured-carousel').owlCarousel({
    nav: false,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1,
            margin: 35,
            stagePadding: 15,
            dots: true,
            loop: true,
        },
        768: {
            items: 3,
            margin: 35,
            stagePadding: 15,
            dots: false,
            loop: false,
            mouseDrag: false,
            freeDrag: false,
            pullDrag: false,
            touchDrag: false
        },
    }
})

// Triggers on click on any element in document
$(document).on('click', function (ev) {
    if (ev.target.closest('.nav-trigger')) {
        // toggle menu
        console.log('here')
        $('.nav-content').toggleClass('show');
    } else if (!ev.target.closest('.nav-content') && !ev.target.closest('.nav-trigger')) {
        // close menu on clik outside
        $('.nav-content').removeClass('show');
    }
})