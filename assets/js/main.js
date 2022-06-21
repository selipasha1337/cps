
const brandArrow = document.querySelector('.brands__action');
const brands = document.querySelector('.brands__wrapper');
const brand = brands.querySelectorAll('.brand');
let brandsRange = 6;

const docWidth = document.documentElement.clientWidth || document.body.clientWidth;
if (docWidth >= 1121) {
  brandsRange = 8;
}

for (let i = brand.length - 1; i >= brandsRange; i--) {
  brand[i].classList.add('brand--hidden')
}

// Кнопка
brandArrow.addEventListener('click', function () {
  this.classList.toggle("brands__action--clicked");
  
  for (let i = 0; i < brand.length - brandsRange; i++) {
    brand[i + brandsRange].classList.toggle("brand--hidden");
  }
  
  if (this.innerHTML === 'Показать все') {
    this.innerHTML = 'Скрыть';
  } else {
    this.innerHTML = 'Показать все';
  }
});

let mql = window.matchMedia('(max-width: 784px)');

let swiperMode = function() {
  if (mql.matches) {
    let newSwiper = new Swiper('.brand__swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      grabCursor: true,
      init: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

window.addEventListener('load', function() {
  swiperMode();
  if (docWidth >= 1121) {
    brandsRange = 8;
  }
});

window.addEventListener('resize', function() {
  swiperMode();
  if (docWidth >= 1121) {
    brandsRange = 8;
  }
});
