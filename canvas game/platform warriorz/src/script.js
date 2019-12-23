console.log("hello");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 100);


console.log("goodbye");

/*
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.caname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod; 
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
*/