// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams')
    })
  })

  $('form').submit(function(event) {
    event.preventDefault()
    var name = $('input').val()
    $.get('/coolify?' + $.param({name: name}), function() {
      $('<li></li>').text(name).appendTo('ul#dreams')
      $('input').val('')
      $('input').focus()
    })
  })

})
