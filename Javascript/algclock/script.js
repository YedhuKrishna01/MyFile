const dial1 = document.getElementById("dial1");
let rotationAngle1 = 0;
setInterval(function hour() {
    rotationAngle1 += 30;
    dial1.style.transform = `rotate(${rotationAngle1}deg)`;
    }, 3600000);

const dial2 = document.getElementById("dial2");
let rotationAngle2 = 0;
setInterval(function min() {
    rotationAngle2 += 6;
    dial2.style.transform = `rotate(${rotationAngle2}deg)`;
    }, 60000);

const dial3 = document.getElementById("dial3");
let rotationAngle3 = 0;
setInterval(function sec() {
    rotationAngle3 += 6;
    dial3.style.transform = `rotate(${rotationAngle3}deg)`;
    }, 1000);