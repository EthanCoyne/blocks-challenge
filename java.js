$(document).ready(function() {

  $('button').on('click', function() {
    console.log('The button was clicked');
    $('body').append('<div class="box"><div class="x">X</div></div>');
  });

  $('body').on('click', '.box', function() {
    console.log('The box was clicked');
    $(this).css('background-color', 'black');
  });

  $('body').on('click', '.x', function () {
    console.log('x was clicked');
    $(this).closest('.box').remove();
  });

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };
  randomNumber(1, 9);
});
