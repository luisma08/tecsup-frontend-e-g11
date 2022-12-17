import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    autoplay:{
        delay:500,
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 60,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 80,
        }
      }
  });