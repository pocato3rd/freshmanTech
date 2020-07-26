var activeColor = function(c) {
    var a = $(c);
    var b = $('.activeC');
    b.removeClass('activeC');
    a.addClass('activeC');
};
var activeSize = function(f) {
    var d = $(f);
    var e = $('.activeS');
    e.removeClass('activeS');
    d.addClass('activeS');
};

var changeColor = function(id) {
    $(id).click(function() {
      activeColor(id);  
    });
};

var changeSize = function(idS) {
    $(idS).click(function() {
      activeSize(idS);  
    });
};
var main = function(){
    var bgColorDd = $('#bgColorBttn');
    var colorDd = $('#colorBttn');
    var sizeDd = $('#sizeBttn');
    $('body').click(function() {
        var xPosB = String(event.pageX);
        var yPosB = String(event.pageY);
        console.log(xPosB + ", " + yPosB);
    });
    changeColor('#white');
    changeColor('#black');
    changeColor('#red');
    changeColor('#orange');
    changeColor('#yellow');
    changeColor('#green');
    changeColor('#blue');
    changeColor('#purple');
    
    changeSize('#small');
    changeSize('#medium');
    changeSize('#larger');
    
    $('#reset').click(function() {
        $('#canvas div').remove();
        $('#canvas').css("background-color", "#FFF");
	bgColorDd.css("color","#FFF");
    });
    
    $('#whiteBG').click(function() {
       $('#canvas').css("background-color", "#FFF");
       bgColorDd.css("color","#FFF");
    });
    $('#blackBG').click(function() {
       $('#canvas').css("background-color", "#000");
       bgColorDd.css("color","#000");
    });
    $('#redBG').click(function() {
       $('#canvas').css("background-color", "#F00");
       bgColorDd.css("color","#F00");
    });
    $('#orangeBG').click(function() {
       $('#canvas').css("background-color", "#FFA500");
       bgColorDd.css("color","#CF9500");
    });
    $('#yellowBG').click(function() {
       $('#canvas').css("background-color", "#FF0");
       bgColorDd.css("color","#FF0");
    });
    $('#greenBG').click(function() {
       $('#canvas').css("background-color", "#0C0");
       bgColorDd.css("color","#080");
    });
    $('#blueBG').click(function() {
       $('#canvas').css("background-color", "#00F");
       bgColorDd.css("color","#00F");
    });
    $('#purpleBG').click(function() {
       $('#canvas').css("background-color", "#C0C");
       bgColorDd.css("color","#C0C");
    });
    
    $('#white').click(function() {
       colorDd.css("color","#FFF");
    });
    $('#black').click(function() {
       colorDd.css("color","#000");
    });
    $('#red').click(function() {
       colorDd.css("color","#F00");
    });
    $('#orange').click(function() {
       colorDd.css("color","#CF9500");
    });
    $('#yellow').click(function() {
       colorDd.css("color","#FF0");
    });
    $('#green').click(function() {
       colorDd.css("color","#0C0");
    });
    $('#blue').click(function() {
       colorDd.css("color","#00F");
    });
    $('#purple').click(function() {
       colorDd.css("color","#C0C");
    });
    $('#small').click(function() {
	    sizeDd.css("color","#F00");
    });
    $('#medium').click(function() {
	    sizeDd.css("color","#0F0");
    });
    $('#larger').click(function() {
	    sizeDd.css("color","#00F");
    });
};

$(document).ready(main);
