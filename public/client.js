// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
	function getCool(name) {
		updateDemoUrl('/coolify?name=' + name);
		$.get('/coolify?' + $.param({name: name}), function(data) {
			$('ul#cool-names-list').empty()
			Object.keys(data).forEach(function(key) {
				var name = data[key]
				$('<h3></h3>').text(name).appendTo('ul#cool-names-list')
			})
			$('input').focus()
		})
	}

	function getUncool(name) {
		updateDemoUrl('/uncoolify?name=' + name);
		$.get('/uncoolify?' + $.param({name: name}), function(data) {
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
				getCool(name)
			}
		}
	}

	function updateDemoUrl(pathAndParams) {
		document.getElementById("demo-url").innerHTML = "$ curl -X GET " +
		window.location.origin + encodeURI(pathAndParams);
	}

	$('#coolify-submit').click(function(event) {
		event.preventDefault()
		var name = $('input').val()
		getCool(name)
	})

	$('#uncoolify-submit').click(function(event) {
		event.preventDefault()
		var name = $('input').val()
		getUncool(name)
	})
})
