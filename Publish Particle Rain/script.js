const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
const numberOfParticles = 300;

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 0.05;
        this.directionX = -1;
    }
    update(){
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = 2;
            this.x = Math.random() * (canvas.width + 1000);
        }
        this.weight += 0.07;
        this.y += this.weight;
        this.x += this.directionX; 
        
    }
    draw(){
        ctx.fillStyle = '#46a0f5';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()
    }
}
function init(){
    for (let i = 0; i < numberOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x,y));
    }
}
init();
function animate(){
    ctx.fillStyle = 'rgba(255,255,255,0.01)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();    
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();