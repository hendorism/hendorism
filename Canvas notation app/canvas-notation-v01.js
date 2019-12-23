console.log("canvas-notation-v01.js is online");



var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.width = 400;
c.height = 1200;
ctx.font = "20px Arial";
ctx.fillText("Canvas Music Notation App V01",10,40);
const noteHeadRadius = 4;
const lineWidth = 1;
const thickLineWidth = 2.5;
function drawStaves(stavesQuantity,stavesSpacing,topMargin){
    for(e=0;e<stavesQuantity;e++){
        for(i=0;i<5;i++){
            drawLine(10,topMargin+10*i+stavesSpacing*e, 390,topMargin+10*i+stavesSpacing*e);
        }
    }
}
function drawTrebleCleff(x,y){
    //drawReticle(x,y);
    drawLine( x-5,   y+15,  x-7,   y+18 );
    drawLine( x-7,   y+18,  x-5,   y+20 );
    drawLine( x-5,   y+20,  x+5,   y+20 );
    drawLine( x+5,   y+20,  x-8,   y-35 );
    drawLine( x-8,   y-35,  x-5.5, y-40 );
    drawLine( x-5.5, y-40,  x-2,   y-34 );
    drawLine( x-2,   y-34,  x+2,   y-24 );
    drawLine( x+2,   y-24,  x-7,   y    );
    drawLine( x-7,   y,     x,     y+10 );
    drawLine( x,     y+10,  x+5,   y-2  );
    drawLine( x+5,   y-2,   x,     y-9  );
    drawLine( x,     y-9,   x-3,   y-3  );
}
function drawTimeSignature(x,y,n,d){
    //drawReticle();
    ctx.font = "26px Arial";
    ctx.fillText(n,x-7,y-1);
    ctx.fillText(d,x-7,y+20);
}
function drawReticle(y,x){
    ctx.beginPath();
    ctx.arc(x,y,2,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
}
function drawThickLine(x1,y1, x2, y2){
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath();
    ctx.moveTo   ( x1, y1 );
    ctx.lineTo   ( x2, y2 );
    ctx.stroke   ();
}
function drawFlat(x,y){
    //drawReticle (x,y);
    ctx.beginPath();
    ctx.moveTo(x-1,y-13);
    ctx.lineTo(x-3,y+4);
    ctx.bezierCurveTo( x+5,y+1, x+5,y-5, x-3,y-1   );
    ctx.bezierCurveTo( x+5,y-5, x+5,y+1, x-3,y+4   );
    ctx.stroke();
}
function drawDoubleFlat(x,y){
    //drawReticle(x,y);
    drawFlat(x,y);
    drawFlat(x-5,y);
}
function drawSharp(x,y){
    //drawReticle(x,y);
    ctx.font = "18px arial"
    ctx.fillText("#",x-4,y+7);
}
function drawDoubleSharp(x,y){
    //drawReticle(x,y);
    ctx.font = "16px arial"
    ctx.fillText("x",x-4,y+5);
}
function drawNatural(x,y){
    //drawReticle(x,y);
    drawLine(x-2,y-8,x-2,y+5);
    //left vertical top to bottom.
    drawLine(x-2,y+0,x+2,y-5);
    //top mid left to right.
    drawLine(x-2,y+5,x+2,y-0);
    //bottom mid left to right.
    drawLine(x+2,y-5,x+2,y+8);
    //right vertical top to bottom.
}
function drawNoteHead(x,y){
    ctx.beginPath();
    ctx.arc(x,y,noteHeadRadius,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function drawNoteNatural(x,y){
    drawNoteHead(x,y);
    drawNatural(x-10,y);
}
function drawNoteFlat(x,y){
    drawNoteHead(x,y);
    drawFlat(x-9,y+0);
}
function drawNoteDoubleFlat(x,y){
    drawNoteHead(x,y);
    drawDoubleFlat(x-9,y+0);
}
function drawNoteSharp(x,y){
    drawNoteHead(x,y);
    drawSharp(x-10,y);
}
function drawNoteDoubleSharp(x,y){
    drawNoteHead(x,y);
    drawDoubleSharp(x-10,y);
}
function drawKeySignature(x,y,a){
    let orderOfFlats  = [0,-15,5,-10,10,-5,15];
    let orderOfSharps = [-20,-5,-25,-10,5,-15,0];
    //drawReticle(x,y);
    if (a<0) {
        for(i=0;i>a;i-=1){
            drawFlat(x+5*-i,y+orderOfFlats[-i]);
        }
    } else if (a>0) {
        for(i=0;i<a;i++){
            drawSharp(x+5*i,y+orderOfSharps[i]);
        }
    }
}


      //begin scripting for note entry interface.....
var errorMessage = "Enter a number.";
var inputX1 = document.getElementById("inputX1");
var inputY1 = document.getElementById("inputY1"); 
var inputX1value = inputX1.value;
var inputY1value = inputY1.value;
document.getElementById("noteHead").addEventListener("click", drawNoteHead());
document.getElementById("noteHeadNatural").addEventListener("click", drawNoteNatural());
document.getElementById("noteHeadSharp").addEventListener("click", drawNoteSharp());
document.getElementById("noteHeadFlat").addEventListener("click", drawNoteFlat());
document.getElementById("noteHeadDoubleSharp").addEventListener("click", drawNoteDoubleSharp());
document.getElementById("noteHeadDoubleFlat").addEventListener("click", drawNoteDoubleFlat());
function setX1(){
    var inputX1value = inputX1.value;
    if (isNaN(inputX1value)) {
        inputX1value = errorMessage;
    } else {
        inputX1value = inputX;
    }
}
function setY(){
    var inputYvalue = inputX.value;
    if (isNaN(InputYvalue)) {
        inputY.value = errorMessage;
    } else {
        inputYvalue = inputX;
    }
}


console.log("canvas-notation-v01.js is all done executing");