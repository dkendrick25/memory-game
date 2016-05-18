//filter through images and return an array of ones with the open class
// imgArr = $('.tile').filter(function() {
//     return $(this).hasClass('open') === true;
//  });
//$("img").attr("src", 'images/logo-bw.png');

var state = 'first';
var lastCard;
var currentCard;
var moves = 0;

$(function() {
  //when click add to class to reveal the card in css
  $('.tile').click(function() {
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
      //compares card
      if(lastCard != currentCard) {
        setTimeout(function () {
          $('.tile').removeClass('open');
        }, 500);
      } else {
        $('.open').addClass('match');
      }
    }
  });

  $('.reset').click(function() {
    location.reload();
  });
});
