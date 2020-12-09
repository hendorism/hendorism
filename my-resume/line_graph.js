var c = document.getElementById("line-graph");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = 400;
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 0, c.width, c.height);
ctx.fillStyle = "#eeeecc";
ctx.fillRect(0,0,c.width, c.height);
ctx.font = "30px Arial";

function drawGraph(array) {
    clearCanvas();
    // drawMessage('gravity graph', 24, 10, 20);
    drawSomeGridLines();
    let outputX;
    for (i=0;i<array.length;i++) {
        outputX = i;
        if (array.length>c.width) {
            outputX = i-(array.length-c.width);
        }
        drawLine(outputX, c.height-array[i], outputX+1, c.height-array[i+1]);
    }
}

// function drawMessage(msg, size, x, y) {
//     let oldFillStyle = ctx.fillStyle;
//     ctx.fillStyle = #000000;
//     ctx.font = size+'px Arial';
//     ctx.fillText(msg, x, y);
//     ctx.fillStyle = oldFillStyle;
// }

function drawLine(x1,y1,x2,y2){
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
}
function clearCanvas() {
    ctx.fillStyle = "#fefefe";
    ctx.fillRect(0, 0, c.width, c.height);
  }


let gridLinesSpacing = 100
function drawSomeGridLines() {

    for (i=0;i<c.height/gridLinesSpacing;i++) {
        drawLine(0, c.height-gridLinesSpacing*i, c.width, c.height-gridLinesSpacing*i)

    }
}