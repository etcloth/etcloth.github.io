/*
 * Derived from the original Nerfies index.js. The original interpolation
 * preloader is disabled because ETCloth does not publish its 240-frame slider
 * demo yet; leaving it active would request files that do not exist.
 */
$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', function() {});
  }

  /* Original Nerfies interpolation slider, intentionally disabled:
  preloadInterpolationImages();
  $('#interpolation-slider').on('input', function() {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
  */

  bulmaSlider.attach();
});
