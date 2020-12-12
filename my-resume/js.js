$(document).ready(function(){
    const selfie = document.getElementById('selfie');
    const selfieWidth = 150;
    selfie.style.width = `${selfieWidth}px`;
    selfie.style.height = `${selfieWidth}px`;
    const movingSelfie = new coolSphere(selfie);
    window.onload = movingSelfie.move;
    function coolSphere(domElement) {
        let x = Math.random()*window.innerWidth-selfieWidth;
        let y = Math.random()*window.innerHeight-selfieWidth;
        let b = 2*Math.PI*Math.random();
        let v = 2;
        let vx = Math.cos(b)*v;
        let vy = Math.sin(b)*v;
        domElement.style.left = x + "px";
        domElement.style.top = y + "px";
        this.move = function() {
            const moving = setInterval(frame, 1000/30);
            moving;
            function frame() {
                windowCenterX = window.innerWidth/2;
                windowCenterY = window.innerHeight/2;
                if (x>window.innerWidth-selfieWidth/2 || x<0) {
                    vx = -vx;
                }
                if (y>window.innerHeight-selfieWidth/2 || y<0) {
                    vy = -vy;
                }
                x += vx;
                y += vy;
                domElement.style.top = y + "px";
                domElement.style.left = x + "px";
            }
        }
    }
});    
