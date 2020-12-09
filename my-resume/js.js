// I am looking for a job in tech.
// I have been studying programming since 2018
// But as far back as 2005 I was learning the basics of
// html/css/javascript, making custom gifs
// and promoting my band on MySpace,
// embedding videos on my MySpace page before YouTube or video.google.com
// And before that I was playing Warcraft II
// on a Mac IIvx running Mac OS 7.6 on a 72Mb HD

console.log('This is the resume of Aaron 20201206212151');
let testing = document.getElementById('testing');
testing.style.left = window.innerWidth/2+'px';
testing.style.top = window.innerHeight/2+'px';
// selfie movement
let selfie = document.getElementById('selfie');
let movingSelfie = new coolSphere(selfie);
window.onload = movingSelfie.move;
function coolSphere(domElement) {
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var b = 2*Math.PI*Math.random();
    var v = 2;
    var vx = Math.cos(b)*v;
    var vy = Math.sin(b)*v;
    var domElement = domElement;
    var checkBoundary = false;
    var frictionX;
    var frictionY;
    var gLog = [];
    var dLog = [];
    x = Math.random()*window.innerWidth;
    y = Math.random()*window.innerHeight;
    domElement.style.left = x + "px";
    domElement.style.top = y + "px";
    this.move = function() {
        b = 2*Math.PI*Math.random();
        setInterval(moving, 1000/30);
        function moving() {
            // break;
            console.log('moving');
            let selfieCenterX = (selfie.style.left).slice(0,-2) + (selfie.style.width).slice(0,-2)/2;
            let selfieCenterY = (selfie.style.top).slice(0,-2) - (selfie.style.height).slice(0,-2)/2;
            let windowCenterX = window.innerWidth/2;
            let windowCenterY = window.innerHeight/2;
            let distanceFromCenter = Math.sqrt((selfieCenterX - windowCenterX)**2 + (selfieCenterY - windowCenterY)**2);
            let gravity = 1/(Math.sqrt(distanceFromCenter)+0.9)+distanceFromCenter/1000;
            console.log('sx='+selfieCenterX);
            console.log('sy='+selfieCenterY);
            console.log('dc='+distanceFromCenter);
            console.log('v='+(Math.sqrt(vx**2+vy**2)));
            console.log('vx='+vx);
            console.log('vy='+vy);
            console.log('g='+gravity);
            console.log(checkBoundary);
            dLog.push(distanceFromCenter);
            gLog.push(gravity);
            console.log(dLog);
            drawGraph(dLog);
            //only check boundry every other frame so it doesn't get stuck.
            if (checkBoundary == false) {
                checkBoundary = true;
            } else {
                if (x>window.innerWidth-150 || x<0) {
                    vx = -vx;
                }
                if (y>window.innerHeight-150 || y<0) {
                    vy = -vy;
                }
                checkBoundary = false;
            }
            // Whichever axis is bigger will have proportionally more friction
            // so the portrait roams the whole area equally.            
            // frictionX = 1+0.01*(window.innerHeight/window.innerWidth);
            // frictionY = 1+0.01*(window.innerHeight/window.innerWidth);
            // vx /= frictionX;
            // vy /= frictionY;
/*
    a**2+b**2 = c**2;
    a**2 = c**2-b**2;
    b**2 = c**2-a**2;
    a = Math.sqrt(c**2-b**2);
    b = Math.sqrt(c**2-a**2);
*/
            if (selfieCenterX>windowCenterX) {
                vx -= gravity;
            } else {
                vx += gravity;
            }
            if (selfieCenterY>windowCenterY) {
                vy -= gravity;
            } else {
                vy += gravity;
            }
            x += vx;
            y += vy;
            domElement.style.top = y + "px";
            domElement.style.left = x + "px";
        }
    }
}



// the following code is from this code challenge:
  // https://codepen.io/Hendorism/pen/dyporQg?editors=1010

