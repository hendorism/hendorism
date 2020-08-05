


const Controller = function() {

    this.down = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.buttonInput();
    this.up = new Controller.ButtonInput();

    this.keyDownUp = function(event) {

        var down = (event.type == "keydown") ? true : false;
    }

}

