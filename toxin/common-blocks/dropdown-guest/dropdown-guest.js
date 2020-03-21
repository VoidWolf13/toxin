$(function(){
  //выпадение меню выбора гостей
  $('.dropdown-guest__top').click(function(){
    $('.dropdown-guest__top').css('border-radius', '4px 4px 0px 0px');
    $('.dropdown__select').css('visibility', 'visible');
  });
  //событие кнопки применить
  $('.down__ok').click(function(){
    $('.dropdown-guest__top').css('border-radius', '4px');
    $('.dropdown__select').css('visibility', 'collapse');
  });
  $('.down__ok').click(function(){
    alert('ok');
  });
});