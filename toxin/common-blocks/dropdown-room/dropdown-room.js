$(function(){
  //выпадение меню выбора гостей
  $('.dropdown-room__top').click(function(){
    $('.dropdown-room__top').toggleClass('dropdown-room__top--open');
    $('.dropdown__select').toggleClass('dropdown__select--visible');
  });
});