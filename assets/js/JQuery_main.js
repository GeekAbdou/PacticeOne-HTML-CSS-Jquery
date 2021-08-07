$(document).ready(function () {
  "use strict";
  $(".bgimg").height($(window).height());
  $(".bgimg").width($(window).width());

  $(window).resize(function () {
    $(".bgimg").height($(window).height());
    $(".bgimg").width($(window).width());
  });
  /*
  $(".links li").click(function () { 
      $(this).addClass('active').siblings().removeClass('active');
  });
*/
  $(".links li").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //Slider Trigger
  $(".slider").bxSlider({
    pager: false,
  });
  $(".bgimg .slider li").each(function () {
    $(this).css("padding-top",20); // 20 is a test value
  });
// actual value "padding-top",($(window).height() - $(".slider li").height()) / 2
});
