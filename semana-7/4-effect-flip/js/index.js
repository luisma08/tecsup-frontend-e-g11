import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

var slideContainer1 = document.querySelector('.mySwiper1');
var slideContainer2 = document.querySelector('.mySwiper2');
var slideContainer3 = document.querySelector('.mySwiper3');

var swiper1 = new Swiper(slideContainer1, {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper2 = new Swiper(slideContainer2, {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(slideContainer3, {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  slideContainer1.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper1.slideNext();
  });

  slideContainer1.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper1.slideTo(0);
  });

  slideContainer2.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper2.slideNext();
  });

  slideContainer2.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper2.slideTo(0);
  });
  slideContainer3.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper3.slideNext();
  });

  slideContainer3.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper3.slideTo(0);
  });



