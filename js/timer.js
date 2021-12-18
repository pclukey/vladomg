function countDown(i) {
const x = setInterval(function() {
const futureDate = new Date(document.getElementById("deadline" + i).value);
const today = new Date();
const timeLeft = futureDate - today;
const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const m = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60));
const mAdj = (m % 60);
const s = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000));
const sAdj = (s % 60);
document.getElementById("day" + i).innerHTML = d;
document.getElementById("hour" + i).innerHTML = h;
document.getElementById("minute" + i).innerHTML = mAdj;
document.getElementById("second" + i).innerHTML = sAdj;

if (timeLeft < 0) {
  clearInterval(x);
  document.getElementById("day" + i).innerHTML = 0;
  document.getElementById("hour" + i).innerHTML = 0;
  document.getElementById("minute" + i).innerHTML = 0;
  document.getElementById("second" + i).innerHTML = 0;
 }
}, 1000);

}
