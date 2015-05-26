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


   // $('.activities').on('click', function(){
   //    var activityBar = $('<div class="stat-1 stat-bar"</div>');
   //    activityBar.append()
   //    $('div.activities').prepend(activityBar);
   // });

$("#set").click(function() {
  var value = $("#value").val();
  console.log(value);
  var $progressbar = $("#progressbar > div");
  $progressbar.animate({ "width": value+"%" }, 500, "linear", function() {
    if (value == 100) {
      var $color = $progressbar.css("background-color");
      $progressbar.animate({ "background-color": "#33f153"}, 6000, function() {
        $progressbar.animate({ "background-color": $color});
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
    .animate({ "width": "100%" }, 6000, "ease-in-out");
});

  function doGet(e){
    var vals=[];
    vals.push(new Date());
    for(var i in e.parameter){
      vals.push(e.parameter[i]);
    }
    SpreadsheetApp.openById("0Ao02g19G1-G-dElQQW92ekZWa0lGRGREYUpHRWQwTVE").appendRow(vals);
    return ContentService.createTextOutput("added");
  };
});