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

        850: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        969: {
            slidesPerView: 3
        }
    }
});
