//Creation of the different variables and outputs to display specific values :
let slider = document.getElementById("myRange");
let speed_output = document.getElementById("speed");
let time_output = document.getElementById("time");
let means_of_transport_output = document.getElementById("means_of_transport");

//Distance Earth / Moon in km:
let distance = 384400;

//Default value of the slider (for the mean of transport) :
let means_of_transport = "un homme à pied";

speed_output.innerHTML = slider.value;
//value time to go to the moon
//the amount of milliseconds is needed to create the final date
time_output.innerHTML = msToDate((distance / slider.value) * 3600000);
means_of_transport_output.innerHTML = means_of_transport;

//Function to display in the html all the specific values :

slider.oninput = function () {

    //Conditions to know wich mean of transport is appropriated :
    if(slider.value <= 10) means_of_transport = 'un homme à pied';
    if(slider.value > 10 && slider.value <= 65) means_of_transport = 'un cheval pur-sang';
    if(slider.value > 65 && slider.value <= 325) means_of_transport = 'une voiture Ferrari';
    if(slider.value > 325 && slider.value <= 740) means_of_transport = 'un avion jet';
    if(slider.value > 740 && slider.value <= 1185) means_of_transport = 'un avion de ligne A380';
    if(slider.value > 1185 && slider.value <= 5500) means_of_transport = 'la fusée Apollo 11';

    speed_output.innerHTML = this.value;
    time_output.innerHTML = msToDate((distance / slider.value) * 3600000); //value in milliseconds
    means_of_transport_output.innerHTML = means_of_transport;
}

//Creation of a function to convert milliseconds into a date with HH:MM:SS:

function msToDate(milliseconds) {

    //Convert hours into milliseconds
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Hours to minutes
    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Minutes to seconds
    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    //Returns the amount of time : HH:MM:SS
    return h + 'h ' + m + 'min ' + s + 'sec';
}