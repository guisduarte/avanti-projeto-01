export default function initSwiper() { 
  const swiper = new Swiper('.swiper', {
   
    slidesPerView: 'auto', 
    spaceBetween: 10,     
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // Quando a largura da tela for menor ou igual a 390px
      390: {
        slidesPerView: 2, 
        spaceBetween: 5,  
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 16,
      }      
    }
  });
}