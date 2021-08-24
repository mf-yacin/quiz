
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countDown(){
const datecible = new Date(2021, 08, 10);
const ladate = new Date();

const diff = (datecible - ladate) / 1000;
const days = Math.floor(diff / 3600 / 24);
const hours = Math.floor(diff / 3600) % 24;
const mins = Math.floor(diff / 60) % 60;
const seconds = Math.floor(diff) % 60;
// console.log(seconds)

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
}

countDown();
setInterval(countDown, 1000);



