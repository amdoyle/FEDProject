// Your code here
$(document).ready(function() {

  showNav();

  $(window).resize(function(){
    showNav();
  });

  // On click toggle the nav links
  $('#hamburger-nav').on('click', function(){
    $('#nav-links').toggle();
  });



// Hiding nav links on screens smaller than 1000px
function showNav(){
  if($(window).width() < 1200){
    $('#nav-links').hide();
    $('#hamburger-nav').show();
  } else {
    $('#nav-links').show();
    $('#hamburger-nav').hide();
  }
}

$("#slider").slick({
        dots: true,
        pauseOnDotsHover: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
//
//   // normal options...
//   infinite: false,
//
//   // the magic
//   responsive: [{
//
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         infinite: true
//       }
//
//     },
//      {
//
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         dots: true
//       }
//
//     },
//      {
//
//       breakpoint: 300,
//       settings: "unslick" // destroys slick
//
//     }]
// });

});
