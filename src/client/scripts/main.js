import "../styles/styles.scss";
import $ from "jquery";
import "./modules/RevealHero";
import "./modules/RevealElements";
import "./modules/ScrollEffect";
import "./modules/MobileMenu";

var header = $(".header");
var hero = $(".hero");
var headerHeight = header.outerHeight();
var heroItem = hero.find("a");

heroItem.click(function(e) {
	var href = $(this).attr("href");
	var offsetTop = href === "#" ? 0 : $(href).offset().top - headerHeight + 1;
	$("html, body").stop().animate({
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});



// This enables js hmr live reload
if(module.hot){
	module.hot.accept();
}
