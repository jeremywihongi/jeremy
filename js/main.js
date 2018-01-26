// Carousel 
$(window).load(function () {

    var hero_carousel = document.querySelector('.main-carousel');
    var hero_flkty = new Flickity(hero_carousel, {
        imagesLoaded: true,
        autoPlay: 2500,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        pageDots: true
    });
    var register_carousel = document.querySelector('.main-carousel1');
    var register_flkty = new Flickity(register_carousel, {
        imagesLoaded: true,
        autoPlay: 6000,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        pageDots: true
    });

});