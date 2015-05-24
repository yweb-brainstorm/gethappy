$(document).ready(function(){
	var  mn = $(".main-nav");
  mns = "main-nav-scrolled";
  hdr = $('header').height();

	/*$(window).scroll(function() {
  		if( $(this).scrollTop() > hdr ) {
    		mn.addClass(mns);
    		mn.removeClass('.main-nav');
  		} else {
    		mn.removeClass(mns);
  		}
   });*/


   $('.activities').on('click', function(){
     $('div.activities').prepend('<div class="stat-1 stat-bar"</div>');
   });
$("#set").click(function() {
  var value = $("#value").val();
  console.log(value);
  var $progressbar = $("#progressbar > div");
  $progressbar.animate({
    "width": value + "%"
  }, 2000, "linear", function() {
    if (value == 100) {
      var $color = $progressbar.css("background-color");
      $progressbar.animate({
        "background-color": "#33f153"
      }, 600, function() {
        $progressbar.animate({
          "background-color": $color
        });
      });
    }
  });
});

$("#reset").click(function() {
  var $progressbar = $("#progressbar > div");
  $progressbar.css("width", 0);
});

$("#button").click(function() {
  var $progressbar = $("#progressbar > div");
  $progressbar
  .css("width", 0)
  .animate({
    "width": "100%"
  }, 6000, "linear");
});
});