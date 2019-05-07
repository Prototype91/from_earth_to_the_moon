let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let output2 = document.getElementById("time");
let output3 = document.getElementById("means_of_transport");

let distance = 384400;
let means_of_transport = "un homme à pied"

output.innerHTML = slider.value;
output2.innerHTML = msToDate((distance / slider.value) * 3600000);
output3.innerHTML = means_of_transport;

slider.oninput = function () {

    if(slider.value <= 10) means_of_transport = 'un homme à pied';
    if(slider.value > 10 && slider.value <= 65) means_of_transport = 'un cheval pur-sang';
    if(slider.value > 65 && slider.value <= 325) means_of_transport = 'une voiture Ferrari';
    if(slider.value > 325 && slider.value <= 740) means_of_transport = 'un avion jet';
    if(slider.value > 740 && slider.value <= 1185) means_of_transport = 'un avion de ligne A380';
    if(slider.value > 1185 && slider.value <= 5500) means_of_transport = 'la fusée Apollo 11';

    output.innerHTML = this.value;
    output2.innerHTML = msToDate((distance / slider.value) * 3600000);
    output3.innerHTML = means_of_transport;
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