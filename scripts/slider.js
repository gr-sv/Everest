const swiper = new Swiper('.swiper', {
    slidesPerView: 3,

    spaceBetween: 31,

    loop: true,

    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

    breakpoints: {
        320: {
            slidesPerView: 1
        },

        715: {
            slidesPerView: 2,
            spaceBetween: 25
        },

        801: {
            slidesPerView: 2,
            spaceBetween: 31
        },

        1025: {
            slidesPerView: 3
        }
    }
});
