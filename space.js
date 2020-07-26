var main = function() {
    $('#earth').click(function(){
        $('#earth-window').css("display","block");
    });
    $('#earth-window-back').click(function(){
        $('#earth-window').css("display","none");
    });
    $('#moon').click(function(){
        $('#moon-window').css("display","block");
    });
    $('#moon-window-back').click(function(){
        $('#moon-window').css("display","none");
    });
    $('#mars').click(function(){
        $('#mars-window').css("display","block");
    });
    $('#mars-window-back').click(function(){
        $('#mars-window').css("display","none");
    });
    $('#sun').click(function(){
        $('#sun-window').css("display","block");
    });
    $('#sun-window-back').click(function(){
        $('#sun-window').css("display","none");
    });
};

$(document).ready(main);