// scale_selector_v4.js
// 5/17/2020
// Aaron Dull
console.log("scale_selecotr_v4.js is working.")
const pitches = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"]
function selector(a){
    
    console.log(`a=${a}`)
    console.log("my name is Aaron and the selector function has been called and the variable a  has been passed to the function. a="+a)
    for (i=0;i<pitches.length;i++){
        document.getElementById("").innerHTML = pitches[i+x]
    }
}


let chromaticScale = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"]

function selector(a) {
    var output = document.getElementById("output");
    for (i=0;i<chromaticScale.length;i++){
        if(a+i<chromaticScale.length){
            var t = document.createTextNode(chromaticScale[a+i]);
        } else {
            a = 0;
        }
//        document.body.appendChild(t);
        output.appendChild(t);
    }
}



// document.getElementById("demo").innerHTML = 5 + 6;



