var canvas = document.getElementById('canvas');
canvas.onmousemove = mouseMove;
canvas.onmousedown = mouseDown;
canvas.onmouseup   = mouseUp;

var color="black";

var whitebttn = document.getElementById('white');
    var onClickWhite = function(){
        color="white";
        return color;
    };
    whitebttn.addEventListener("click", onClickWhite);

var blackbttn = document.getElementById('black');
    var onClickBlack = function() {
        color = "black";
        return color;
    };
    blackbttn.addEventListener("click", onClickBlack);


var redbttn = document.getElementById('red');
    var onClickRed = function() {
        color="red";
        return color;
    };
    redbttn.addEventListener("click", onClickRed);
var orangebttn = document.getElementById('orange');
    var onClickOrange = function() {
        color="orange";
        return color;
    };
    orangebttn.addEventListener("click", onClickOrange);
var yellowbttn = document.getElementById('yellow');
    var onClickYellow = function() {
        color="yellow";
        return color;
    };
    yellowbttn.addEventListener("click", onClickYellow);

var greenbttn = document.getElementById('green');
    var onClickGreen = function() {
        color="green";
        return color;
    };
    greenbttn.addEventListener("click", onClickGreen);

var bluebttn = document.getElementById('blue');
    var onClickBlue = function(){
        color="blue";
        return color;
    };
    bluebttn.addEventListener("click", onClickBlue);

var purplebttn = document.getElementById('purple');
    var onClickPurple = function() {
        color="purple";
        return color;
    };
    purplebttn.addEventListener("click", onClickPurple);

var size = "medium";

var smallbttn = document.getElementById('small');
    var onClickSmall = function() {
        size="small";
        return size;
    };
    smallbttn.addEventListener("click", onClickSmall);

var medbttn = document.getElementById('medium');
    var onClickMed = function() {
        size="medium";
        return size;
    };
    medbttn.addEventListener("click", onClickMed);

var largebttn = document.getElementById('larger');
    var onClickLarge = function() {
        size="large";
        return size;
    };
    largebttn.addEventListener("click", onClickLarge);

var $canvas = $('#canvas');

var mouseState = "";
function mouseMove(ev) {
    var xPos = String(event.pageX-15);
    var yPos = String(event.pageY-10);
    //How can I know the state button of mouse button from here 
    if(mouseState=='down') {
        console.log('mouse down state');
        var add = '<div class="point '+color+' '+size+'" style="top: ' + yPos + 'px; left: ' + xPos + 'px;"></div>';
        $canvas.append(add);
    }

    if(mouseState=='up')  {
        console.log('mouse up state');
    }
}

function mouseDown(ev) {
    console.log('Down State you can now start dragging');
    mouseState = "down";
}

function mouseUp(ev) {
    console.log('up state you cannot drag now because you are not holding your mouse')
    mouseState = "up";
}
