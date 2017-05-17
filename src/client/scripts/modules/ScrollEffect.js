
import $ from "jquery";

// Cache selectors
var lastId;
var header = $(".header");
var headerHeight = header.outerHeight();
    // All list items
var menuItems = header.find("a");
    // Anchors corresponding to menu items
var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href");
  var offsetTop = href === "#" ? 0 : $(href).offset().top-headerHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+headerHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});









// $(document).ready(function() {
// 	$('a[href^="#"]').on('click', function(e) {
// 		e.preventDefault();
//
// 		var target = this.hash;
// 		var $target = $(target);
// 		$("html, body").animate({
// 			"scrollTop": $target.offset().top
// 		}, 500, 'swing', function(){
// 			window.location.hash = target;
// 		});
// 	});
// })
