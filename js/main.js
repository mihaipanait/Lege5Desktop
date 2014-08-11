
// Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})

// Flexslider
$(document).ready(function($) {
	$('#main-slider').flexslider({
		animation: "fade",
		slideshowSpeed: 3500,
		controlNav: false,
		directionNav: false
	});
});

// Smooth-scroll
$(document).ready(function($) {
      smoothScroll.init();
});

// Owl Top-slider
$(document).ready(function($) {
      $("#owl-top-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 200,
      autoplayHoverPause: true,

 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});

// Owl Carousel
$(document).ready(function($) {
      $("#owl-example").owlCarousel({
        navigation : true
      });
});

// Custom Tab styles
$(document).ready(function($) {
	$(".i-div").on('click', function() {
	       $(".android-div").fadeOut();
	       $(".windows-div").fadeOut();
	       $(".iphone-div").fadeIn();
	});

	$(".a-div").on('click', function() {
	       $(".android-div").fadeIn();
	       $(".windows-div").fadeOut();
	       $(".iphone-div").fadeOut();
	});

	$(".w-div").on('click', function() {
	       $(".android-div").fadeOut();
	       $(".windows-div").fadeIn();
	       $(".iphone-div").fadeOut();
	});
});

// Prettyphoto
$(document).ready(function() {
	$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});
});

// Google Map
$(function () {
	var map = new GMaps({
	el: "#map",
	lat: 44.430257,
	lng: 26.083796,
          scrollwheel: false,
          zoom: 15, 
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
      });
        
      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];
        
      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
      });
        
      map.setStyle("map_style");

      map.addMarker({
        lat: 44.430257,
        lng: 26.083796,
        icon: "images/marker.png"
      });
});


