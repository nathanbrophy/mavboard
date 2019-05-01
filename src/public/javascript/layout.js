/**
 * change the theme for the page to the one clicked on
 * 
 * @param {string} theme is the theme we are switching to
 */
function changeTheme(theme) {
	document.body.style.background = '';
	var link = document.getElementById('theme');
	var today = new Date();
	if (today.getMonth() == 3 && today.getDate() == 1) {
		// April Fool's Day ... only use hotdog theme
		theme = 'hotdog';
	}
	var url = '/stylesheets/' + theme + "_theme.css";
	link.href = url;

	var _ctheme = document.getElementById('colorful-theme');
	var _itheme = document.getElementById('light-theme');
	var _dtheme = document.getElementById('dark-theme');
	var _dytheme = document.getElementById('dynamic-theme');
	var _mtheme = document.getElementById('mav-theme');
	var _hdtheme = document.getElementById('hotdog-theme');
	switch (theme) {
		case 'colorful':
			_ctheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			_dytheme.classList.remove('current-theme');
			_mtheme.classList.remove('current-theme');
			_hdtheme.classList.remove('current-theme');
			break;
		case 'dark':
			_dtheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_ctheme.classList.remove('current-theme'); 
			_dytheme.classList.remove('current-theme');
			_mtheme.classList.remove('current-theme');
			_hdtheme.classList.remove('current-theme');
			break;
		case 'dynamic':
			_dytheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			_ctheme.classList.remove('current-theme');
			_mtheme.classList.remove('current-theme');
			_hdtheme.classList.remove('current-theme');
			changeBgGradient(document.getElementById('current-track-image'));
			break;
		case 'mav':
			_mtheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_ctheme.classList.remove('current-theme'); 
			_dytheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			_hdtheme.classList.remove('current-theme');
			break;
		case 'hotdog':
			_hdtheme.classList.add('current-theme');
			_itheme.classList.remove('current-theme');
			_ctheme.classList.remove('current-theme'); 
			_dytheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			_mtheme.classList.remove('current-theme');
			break;
		default:
			_itheme.classList.add('current-theme');
			_ctheme.classList.remove('current-theme');
			_dtheme.classList.remove('current-theme');
			_dytheme.classList.remove('current-theme');
			_mtheme.classList.remove('current-theme');
			_hdtheme.classList.remove('current-theme');
	}
}