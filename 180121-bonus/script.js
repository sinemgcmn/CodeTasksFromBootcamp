var smallcanvas = document.getElementById("smallcanvas");
var bigcanvas = document.getElementById("bigcanvas");

var ctx = smallcanvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "#06A77D";
ctx.fillRect(0, 0, smallcanvas.width, smallcanvas.height);

//circle
// drawing a circle
ctx.beginPath();
ctx.arc(300, 75, 50, 0, Math.PI * 2);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//drawing torso
ctx.beginPath();
ctx.moveTo(300, 127);
ctx.lineTo(300, 300);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//drawing left arm
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 170);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//drawing right arm
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(300, 168);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath;

//drawing left leg
ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(300, 299);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//drawing right leg
ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(300, 300);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//big canvas

var bigctx = bigcanvas.getContext("2d");
bigctx.beginPath();
bigctx.fillStyle = "#D5C67A";
bigctx.fillRect(0, 0, bigcanvas.width, bigcanvas.height);

bigctx.drawImage(smallcanvas, 0, 0);

document.addEventListener("keydown", control);

var x = 0;
var y = 0;

function control(event) {
    if (event.keyCode == "38") {
        y++;
    } else if (event.keyCode == "40") {
        y++;
    } else if (event.keyCode == "37") {
        x++;
    } else if (event.keyCode == "39") {
        x++;
    }
    bigctx.clearRect(0, 0, bigcanvas.width, bigcanvas.height);
    bigctx.drawImage(smallcanvas, x, y);
}
