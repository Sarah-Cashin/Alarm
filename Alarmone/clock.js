//Clock

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let t = setTimeout(startTime, 500);
    let ampm = today.getHours() < 12 ? "AM" : "PM";
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + ampm

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}