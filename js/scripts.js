// swiper
var livePriceSwiper= new Swiper(".livePriceSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 4.3,
    }
  },
  autoplay: {
    delay: 2500,
  }
});
var banner= new Swiper(".banner", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var category= new Swiper(".category", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var services= new Swiper(".services", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
  },
});
var priceList= new Swiper(".priceList", {
  loop: true,
  spaceBetween: 48,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    }
  },
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});