let player = {
    x: 50,
    y: 50,
    width: 10,
    height: 10
    hp: 100;
}
let gameWorld = {
  height: 500;
  width: 500;
}
function updateRender() {
  //redraw game screen
  //or just update position of all the elements within div.gameWorld
}
function mainLoop() {
  while(inGame == true) {
    setInterval(updateRender(), 1000/10)
  }
}


