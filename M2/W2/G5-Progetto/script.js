document.addEventListener('DOMContentLoaded', function () {
    const splide1 = new Splide('#splide1', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            450: {
                perPage: 1,
            },
            768: {
                perPage:2
            },
            1024: {
                perPage:3,
            },
        },
        
    });

    const splide2 = new Splide('#splide2', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            450: {
                perPage: 1,
            },
            768: {
                perPage:2
            },
            1024: {
                perPage:3,
            },
        },
    });

    const splide3 = new Splide('#splide3', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            450: {
                perPage: 1,
            },
            768: {
                perPage:2,
            },
            1024: {
                perPage:3,
            }
        },
    });

    splide1.mount();
    splide2.mount();
    splide3.mount();
});

