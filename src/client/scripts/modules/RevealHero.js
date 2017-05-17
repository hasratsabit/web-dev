import $ from "jquery";
const RevealHero = (function() {
	const heroItems = $(".animate-hero");
	const mackbook = $(".mackbook");
	setTimeout(function() {
		$(heroItems).addClass("animate-hero--is-active");
		$(mackbook).addClass("mackbook--is-active");
	}, 500);
	// when portfolio button is clicked, portfolio scrolls to the top.
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

	// Expand Logo when scrolling down.
	window.addEventListener("scroll", function() {
		var ypos = window.pageYOffset;
		var logo = $(".header__logo");
		var header = $(".header");
		var navbar = $(".navbar");

		if(ypos > 350) {
			$(header).addClass("expanded");
			$(logo).addClass("expand-logo");
			$(navbar).addClass("expand-navbar");
		}else {
			$(header).removeClass("expanded");
			$(logo).removeClass("expand-logo");
			$(navbar).removeClass("expand-navbar");
		}
	})
}());



export default RevealHero;
// etTimeout(function() {
// 	$(".animate-hero").each(function() {
// 		$(".animate-hero").addClass("animate-hero--is-active");
// 	})
// }, 2000)
//

// var heroItem = $(".animate-hero");
// const item = heroItem.map(function(i) {
// 	var currentItem = this;
// 	setTimeout(function() {
// 		$(currentItem).addClass("animate-hero--is-active");
// 	}, 500 * (i+1))
// })
