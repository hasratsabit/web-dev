import $ from "jquery";

const MobileMenu = (function() {

	const menuIcon = document.getElementById("menu-icon");
	const navbar = document.getElementById("navbar");

	// Open and Close Navbar in Mobile
	$(menuIcon).click(function() {
		if(menuIcon.className === "menu-icon"){
			$(menuIcon).addClass("menu-icon--close-x");
			$(navbar).addClass("navbar--is-visible");
		}else {
			$(menuIcon).removeClass("menu-icon--close-x");
			$(navbar).removeClass("navbar--is-visible");
		}
	});

	$(".header").find("a").click(function() {
		$(navbar).removeClass("navbar--is-visible");
		$(menuIcon).removeClass("menu-icon--close-x");
	});


}());
