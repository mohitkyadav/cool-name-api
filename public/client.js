// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')
  
  $.get('/names', function(names) {
    names.forEach(function(name) {
      $('<h1></h1>').text(name).appendTo('ul#cool-names-list')
    })
  })

  $('form').submit(function(event) {
    event.preventDefault()
    var name = $('input').val()
    $.get('/coolify?' + $.param({name: name}), function() {
      $('<li></li>').text(name).appendTo('ul#cool-names-list')
      $('input').val('')
      $('input').focus()
      window.location.reload();
    })
  })

})
