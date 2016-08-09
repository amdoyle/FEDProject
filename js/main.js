// Your code here
$(document).ready(function() {

  // Hiding nav links on screens smaller than 1000px
  if($(window).width() < 1000){
      $('#nav-links').hide();
  }
  // On click toggle the nav links
  $('#hamburger-nav').on('click', function(){
    $('#nav-links').toggle();
  });

});
