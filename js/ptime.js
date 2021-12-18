let myNum = document.getElementById('myNum');
let startTimer = document.getElementById('startTimer');
let stopTimer = document.getElementById('stopTimer');
let container = document.getElementById('container');

function timerApp(){
if(myNum.innerHTML != 0){
      myNum.innerHTML--;

      }
  else if (myMinutes.innerHTML != 0 && myNum.innerHTML == 0) {
    myNum.innerText = 59;
    myMinutes.innerHTML--;
  }
}

//function that starts the timer
let letsGo;
startTimer.addEventListener("click", function(){
  if (letsGo === undefined){
    letsGo = setInterval(timerApp, 1000);


  } else {
    console.log("it is not undefined");
  }
});

//function that stops the timer
stopTimer.addEventListener("click", function(){
  clearInterval(letsGo);
  letsGo = undefined;

})

//function that resets the timer
resetTimer.addEventListener("click", function(){
  myNum.innerHTML = '00';
  myMinutes.innerHTML = 25;

})
