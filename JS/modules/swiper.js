
export default function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    slidesPerView: 5, // ou quantos quer mostrar por vez
    spaceBetween: 17, // espaçamento entre os cards
  
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    centeredSlides: false,      // Garante que não vai "centralizar"
    initialSlide: 0,            // Começa do primeiro
  });
}

