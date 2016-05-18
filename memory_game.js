//filter through images and return an array of ones with the open class
// imgArr = $('.tile').filter(function() {
//     return $(this).hasClass('open') === true;
//  });

var state = 'first';
var lastCard;
var currentCard;
var moves = 0;
var totalCards = 0;
$(function() {
  //when click add to class to reveal the card in css
  $('.tile').click(function() {
    if($(this).hasClass('open')) {
      return
    }
    $(this).addClass('open');
    if(state === 'first') {
      lastCard = $(this).find('img').attr('src');
      state = 'second';
    } else if (state === 'second') {
      currentCard = $(this).find('img').attr('src');
      state = 'first';
      //keeps track of every two clicks
      moves++;
      $('#moves-count').text(moves);
      //compares card and give matches a new class
      if(lastCard != currentCard) {
        setTimeout(function () {
          $('.tile').removeClass('open');
        }, 500);
      } else {
        $('.open').addClass('match');
        totalCards = totalCards + 2;
      }
    }
    //check for win
    if (totalCards === 8) {
      $('#winner').text('YAY! you win!');
    }
  });

  $('.reset').click(function() {
    location.reload();
  });
});
