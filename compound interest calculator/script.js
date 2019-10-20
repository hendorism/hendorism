console.log("working")

function textToRange() {
  var dur = document.getElementById("durationT").value;
  var inc = document.getElementById("incomeT").value;
  var per = document.getElementById("percentT").value;
  var ret = document.getElementById("returnT").value;
  console.log(dur);
  console.log(inc);
  console.log(per);
  console.log(ret);
  document.getElementById("durationR").value = dur;
  document.getElementById("incomeR").value = inc;
  document.getElementById("percentR").value = per;
  document.getElementById("returnR").value = ret;
}

function rangeToText() {
  var dur = document.getElementById("durationR").value;
  var inc = document.getElementById("incomeR").value;
  var per = document.getElementById("percentR").value;
  var ret = document.getElementById("returnR").value;
  console.log(dur);
  console.log(inc);
  console.log(per);
  console.log(ret);
  document.getElementById("durationT").value = dur;
  document.getElementById("incomeT").value = inc;
  document.getElementById("percentT").value = per;
  document.getElementById("returnT").value = ret;
}

document.getElementById("submit").addEventListener("click", function(){
  console.log("Hello World");
});
