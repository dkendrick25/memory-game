var state;

$(function() {
  //when click add to class to reveal the card in css
  $('.tile').click(function() {
    state = 'first';
    $(this).addClass('open');
  });
});
