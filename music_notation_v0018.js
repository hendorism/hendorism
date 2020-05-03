console.log("music_notation_v0018.js is working.");



var c = document.getElementById("mnCanvas");
var ctx = c.getContext("2d");
c.width = 400;
c.height = 1200;
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 0, c.width, c.height);
ctx.fillStyle = "#eeeecc";
ctx.fillRect(0,0,c.width, c.height);
const noteHeadRadius = 4;
const lineWidth = 1;
const thickLineWidth = 2.5;
function drawReticle(x,y){
    ctx.fillStyle = '#77f';
    ctx.beginPath();
    ctx.arc(x,y,4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function drawStaves(stavesQuantity,stavesSpacing,topMargin){
    for(e=0;e<stavesQuantity;e++){
        for(i=0;i<5;i++){
            drawLine(20,topMargin+10*i+stavesSpacing*e, 390,topMargin+10*i+stavesSpacing*e);
        }
    }
}
function drawTrebleCleff(x,y){
    //drawReticle(x,y);
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.beginPath ();
    ctx.moveTo (x-5,y+20);
    ctx.bezierCurveTo (
    x+3,y+40,
    x+4,y+15,
    x-4,y-40);
    
    ctx.bezierCurveTo ( 
    x+16,y-35,
    x-20,y-4,
    x-4,y+14);
    
    ctx.bezierCurveTo (
    x+16,y+35,
    x+10,y-45,
    x-4,y+5);
    ctx.stroke ();
}
function drawTimeSignature(x,y,n,d){
    //drawReticle();
    ctx.font = "26px Arial";
    ctx.fillText(n,x-7,y-1);
    ctx.fillText(d,x-7,y+20);
}

function drawLine(x1,y1,x2,y2){
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
}
function drawBezier(x1,x2,x3,x4,y1,y2,y3,y4) {
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
}
function drawThickLine(x1,y1, x2, y2){
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath();
    ctx.moveTo   ( x1, y1 );
    ctx.lineTo   ( x2, y2 );
    ctx.stroke   ();
}
function drawThickBezier(x1,x2,x3,x4,y1,y2,y3,y4) {
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
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
    //ctx.beginPath();
    //ctx.arc(x,y,noteHeadRadius,0,Math.PI*2,true);
    //ctx.closePath();
    //ctx.fill();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x, y, 6/2, 8/2, Math.PI / 3, 0, 2 * Math.PI);
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
function drawTuplet(t,x1,y1,x2,y2,x3,y3,xt,yt,x4,y4,x5,y5,x6,y6) {
    ctx.lineWidth = lineWidth;
    drawLine(x1,y1,x2,y2);
    drawLine(x2,y2,x3,y3);
    ctx.font = "18px monospace";
    ctx.fillText(t,xt,yt);
    drawLine(x4,y4,x5,y5);
    drawLine(x5,y5,x6,y6);
    //ctx.beginPath();
    //ctx.moveTo(x1, y1);
    //ctx.lineTo(x2, y2);
    //ctx.lineTo(x3, y3);
    //ctx.stroke();

    //ctx.moveTo(x4, y4);
    //ctx.lineTo(x5, y5);
    //ctx.lineTo(x6, y6);
    //ctx.stroke();
}
/*
function drawNote(a,x,y,sd,sl,sx){
  if a=
  drawNoteHead(x,y);
}

*/


console.log("music_notation_v0018.js is finished working.");

