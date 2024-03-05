const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800; 

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// body and arms
ctx.fillRect(170, 160, 15, 100);
ctx.fillRect(310, 160, 15, 100);
ctx.fillRect(220, 160, 60, 200);
 
// head
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill(); 

// eyes
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(230, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();



