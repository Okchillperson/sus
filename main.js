canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_position_of_x, last_position_of_y;
var color="green";
var linewidth=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;


if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;


    ctx.moveTo(last_position_of_x,last_position_of_y);

    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}