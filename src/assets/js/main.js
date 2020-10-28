
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();
	
	
	// menu icon bar change Icon
	$('.custom-menu').on('click', function() {
		$('.toggleMenu').toggleClass('MobileMenu');
	});

	//sideBar Menu
	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
	  $('.home-content').toggleClass('active');
	});
	
	$('.LogoTit').on('click', function () {
      $('#sidebar').toggleClass('active');
	  $('.home-content').toggleClass('active');
		if( $('#sidebar').hasClass('active') ){
        	$('.toggleMenu').addClass('MobileMenu');
		}
		else{
			$('.toggleMenu').removeClass('MobileMenu');
		}
	});
	

})(jQuery);




// theme logo check 
$( document ).ready(function() {
	 'use strict';
	//var themeName = 'theme';
    localStorage.getItem('theme');
	if (localStorage.getItem('theme') === 'theme-dark') {
        $("#imag").attr("src", "img/logo-intro.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-dark.png");

    } else {
		
        $("#imag").attr("src", "img/logo.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-light.png");
    }

});

// function to set a given theme/color-scheme
function setTheme(themeName) {
	'use strict';
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
	'use strict';
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-dark');
      
        $("#imag").attr("src", "img/logo-intro.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-dark.png");

    } else {
            setTheme('theme-light');
        $("#imag").attr("src", "img/logo.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-light.png");
    }   
}

// Immediately invoked function to set the theme on initial load
(function () {
	'use strict';
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    }
})();
