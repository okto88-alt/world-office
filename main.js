const staffImg = new Image();
staffImg.src = "staff.png";
const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");
const tileSize = 64;

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
    ctx.drawImage(
        staffImg,
        characterX,
        canvas.height - 260,
        80,
        120
    );
}

function drawTile(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function drawDiscoFloor(){

    const floorMap = [
        ["#ff4d4d","#4dff88","#4da6ff","#ffd24d"],
        ["#4da6ff","#ffd24d","#ff4d4d","#4dff88"],
        ["#ffd24d","#ff4d4d","#4dff88","#4da6ff"],
        ["#4dff88","#4da6ff","#ffd24d","#ff4d4d"]
    ];

    for(let y=0; y<floorMap.length; y++){
        for(let x=0; x<floorMap[y].length; x++){
            drawTile(x+5, y+5, floorMap[y][x]);
        }
    }
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawRoom();
    drawDiscoFloor();
    drawCharacter();

    characterX += 1;

    if(characterX > canvas.width){
        characterX = -60;
    }

    requestAnimationFrame(animate);
}

animate();
canvas.addEventListener("click", function(e){

    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    let monitorX = 250;
    let monitorY = canvas.height - 300;
    let monitorWidth = 100;
    let monitorHeight = 40;

    if(
        mouseX > monitorX &&
        mouseX < monitorX + monitorWidth &&
        mouseY > monitorY &&
        mouseY < monitorY + monitorHeight
    ){
        openPanel();
    }

});

function openPanel(){
    document.getElementById("staffPanel").classList.add("active");
}

function closePanel(){
    document.getElementById("staffPanel").classList.remove("active");
}



