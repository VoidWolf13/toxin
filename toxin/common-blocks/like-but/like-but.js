$(function() {
  $('.like-but').click(function() {
    $('.like-but__box').css('border', '1px solid #BC9CFF');
    $('.like-but__icon').attr('src', 'like-full.png');
    $('.like-but__point').css('color', '#BC9CFF');
  });
});