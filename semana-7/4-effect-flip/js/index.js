import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay:{
        delay:500,
    },

    loop: true,
  });

