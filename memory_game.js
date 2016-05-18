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
  });
});
