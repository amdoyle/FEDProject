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
        mobileFirst: true,
        pauseOnDotsHover: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 0,
        swipe: true,
        respondTo: 'window'
    });


});
