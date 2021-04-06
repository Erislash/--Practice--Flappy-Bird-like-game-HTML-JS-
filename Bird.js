class Bird {
    constructor() {
        this.position = {
            x: 150,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.size = {
            width: 30,
            height: 30
        }

        this.weight = 1;
    }


    Update() {
        let curve = Math.sin(angle) * 30;
        if(this.position.y > canvas.height - this.size.height - 5 + curve){
            this.velocity.y = 0;
            this.position.y = canvas.height - this.size.height - 5 + curve;
        }

        if(this.position.y < 0){
            this.velocity.y = 3;
            this.position.y = 10;
            return
        }

        this.velocity.y += this.weight;
        this.position.y += this.velocity.y;

        if (spacePressed) this.Flap();
    }

    Draw() {
        context.fillStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    Flap() {
        this.velocity.y -= 3;
    }
}

const bird = new Bird();