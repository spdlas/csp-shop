import Swiper from 'swiper'
function initSwiper() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

window.addEventListener('resize', function () {
  initSwiper()
})

document.addEventListener('DOMContentLoaded', function () {
  initSwiper()
})
