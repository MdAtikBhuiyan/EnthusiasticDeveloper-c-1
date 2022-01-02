
// counter

$('.count').counterUp({
    delay: 10,
    time: 3000,
})

//   carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],

    responsive: {
        0: {
            items: 1,

        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
            dots: false

        },
    }
})

// scroll top

$('body').materialScrollTop();