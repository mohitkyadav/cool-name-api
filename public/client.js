// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
	$('form').submit(function(event) {
		event.preventDefault()
		var name = $('input').val()
		$.get('/coolify?' + $.param({name: name}), function(data) {
			$('ul#cool-names-list').empty()
			Object.keys(data).forEach(function(key) {
				var name = data[key]
				$('<h3></h3>').text(name).appendTo('ul#cool-names-list')
			})
			$('input').focus()
		})
	})

})
