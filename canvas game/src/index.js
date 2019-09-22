import Paddle from '/src/paddle';


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0,0,800,600);

ctx.fillStyle = '#f00';
ctx.fillRect(20,20,20,20);

ctx.fillStyle = '#0f0';
ctx.fillRect(80,80,20,20);


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);