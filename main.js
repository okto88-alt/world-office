const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let characterX = 100;

function drawRoom(){

    // WALL
    ctx.fillStyle = "#2c2f33";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // FLOOR
    ctx.fillStyle = "#23272a";
    ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

    // DESK
    ctx.fillStyle = "#8B5A2B";
    ctx.fillRect(200, canvas.height - 260, 200, 60);

    // SCREEN
    ctx.fillStyle = "#00FFAA";
    ctx.fillRect(250, canvas.height - 300, 100, 40);
}

function drawCharacter(){
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(characterX, canvas.height - 260, 60, 120);
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawRoom();
    drawCharacter();

    characterX += 1;

    if(characterX > canvas.width){
        characterX = -60;
    }

    requestAnimationFrame(animate);
}

animate();
canvas.addEventListener("click", function(e){

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // klik monitor
    if(
        mouseX > 250 &&
        mouseX < 350 &&
        mouseY > canvas.height - 300 &&
        mouseY < canvas.height - 260
    ){
        alert("Open Staff Panel");
    }

});
