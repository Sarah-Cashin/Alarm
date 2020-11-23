//Alarm
//

// trying to get the time and clock to link to change the background colour

// function changeBackground() {
//     let time = document.getElementById("alarmtime");
//     let clock = document.getElementById("clock");

//     if (clock = time) {
//         document.body.style.backgroundColor = "yellow";
//     }

// }

// function changeBackground() {
//     let time = new Date.getHours();
//     if (time < 17) {
//         document.body.style.backgroundColor = "yellow";
//     }

// }

function changeBackground() {
    let alarm = document.getElementById("alarmtime").alarm__time;
    document.body.style.backgroundColor = "yellow";
}

document.querySelector(".setAlarm").addEventListener("click", function() {
    if (alarm__time === startTime) {
        document.body.backgroundColor = "blue";
    }
});