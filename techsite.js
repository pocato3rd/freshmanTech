var main = function(){
   $('#menu-open').click(function(){
      var $body = $('body');
      var $bar = $('#menu-bar');
      var $open = $('#menu-open');
      if ($body.css('left') == '0px') {
	$body.animate({left: "+=200px", width: "-=200px"},500);
	$bar.animate({left: "10px"},500);
	$open.animate({left: "+=200px"},500);
      } else if ($body.css('left') ==  '200px') {
	$body.animate({left: "-=200px", width: "+=200px"},500);
	$bar.animate({left: "-=195px"},500);
	$open.animate({left: "10px"},500);
      }
   });
};
$(document).ready(main);