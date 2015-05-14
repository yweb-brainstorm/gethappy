$(document).ready(function(){
	var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    mn.removeClass('.main-nav');
  } else {
    mn.removeClass(mns);
  }
});
});