$(function(){


$('button').on('click', function(event){
  event.preventDefault();

  $.ajax('/balance').then(function(response){
    $('span').empty();
    $('span').text(response).hide().fadeIn('fast');
  })//function
})//click

});//end
