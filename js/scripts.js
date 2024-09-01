// swiper
var livePriceSwiper= new Swiper(".livePriceSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4.3,
    }
  },
  autoplay: {
    delay: 2500,
  }
});
var banner= new Swiper(".banner", {
  spaceBetween: 20,
  slidesPerView: 1.6,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
    },
    992: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var category= new Swiper(".category", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2.4,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
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
  spaceBetween: 18,
  slidesPerView: 3,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
    1300: {
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

// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('img').classList.toggle('active');
  })
})

// go to up

window.addEventListener('scroll',()=>{
  if (window.scrollY>150) {
    document.getElementById('goToUp').style.opacity='100';
    document.getElementById('goToUp').style.visibility='visible';
  } else {
    document.getElementById('goToUp').style.opacity='0';
    document.getElementById('goToUp').style.visibility='hidden';
  }
})