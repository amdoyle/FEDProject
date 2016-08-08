// Your code here
$( document ).ready(function() {

  // Hiding nav links on mobile
  $('#nav-links').hide();

  // On click toggle the nav links
  $('#hamburger-nav').on('click', function(){
    $('#nav-links').toggle();
  });


});
