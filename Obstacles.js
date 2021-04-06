let obstacleArray = [];
class Obstacle {
    constructor() {
        this.top = Math.random() * canvas.height / 2 + 20;
        this.bottom = Math.random() * canvas.height / 3 + 20;
        this.x = canvas.width;
        this.width = 20;
        this.color = `hsla(${hue}, 100%, 50%, 1)`;
    }

    Draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, 0, this.width, this.top);
        context.fillRect(this.x, canvas.height - this.bottom, this.width, canvas.height - this.bottom);

    }

    Update(){
        this.x -= gameSpeed;
        this.Draw();
    }
}


function HandleObstacles() {
    if(frame % 50 === 0) {
        obstacleArray.push(new Obstacle);
    }

    for (let i = 0; i < obstacleArray.length; ++i) {
        obstacleArray[i].Update();
    }

    if (obstacleArray.length > 10) {
        obstacleArray.shift();
    }
}