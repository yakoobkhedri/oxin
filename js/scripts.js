// menu


let tabsMenu = Array.from(document.querySelectorAll('.tabs'));
let tabsMenu2 = Array.from(document.querySelectorAll('.tabs2'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let tabContent2 = Array.from(document.querySelectorAll('.tabContent2 > div'));

tabsMenu.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        tabsMenu.forEach((items) => { items.classList.remove('active') });
        tabContent2.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
              content.classList.remove('active');
            }
        })
    })
})
tabsMenu2.forEach((item) => {
  item.addEventListener('mouseenter', function () {
      tabsMenu2.forEach((items) => { items.classList.remove('active') });
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent2.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
      })
  })
})
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
var blogCategory= new Swiper(".blogCategory", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
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
var experts= new Swiper(".experts", {
  loop: true,
  spaceBetween: 18,
  slidesPerView: 1,
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
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));
let accordionBtn3 = Array.from(document.getElementsByClassName('accordionBtn3'));
let filterBox = Array.from(document.getElementsByClassName('filterBox'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})
accordionBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})
accordionBtn3.forEach((item)=>{
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
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