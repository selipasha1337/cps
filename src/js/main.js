document.addEventListener("DOMContentLoaded", function () {
  
  const brandArrow = document.querySelector('.brands__show-more');
  const brands = document.querySelector('.brands__wrapper');
  const brand = brands.querySelectorAll('.brand');
  let BRANDS_RANGE = 6;
  
  let mql = window.matchMedia('(min-width: 1121px)');
  
  const brandsResize = function (width) {
    if (width >= 1121) {
      BRANDS_RANGE = 8;
    }
    
    window.addEventListener('resize', function () {
      if (width >= 1121) {
        BRANDS_RANGE = 8;
      }
    });
  }
  
  const showMore = function () {
    this.classList.toggle("brands__action--clicked");
    
    for (let i = 0; i < brand.length - BRANDS_RANGE; i++) {
      brand[i + BRANDS_RANGE].classList.toggle("brand--hidden");
    }
    
    this.innerHTML = this.innerHTML === 'Показать все' ? 'Скрыть' : 'Показать все';
  }
  
  brandsResize(document.documentElement.clientWidth || document.body.clientWidth);
  
  brandArrow.addEventListener('click', showMore);
  
  for (let i = brand.length - 1; i >= BRANDS_RANGE; i--) {
    brand[i].classList.add('brand--hidden')
  }
  
  const swiper = new Swiper(".brands-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    init: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      376: {
        slidesPerView: 1.5,
      },
      456: {
        slidesPerView: 1.8,
      },
      555: {
        slidesPerView: 2,
      },
      593: {
        slidesPerView: 2.3,
      },
      667: {
        slidesPerView: 2.6,
      },
    },
  });
  
});