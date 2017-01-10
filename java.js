$(document).ready(function() {

  $('button').on('click', function() {
     console.log('The button was clicked');
     $('body').append('<div class="box"></div>');
   });

   $('body').on('click', '.box', function() {
      console.log('The box was clicked');
      $(this).css('background-color', 'black');
    });
});
