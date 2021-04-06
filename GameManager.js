const canvas = document.querySelector('canvas'); // Get canvas element
const context = canvas.getContext('2d'); //Context of the canvas
canvas.height = window.innerHeight * 0.8;
canvas.width = window.innerWidth * 0.8;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 5;
let rectPos = {
    x: 10,
    y: 10
};

Animate();
function Animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    bird.Update();
    bird.Draw();

    



    HandleParticles();
    HandleObstacles();


    context.font = '25px Georgia';
    context.fillStyle = 'black';
    context.fillText(`Score: ${score}`, canvas.height - 50, 20);

    if(HandleCollision()) return;

    angle += .1;
    hue++;
    frame++;
    requestAnimationFrame(Animate);
}

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight * 0.8;
    canvas.width = window.innerWidth * 0.8;
})

//Event listener for keys
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space')spacePressed = true;
});
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') spacePressed = false;
});

function HandleCollision() {
    
    for(let i = 0; i < obstacleArray.length; ++i) {
        const birdLeft = bird.position.x; 
        const birdRight = bird.position.x + bird.size.width; 
        const birdTop = bird.position.y; 
        const birdBottom = bird.position.y + bird.size.height;

        const obstLeft = obstacleArray[i].x;
        const obstRight = obstacleArray[i].x + obstacleArray[i].width;
        const obstBottomTop = canvas.height - obstacleArray[i].bottom;
        const obstTopBottom = obstacleArray[i].top;

        if(birdLeft < obstLeft && birdRight > obstRight && (birdTop < obstTopBottom || birdBottom > obstBottomTop)) {
            context.font = '25px Georgia';
            context.fillStyle = 'black';
            context.fillText(`Game Over. Your Scores is: ${score}`, 160, canvas.height / 2 - 10);
            bird.position.x = -500;
            return true;
        }
        if(birdLeft < obstLeft && birdRight > obstRight && (birdTop > obstTopBottom || birdBottom < obstBottomTop)) {
            score++;
        }
        
    }
}