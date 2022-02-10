
// slick slider=====================================
$(document).ready(function(){
    $('.collection__slider').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            centerMode: false
          }
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: false
          }
        }],
    });  
  });

// slick slider=====================================  


