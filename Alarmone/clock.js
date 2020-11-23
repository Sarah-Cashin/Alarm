//Clock

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let t = setTimeout(startTime, 500);
    let ampm = today.getHours() < 12 ? "AM" : "PM";
    m = checkTime(m);

    document.getElementById("clock").innerHTML = h + ":" + m + " " + ampm;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Alarm
// function changeBackground() {
//     let alarm = document.getElementById("alarmtime").alarm__time;
//     document.body.style.backgroundColor = "yellow";
// }

document.querySelector(".setAlarm").addEventListener("click", function() {
    if (oninput === startTime) {
        document.body.backgroundColor = "blue";
    }
});