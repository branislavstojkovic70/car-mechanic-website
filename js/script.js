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

    // --- Custom mobile drawer ---
    var drawer   = document.getElementById('mobileDrawer');
    var backdrop = document.getElementById('drawerBackdrop');

    function openDrawer() {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    $('#drawerToggle').on('click', openDrawer);
    $('#drawerCloseBtn').on('click', closeDrawer);
    $(backdrop).on('click', closeDrawer);
    $('.drawer-link').on('click', closeDrawer);

  });

})(jQuery);
