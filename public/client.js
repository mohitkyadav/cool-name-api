// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
	function fill(name) {
		$.get('/coolify?' + $.param({name: name}), function(data) {
			$('ul#cool-names-list').empty()
			Object.keys(data).forEach(function(key) {
				var name = data[key]
				$('<h3></h3>').text(name).appendTo('ul#cool-names-list')
			})
			$('input').focus()
		})
	}

	if (typeof(URL) != 'undefined') {
		let url = (new URL(document.location))
		let params = url.searchParams
		if (params != undefined) {
			var name = params.get('name')
			if (name != null)
			{
				$('input').val(name)
				fill(name)
			}
		}
	}

	$('form').submit(function(event) {
		event.preventDefault()
		var name = $('input').val()
		fill(name)
	})

})
