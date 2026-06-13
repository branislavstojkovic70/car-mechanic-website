(function ($) {
  "use strict";

  // Tamni navbar pri skrolovanju
  function initScrollNav() {
    if ($(window).scrollTop() >= 100) {
      $('.navbar.fixed-top').addClass("bg-black");
    } else {
      $('.navbar.fixed-top').removeClass("bg-black");
    }
  }

  $(window).on('scroll', initScrollNav);

  // Chocolat lightbox za galeriju
  function initChocolat() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    });
  }

  $(document).ready(function () {

    // Hero slider
    new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-pagination",
        clickable: true,
      },
    });

    // Galerija swiper
    new Swiper(".project-swiper", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".icon-arrow-right",
        prevEl: ".icon-arrow-left",
      },
      breakpoints: {
        0:    { slidesPerView: 1 },
        768:  { slidesPerView: 3, spaceBetween: 10 },
        1400: { slidesPerView: 4, spaceBetween: 20 },
      }
    });

    // Animate on Scroll
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });

    initChocolat();

  });

})(jQuery);
