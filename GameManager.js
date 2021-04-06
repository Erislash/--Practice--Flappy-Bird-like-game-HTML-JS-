const canvas = document.querySelector('canvas'); // Get canvas element
const context = canvas.getContext('2d'); //Context of the canvas
canvas.height = window.innerHeight * 0.8;
canvas.width = window.innerWidth * 0.8;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
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
    requestAnimationFrame(Animate);
    angle += .1;
    hue++;
}

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight * 0.8;
    canvas.width = window.innerWidth * 0.8;
})

//Event listener for keys
window.addEventListener('keypress', (e) => {
    if (e.code === 'Space')spacePressed = true;
});
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') spacePressed = false;
});