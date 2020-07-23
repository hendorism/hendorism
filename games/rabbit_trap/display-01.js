// frank poth 2/28/2018

// this display class contains the screen resize event handler and also...
//drawing colors to the buffer and then to the display.

const Display = function(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d"),
    this.context = canvas.getContext("2d");

    this.renderColor = function(color) {
        this.buffer.fillStyle = color;
    }
}








