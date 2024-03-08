const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800; 
ctx.lineWidth = 2;


const colors = [

    "#FAEBD7",
    "#00FFFF",
    "#F0F8FF",
    "#7FFFD4",
    "#F5F5DC",
    "#8A2BE2",
    "#7FFF00"
];


function onclick(event){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke(); 
}

canvas.addEventListener("click", onclick);
canvas.addEventListener("mousemove", onclick);



