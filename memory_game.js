//filter through images and return an array of ones with the open class
// imgArr = $('.tile').filter(function() {
//     return $(this).hasClass('open') === true;
//  });

var state = 'first';
var lastCard;
var currentCard;
$(function() {

  //when click add to class to reveal the card in css
$('.tile').click(function() {
//debugger
    if(state === 'first') {
      $(this).addClass('open');
      lastCard = $(this).find('img').attr('src');
      state = 'second';
    } else if (state === 'second') {
      $(this).addClass('open');
      currentCard = $(this).find('img').attr('src');
      state = 'first';
      if(lastCard != currentCard) {
        setTimeout(function () {
          $('.tile').removeClass('open');
        }, 800);
      } else {
      $('.open').addClass('match');
      }
    }
  });
});
