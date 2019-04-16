'use strict';

function changeTheme(theme) {
	var link = document.getElementById('theme');
	var url = '/stylesheets/' + theme + "_theme.css";
	link.href = url;

	var _ctheme = document.getElementById('colorful-theme');
	var _itheme = document.getElementById('light-theme');
	var _dtheme = document.getElementById('dark-theme');
	switch (theme) {
		case 'colorful':
			_ctheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			break;
		case 'dark':
			_dtheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_ctheme.classList.remove('current-theme');
			break;
		default:
			_itheme.classList.add('current-theme');
			_ctheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
	}
}