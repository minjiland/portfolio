

/* event_banner / swiper */

var swiper_event_box = new Swiper(".event_banner_box", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "3",
  centeredSlides: true,
  initialSlide: 3,
  rewind:true,
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
  },
  pagination: {
    el: ".event_banner_pagination",
  },
});

/* card_banner / swiper */

var swiper_card_box = new Swiper(".card_banner_box", {
  effect: "coverflow",
  grabCursor: true,
  slidesOffsetBefore: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 2,
  rewind:true,
  coverflowEffect: {
    rotate: 50,
    modifier: 1,
    slideShadows: true,
    rewind: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* design_uiux_app / swiper */

var swiper_uiux_box = new Swiper(".uiux_box", {
  rewind: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

