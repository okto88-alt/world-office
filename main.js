const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let x = 0;

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // contoh object hidup
    ctx.fillStyle = "#00FFAA";
    ctx.fillRect(x, 200, 120, 120);

    x += 2;

    if(x > canvas.width){
        x = -120;
    }

    requestAnimationFrame(animate);
}

animate();