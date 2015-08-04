$(document).ready(function(){

  var items = $('.item')

$('.item:first-child .overlay').css({'opacity': '0'})

items.on('click', function() {
  $('.show').removeClass('portfolio')
  $('.overlay').css({'background-color': '', 'opacity' : ''})
  $(this).find('.overlay').css({'background-color': 'none', 'opacity': '0'})
  var open = $(this).data('grid');
  console.log(open)
  $('#' + open).addClass('portfolio');
})

})
