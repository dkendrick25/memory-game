var state = '';

$(function() {
  //when click add to class to reveal the card in css
  $('.tile').click(function() {
    if(state === '') {
      state = 'first';
      $(this).addClass('open');
    } else if (state === 'first') {
      state = 'second';
      $(this).addClass('open');
    }
    //flips back over after one second when in the second state
    if(state === 'second') {
      setTimeout(function () {
        $('.tile').removeClass('open');
      }, 2000);
    }
  });
});
