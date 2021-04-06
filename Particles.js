let partArray = [];
class Particle {
    constructor() {
        this.x = bird.position.x;
        this.y = bird.position.y + bird.size.height / 2;
        this.size = Math.random() * 7 + 3;
        this.speed = {
            x:0,
            y:Math.random() - 0.5
        }
        this.opacity = 100;
        this.color = `hsla(${hue}, 100%, 50%, ${this.opacity / 100})`;
    }

    Update() {
        this.opacity -= gameSpeed;
        this.x -= gameSpeed;
        this.y -= this.speed.y;
    }

    Draw() {
        this.color = `hsla(${hue}, 100%, 50%, ${this.opacity / 100})`;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
    
}


function HandleParticles() {
    partArray.push(new Particle);


    for (let i = 0; i < partArray.length; ++i) {
        partArray[i].Update();
        partArray[i].Draw();
    }

    if (partArray.length > 200) {
        partArray = partArray.slice(20, 200);
    }
}