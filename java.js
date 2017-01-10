$(document).ready(function() {

  $('button').on('click', function() {
     console.log('The button was clicked');
     $('body').append('<div class="box"></div>');
   });
});
