

$(document).ready(function() {

  $('button').on('click', function() {
    console.log('The button was clicked');
    var randomColor = '#';

    for (var i =0; i < 6; i++) {
      randomColor += randomNumber(0, 9);
    }
    console.log(randomColor);
    $('body').append('<div class="box" style="background-color: ' + randomColor + ';"><div class="x">X</div></div>');
  });

  $('body').on('click', '.box', function() {
    console.log('The box was clicked');
    $(this).css('background-color', 'black');
  });

  $('body').on('click', '.x', function () {
    console.log('x was clicked');
    $(this).closest('.box').remove();
  });





});
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
