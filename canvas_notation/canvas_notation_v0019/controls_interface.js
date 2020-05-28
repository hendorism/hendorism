// canvas_notation_v0019
// Aaron Dull
// 5/27/2020

//create interface draws all the buttons and applies classes, id's, and onclick properties to them.
//the onclick properties will call a function that is the function the user theoretically wants to have happen by clicking/tapping the button.

// function create_interface() {
//     for(i=0;i<3;i++){
//         var sixtyFourth = document.createElement("BUTTON");
//         document.body.appendChild(sixtyFourth);
//     }
//   }

// document.getElementsByTagName("128th").addEventListener("click", function(){
//     document.getElementsByTagName("demo").innerHTML = "Hello World";
//   });

const togglePosition = 0; // 0 means off (rests). 1 means on (notes).
function noteRestToggle() {
    if ( togglePosition = 1 ) {
        document.getElementById("note/rest_toggle").src = "note_rest_toggle_on.png";
        document.getElementsByClassName("duration_rest").style.visibility = "visible";
        document.getElementsByClassName("duration_rest").style.visibility = "hidden";
        var togglePosition = 2;
    } else if ( togglePosition = 1 ) {

    }
  }
}


// document.getElementById("myImg").src = "hackanm.gif";


console.log("you are a stinky motherfucker")
console.log("a log with 32inch diameter and 32foot length is " + (5+4) + " mbf!")

//   make it so duration buttons change from note to rest when user hits the "note/rest" button