// function trace( msg, shouldReplace = false ) : void {
//   var echo = window.document.getElementById( 'echo' );
//   if( shouldReplace ) {
//     echo.innerHTML = msg + "\n";
//   } else {
//     echo.innerHTML += msg + "\n";
//   }
//   console.log( msg );
// }

// trace( 'Hello, and welcome to your code puzzle.' );

// /* Begin Aaron's code. */
// const theButton = document.getElementById("the-button");
// const aaronInfo = document.getElementById("aaron-info");
// const solarSystemGif = document.getElementById("solar-system-gif");
// const sphereOneDomElement = document.getElementById('sphere-one');
// const sphereTwoDomElement = document.getElementById('sphere-two');
// let sphereOne = new coolSphere(sphereOneDomElement);
// let sphereTwo = new coolSphere(sphereTwoDomElement);
// const bothSpheres = [sphereOne, sphereTwo];
// var v = 6*(Math.random()+0.5);

// function coolSphere(domElement) {
//   var shouldRun = true;
//   var x = Math.random()*window.innerWidth;
//   var y = Math.random()*window.innerHeight;
//   var b = 2*Math.PI*Math.random();
//   var vx = Math.cos(b)*v;
//   var vy = Math.sin(b)*v;
//   var domElement = domElement;
//   this.accelerate = function() {
//     if (vx < 0) {
//       vx -= Math.random()+0.2;
//     }
//     if (vy < 0) {
//       vy -= Math.random()+0.2;
//     }
//     if (vx >= 0) {
//       vx += Math.random()+0.2;
//     }
//     if (vy >= 0) {
//       vx += Math.random()+0.2;     
//     }
//   }
//   this.spawn = function() {
//     domElement.classList.remove("invisible");
//     x = Math.random()*window.innerWidth;
//     y = Math.random()*window.innerHeight;
//     domElement.style.left = x + "px";
//     domElement.style.top = y + "px";
//   }
//   this.move = function() {
//     b = 2*Math.PI*Math.random();
//     vx = Math.cos(b)*v;
//     vy = Math.sin(b)*v;
//     var setInMotion = setInterval(frame, 1000/30);
//     function frame() {
//       if (x>window.innerWidth-50 || x<0) {vx = -vx;}
//       if (y>window.innerHeight-50 || y<0) {vy = -vy;}
//       x += vx;
//       y += vy;
//       domElement.style.top = y + "px";
//       domElement.style.left = x + "px";
//     }
//   }
// }
// // A counter and a switch statement to handle //
// // all the buttons presses.                   //
// let clickCount = 0;
// theButton.addEventListener("click", function() {
//   switch (clickCount) {
//     case 0:
//       // Display personal info.
//       console.log('first press. displaying personal info')
//       console.log(aaronInfo);
//       aaronInfo.classList.remove("invisible");
//       break;
//     case 1:
//       // Display GIF.
//       console.log('secondPress. displaying gif.');
//       solarSystemGif.classList.remove("invisible");
//       break;
//     case 2:
//       // Make button text purple.
//       console.log('thirdPress. Change button text color to purple.');
//       theButton.classList.add("purple-text");
//       break;
//     case 3:
//       // Spawn first sphere.
//       console.log('fourthPress. spawning sphere.');
//       console.log('sphereOne.spawn = ' + sphereOne.spawn);
//       sphereOne.spawn();
//       break;
//     case 4:
//       // First sphere begins moving and bouncing off sides.
//       console.log('fifthPress. sphere1 begins moving and bouncing off window borders');
//       sphereOne.move();
//       break;
//     case 5:
//       // Add second sphere different color also moving.
//       console.log('sixthPress. adding second sphere and setting it in motion.');
//       sphereTwo.spawn();
//       sphereTwo.move();
//       break;
//     case 6:
//       // Increment sphere speed.
//       console.log('subsequentPresses. incrementing sphere velocity.');
//       console.log(bothSpheres);
//       sphereOne.accelerate();
//       sphereTwo.accelerate();
//   }
//   // Increment clickCount if it is less than 6.
//   if (clickCount < 6) {clickCount++;}
// });




