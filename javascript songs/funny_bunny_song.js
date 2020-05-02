//this is a song file. In order for it to work, you must also
//refer to excercize_of_the_day.js
//in other words you must have a script tag with src="excercize_of_the_day.js"
//modified 5/1/2020 by Aaron Dull
//this file compatible with music_notation_v0018.js
console.log("funny_bunny_song.js is working.");


ctx.font = "20px Arial";
ctx.fillText("Funny Bunny 12/24/2019",10,40);
ctx.font = "16px monospace";
ctx.fillText("Bb clarinet",0,80);

ctx.font = "16px monospace";
ctx.fillStyle = "#ff6699";
ctx.fillText("A Silly Song",130,55);
ctx.fillStyle = "#000000";
drawStaves(12,80,100);
drawTrebleCleff(10,130);
drawKeySignature(20,120,-4);

//beat 1
drawNoteHead(47,110);//Db5
drawLine(50,110,50,85);
drawNoteHead(55,115);//C5
drawLine(58,115,58,85);
drawNoteHead(63,125);//Ab4
drawLine(66,125,66,85);
drawNoteHead(71,140);//Eb4
drawLine(74,140,74,85);
drawThickLine(50,85,74,85);
drawThickLine(50,90,74,90);

//beat 2
drawNoteHead(81,140-35);//Eb5
drawLine(84,140-35,84,83);
drawNoteNatural(100,140-30);//D5
drawLine(103,140-30,103,87);
drawNoteHead(105,120);//Bb4
drawLine(108,120,108,89);
drawNoteHead(110,130);//G4
drawLine(113,130,113,91);
drawThickLine(84,83,113,91);
drawThickLine(84,88,113,96);

//beat 3
drawNoteHead(115,140);//Eb4
drawLine (118,140,118,155);
drawNoteHead(122,125);//Ab5
drawLine (125,125,125,150);
drawNoteFlat(129,115);//Cb5
drawLine (132,115,132,145);
drawNoteHead(137,105);//Eb5
drawLine (140,105,140,140);
drawThickLine (118,155,140,140);
drawThickLine (118,150,140,135);

//beat 4
drawNoteHead(146,120);//Bb4
drawLine(149,120,149,150);
drawNoteHead(154,115);//C5
drawLine(157,115,157,148);
drawNoteHead(162,100);//F5
drawLine(160,100,162,149);
drawNoteSharp(176,110);//D#5
drawLine(179,110,179,145);
drawNoteNatural(194,105);//E5
drawLine(197,105,197,143);
drawThickLine(149,150,198,142);//whole thing
drawThickLine(149,146,158,144);//duple
drawThickLine(162,144,196,137);//triple
drawTuplet(3,161,90,161,79,167,81,170,87,184,85,196,87,196,95);
drawLine(202,100,203,140)
drawLine(390,140,390,100);//barline

//Start line two.
drawTrebleCleff(10,210);
drawKeySignature(20,120+80,-4);

//moving these to line 1
drawNoteHead(210,100);//F5
drawNoteHead(218,105);//Eb5
drawNoteHead(224,115);//C5
drawNoteHead(230,125);//Ab4
drawLine(207,100,207,160);
drawLine(215,105,215,155);
drawLine(221,115,221,150);
drawLine(227,125,227,145);
drawThickLine(207,160,227,145);
drawThickLine(207,155,227,140);

drawNoteHead(237,130);//G4
drawNoteHead(240,120);//Bb4
drawNoteHead(243,110);//Db5
drawNoteHead(246,100);//F5
drawLine(82,210,82,225);
drawLine(92,200,92,221);
drawLine(102,190,102,217);
drawLine(112,180,112,213);
drawThickLine(82,225,112,213);
drawThickLine(82,221,112,209);

drawNoteHead(254,135);//F4
drawNoteHead(262,125);//Ab4
drawNoteHead(270,100);//F5
drawLine(128,215,128,178);
drawLine(138,205,138,188);
drawLine(148,180,148,198);
drawThickLine(128,178,148,198);
drawThickLine(128,185,138,195);

drawNoteHead (340,140);//Eb4
drawNoteHead (360,100);//F5
drawLine (168,220,168,203);
drawLine (188,180,188,198);
drawThickLine (168,203,188,198);
drawLine (198,220,198,180);

//Db4 Ab4 F5 G5 Ab5 A5 Bb5 Db5
drawNoteHead (205,225);
drawNoteHead (214,205);
drawNoteHead (223,180);
drawNoteHead (232,175);
drawNoteHead (241,170);
drawLine(241-8,170,241+46,170);
drawNoteNatural (260,170);
drawNoteHead (269,165);
drawNoteHead (278,155);
drawLine (278-9,160,278+9,160);
drawLine(207,225,207,240);
drawLine (216,205,216,230);
drawLine (225,180,225,220);
drawLine (234,175,234,210);
drawThickLine (207,240,234,210);
drawThickLine (207,235,234,200);
drawLine (244,170,244,210);
drawLine (264,170,264,200);
drawLine (273,165,273,195);
drawLine (281,155,281,190);
drawThickLine (244,210,281,190);
drawThickLine (244,203,281,183);
//16th-R 


drawLine (390,220,390,180);



console.log("funny_bunny_song.js is done working.");