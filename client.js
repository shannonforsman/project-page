$(document).ready(function(){
  var navs = $('.nav-links')
  var close = $('.close')
  var items = $('.item')

navs.on('click', function() {
  $('.inner').removeClass('content')
  var open = $(this).data('target');
  $('#' + open).addClass('content');
})

close.click(function(){
  $(this).closest('.inner').removeClass('content')
})

items.on('click', function() {
  $('.show').removeClass('portfolio')
  $('.overlay').css({'background-color': '', 'opacity' : ''})
  $(this).find('.overlay').css({'background-color': '#2aa391', 'opacity': '.8'})
  var open = $(this).data('grid');
  console.log(open)
  $('#' + open).addClass('portfolio');
})









})
