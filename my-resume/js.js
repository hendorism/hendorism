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
testing.style.left = `${window.innerWidth/2-50}px`;
testing.style.top = `${window.innerHeight/2-50}px`;
// selfie movement
let selfie = document.getElementById('selfie');
let movingSelfie = new coolSphere(selfie);
window.onload = movingSelfie.move;
let frameCounter = 0;
let framesSinceLast_vx_reversal = 0;
let framesSinceLast_vy_reversal = 0;
function coolSphere(domElement) {
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var b = 2*Math.PI*Math.random();
    var v = 2;
    var vx;
    var vy;
    var gx;
    var gy;
    console.log('b='+b);
    console.log('v='+v);
    console.log('vx='+vx);
    console.log('vy='+vy);
    // debugger;
    var domElement = domElement;
    // var shouldCheckBoundary = false;
    // var frictionX;
    // var frictionY;
    // var gLog = [];
    x = Math.random()*window.innerWidth;
    y = Math.random()*window.innerHeight;
    domElement.style.left = x + "px";
    domElement.style.top = y + "px";
    this.move = function() {
        b = 2*Math.PI*Math.random();
        const moving = setInterval(frame, 1000/30);
        moving;
        function frame() {
            // break;
            frameCounter += 1;
            console.log('//============INITIATE_MOVING_FRAME====YOUR_MOTHER_IS_'+frameCounter+'_kg_OVERWEIGHT==============//');
            let selfieCenterX = selfie.style.left.slice(0,-2) + selfie.style.width.slice(0,-2)/2;
            let selfieCenterY = selfie.style.top.slice(0,-2) + selfie.style.height.slice(0,-2)/2;
            let windowCenterX = window.innerWidth/2;
            let windowCenterY = window.innerHeight/2;
            let dx = selfieCenterX - windowCenterX;
            let dy = selfieCenterY - windowCenterY;
            let distanceFromCenter = Math.sqrt(dx**2+dy**2);
            let gravity = 5+1/(distanceFromCenter+0.1);
            vx = Math.cos(b)*v;
            vy = Math.sin(b)*v;
            console.log('x='+x);
            console.log('y='+y);
            console.log('selfieCenterX='+selfieCenterX);
            console.log('selfieCenterY='+selfieCenterY);
            console.log('distanceFromCenter='+distanceFromCenter);
            console.log('vx='+vx);
            console.log('vy='+vy);
            console.log('gravity='+gravity);
            console.log('framesSinceLast_vx_reversal='+framesSinceLast_vx_reversal);
            console.log('framesSinceLast_vy_reversal='+framesSinceLast_vy_reversal);
            // debugger;
                if (framesSinceLast_vx_reversal>=2) {
                    if (x>window.innerWidth-150) {
                        x = window.innerWidth-151;
                        if (vx>0) {
                            vx = -vx*0.9;
                            framesSinceLast_vx_reversal = 0;
                        }
                    }
                    if (x<0) {
                        x = 1;
                        if (vx<0) {
                            vx = -vx*0.9
                            framesSinceLast_vx_reversal = 0;
                        }
                    }
                }
                if (framesSinceLast_vy_reversal>=2) {
                    if (y>window.innerHeight-150) {
                        y = window.innerHeight-151;
                        if (vy>0) {
                            vy = -vy*0.9;
                            framesSinceLast_vy_reversal = 0;
                        }
                    }
                    if (y<0) {
                        y = 1;
                        if (vy<0) {
                            vy = -vy*0.9;
                            framesSinceLast_vy_reversal = 0;
                        }
                    }
                }
            // Whichever axis is bigger will have proportionally more friction
            // so the portrait roams the whole area equally.            
            // frictionX = 1+0.01*(window.innerHeight/window.innerWidth);
            // frictionY = 1+0.01*(window.innerHeight/window.innerWidth);
            // vx /= frictionX;
            // vy /= frictionY;
/*      [[[[[[[[[[[[[[]]]]]]]]]]]]]]

                     f
                    /
                   /|
                  / |
                 /  |
                /   |
               /    |
              /     |
          c  /      |
            /       |b
           /        |
          /         |
         /          |
        /           |
       /           _|
      /___________|_|
    d       a        e

If d is the point where the gravity is being exerted from...
And f is the location of the portrait...
Then the amount by which vx will be changed every frame is...
    let gx = Math.sqrt(gravity**2-dy**2);
Then the amount by which vy will be changed every frame is...
    let gy = Math.sqrt(gravity**2-dx**2);
+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.
                (I think...) but it is making the portrait freeze...
                ...saying v, vx, vy = NaN;;;;
                ...but why would v be affected?
+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.+++++++++.
    a**2+b**2 = c**2;
    a**2 = c**2-b**2;
    b**2 = c**2-a**2;
    a = Math.sqrt(c**2-b**2);
    b = Math.sqrt(c**2-a**2);

I am sort of guessing how gravity works...
    My gravity variable can go where c is...
        Then it should behave somewhat realistically...
            
        [[[[[[[[[[[[[[]]]]]]]]]]]]]]
        [[[[[[[[[[[[[[]]]]]]]]]]]]]]
        [[[[[                  ]]]]]
        [[[[  a**2+b**2 = c**2  ]]]]
        [[[[[                  ]]]]]
        [[[[[[[[[[[[[[]]]]]]]]]]]]]]
        [[[[[[[[[[[[[[]]]]]]]]]]]]]]                                          */

          // Exert gravity on portrait to make it orbit.
            console.log(`gx=${gx}`);
            console.log(`gy=${gy}`);
            if (dx > 0) {
                gx = Math.sqrt(Math.abs(gravity**2-1/dy));
            } else {
                gx = -Math.sqrt(Math.abs(gravity**2-1/dy));
            }
            if (dy > 0) {
                gy = Math.sqrt(Math.abs(gravity**2-1/dx));
            } else {
                gy = -Math.sqrt(Math.abs(gravity**2-1/dx));
            }
            console.log('gravity='+gravity);
            console.log('gx='+gx);
            console.log('gy='+gy);
            console.log('dy='+dx);
            console.log('dx='+dy);
          // let gx = 1; // lateral gravity component
          // let gy = 1; // vertical gravity component
            if (selfieCenterX>windowCenterX) {vx -= gx;} else {vx += gx;}
            if (selfieCenterY>windowCenterY) {vy -= gy;} else {vy += gy;}
            x += vx;
            y += vy;
            domElement.style.top = y + "px";
            domElement.style.left = x + "px";
            framesSinceLast_vx_reversal += 1;
            framesSinceLast_vy_reversal += 1;
            // debugger;
        }
    }
}

// Event listener for button#stop-selfie to stop the loop
/* ==========================================================================...
const buttonStopSelfie = document.getElementById('stop-selfie');
buttonStopSelfie.addEventListener('click', function() {
    console.log('Trying to stop the selfie...')
    clearInterval(movingSelfie.moving);
});
...========================================================================== */

//////////////////////////////////////////////////////////////////////////////\\
// the following code is from this code challenge:                            \\
//   https://codepen.io/Hendorism/pen/dyporQg?editors=1010                    \\
//////////////////////////////////////////////////////////////////////////////\\
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




