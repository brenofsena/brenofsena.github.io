function addClass(el, className){
	el.classList.add(className);
};

function removeClass(el, className){
	el.classList.remove(className);
};

window.onload = function(){
	var open = document.getElementById('open-nav'),
	close = document.getElementById('close-nav'),
	header = document.getElementById('header');

	open.addEventListener('click', function(){
		addClass(header, 'menu-active');
	});

	close.addEventListener('click', function(){
		removeClass(header, 'menu-active');
	});
};

hljs.initHighlightingOnLoad();