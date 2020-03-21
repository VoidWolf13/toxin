$(function(){
  //выпадение меню выбора гостей
  $('.dropdown-guest__top').click(function(){
    $('.dropdown-guest__top').toggleClass('dropdown-guest__top--open');
    $('.dropdown__select').toggleClass('dropdown__select--visible');
  });
});