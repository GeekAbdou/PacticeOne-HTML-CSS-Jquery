$(document).ready(function () {
  "use strict";
  $(".slider").height($(window).height());
  $(".slider").width($(window).width());

  $(window).resize(function () {
    $(".slider").height($(window).height());
    $(".slider").width($(window).width());
  });
  /*
  $(".links li").click(function () { 
      $(this).addClass('active').siblings().removeClass('active');
  });
*/
  $(".links li").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  
});
