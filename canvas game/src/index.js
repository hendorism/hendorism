console.log("hello");
import Paddle from 'src/paddle';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0,0,800,600);

ctx.fillStyle = '#f00';
ctx.fillRect(20,20,50,50);

ctx.fillStyle = '#0f0';
ctx.fillRect(80,80,50,50);

ctx.fillStyle = '#000';
ctx.fillRect(60,60,30,30);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, 800, 600);
    paddle.update(dt);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();



console.log("goodbye");