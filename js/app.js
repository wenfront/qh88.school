function OpenNav(){
    document.getElementById("nav").style.width = "65%";
}
    function CloseNav(){
        document.getElementById("nav").style.width = "0%";
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

var swiper = new Swiper(".game-slide", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });


