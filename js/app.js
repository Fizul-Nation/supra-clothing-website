
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop:true,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: { delay: 2000 },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    0: { slidesPerView: 1.2, spaceBetween: 10 },
    640: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
