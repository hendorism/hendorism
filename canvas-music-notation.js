//canvas-music-notation.js
console.log("canvas-music-notation.js is working!");

//this is excercize_of_the_day.js
//copied from music_notation_v0018.js

var c = document.getElementById("mnCanvas");
var ctx = c.getContext("2d");
c.width = 400;
c.height = 1200;

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
function bCurvexxxxyyyy(x1,x2,x3,x4,y1,y2,y3,y4){
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
    }
    function bCurvexxxxyyyyfill(x1,x2,x3,x4,y1,y2,y3,y4){
    ctx.beginPath ();
    ctx.moveTo (x1,y1);
    ctx.bezierCurveTo (x2,y2,x3,y3,x4,y4);
    ctx.stroke ();
    ctx.fill();
    }
    for(e=0;e<12;e++){
    for(i=0;i<5;i++){
    bCurvexxxxyyyy (
    10,
    30*i+40,
    -10*i+300,
    390,
    
    8*i + 20 + 60*e + 80,
    8*i - 5  + 60*e + 80,
    8*i + 50 + 60*e + 80,
    8*i + 10 + 60*e + 80);
    }
    }
function drawTrebleCleff(x,y){
    drawReticle(x,y);

}
function drawTimeSignature(x,y,n,d){
    //drawReticle();
    ctx.font = "26px Arial";
    ctx.fillText(n,x-7,y-1);
    ctx.fillText(d,x-7,y+20);
}
function drawReticle(x,y){
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
    drawReticle(x,y);
    /*
    if (a<0) {
        for(i=0;i>a;i-=1){
            drawFlat(x+5*-i,y+orderOfFlats[-i]);
        }
    } else if (a>0) {
        for(i=0;i<a;i++){
            drawSharp(x+5*i,y+orderOfSharps[i]);
        }
    }*/
}
//Start drawing music.
//drawStaves(6,80,100);
drawTrebleCleff(10,180);
drawTimeSignature(25,110,4,4);
drawKeySignature(40,111,-4);





console.log("canvas-music-notation.js is working!");