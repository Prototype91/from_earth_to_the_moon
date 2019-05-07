let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let output2 = document.getElementById("time");

let distance = 384400;

output.innerHTML = slider.value;
output2.innerHTML = msToDate((distance / slider.value) * 3600000);

slider.oninput = function () {
    output.innerHTML = this.value;
    output2.innerHTML = msToDate((distance / slider.value) * 3600000);
}

function msToDate(milliseconds) {
    //Get hours from milliseconds
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h + 'h ' + m + 'min ' + s + 'sec';
}