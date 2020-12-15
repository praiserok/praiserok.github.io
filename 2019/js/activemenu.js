	var menu = document.querySelector('.menu');

	menu.onclick = function(e) {
		if (e.target.tagName.toLowerCase() != 'a') return;

		[].forEach.call(menu.querySelectorAll('a'), function(item) {
			item.classList.remove('active');
		});

		e.target.classList.add('active');
	};