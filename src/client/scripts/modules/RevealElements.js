import $ from "jquery";

const RevealElements = (function() {

	$(window).scroll(function() {

	    var wScroll = $(this).scrollTop();

			// Services
	    if(wScroll > $("#services").offset().top - ($(window).height() / 2)){
	        $(".fade-in").each(function(i) {
	            setTimeout(function() {
	                $(".fade-in").eq(i).addClass("fade-in--is-active")
	            }, 250 * (i + 1));
	        })
	    }

			// Portfolio
			if(wScroll > $("#portfolio").offset().top - ($(window).height() / 2)){
					$(".flip-in").each(function(i) {
							setTimeout(function() {
									$(".flip-in").eq(i).addClass("flip-in--is-active")
							}, 250 * (i + 1));
					})
			}

			// Portfolio
			if(wScroll > $("#testimonials").offset().top - ($(window).height() / 2)){
					$(".expand").each(function(i) {
							setTimeout(function() {
									$(".expand").eq(i).addClass("expand--is-active")
							}, 250 * (i + 1));
					})
			}

			// Training
			if(wScroll > $("#training").offset().top - ($(window).height() / 2)){
					$(".shrink").each(function(i) {
							setTimeout(function() {
									$(".shrink").eq(i).addClass("shrink--is-active")
							}, 250 * (i + 1));
					})
			}

			// Contact
			if(wScroll > $("#contact").offset().top - ($(window).height() / 2.5)){
					$(".drop").each(function(i) {
							setTimeout(function() {
									$(".drop").eq(i).addClass("drop--is-active")
							}, 250 * (i + 1));
					})
			}

	});

}());
