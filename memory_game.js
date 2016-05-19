
var state = 'first';
var lastCard;
var currentCard;
var moves = 0;
var totalCards = 0;
//to build grid
var monsters = [
     'monsters-01.png',
     'monsters-02.png',
     'monsters-03.png',
     'monsters-04.png',
     'monsters-05.png',
     'monsters-06.png',
     'monsters-07.png',
     'monsters-08.png',
     'monsters-09.png',
     'monsters-10.png',
     'monsters-11.png',
     'monsters-12.png',
     'monsters-13.png',
     'monsters-14.png',
     'monsters-15.png',
     'monsters-16.png'
   ];
//loop through array of monster and append html markup to tiles
function makeTiles(numMonsters, columns) {
  //leave orig monsters array unchanged
  var shuffledMonsters = shuffle(monsters);
  //select the first four shuffledMonsters
  var chosenMonsters = shuffledMonsters.slice(0, numMonsters);
  var newMonsters = [];
  for (var i = 0; i < chosenMonsters.length; i++) {
    newMonsters.push(chosenMonsters[i], chosenMonsters[i]);
  }
  var shuffledNewMonsters = shuffle(newMonsters);
  //loop through shuffledNewMonsters to make grid with
    var html = '';
  for (var i = 0; i < shuffledNewMonsters.length; i++) {
    html += '<div class="tile">' +
      '<img class="monster" src="images/' + shuffledNewMonsters[i] + '">' +
      '<div class="back"></div>' +
    '</div>';
  }
  $('#grid').addClass('column-' + columns.toString());
  $('#grid').append(html);
  $('body').append('<button class="reset">reset game</button>');
}


//shuffle function that takes an array and returns a new shuffled version
function shuffle(arr) {
  arr = arr.slice(0);
  var newArr = [];
  while (arr.length > 0) {
    var indx = Math.floor(Math.random() * arr.length);
    var item = arr[indx];
    newArr.push(item);
    arr.splice(indx, 1);
  }
  return newArr;
}

$(function() {
  makeTiles(16, 8);
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
