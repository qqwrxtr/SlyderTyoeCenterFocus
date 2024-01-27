var swiper = new Swiper('.swiper', {
  spaceBetween: 200,
  slidesPerGroup: 1,
  slidesPerView: 3,
  loop: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});