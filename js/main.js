
// Carousel 
$(window).load(function () {

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  autoPlay: true, 
  bgLazyLoad: 1
//    adaptiveHeight: true
});
    
    $('.main-carousel2').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  autoPlay: true,
  bgLazyLoad: 1
//        adaptiveHeight: true
});

});