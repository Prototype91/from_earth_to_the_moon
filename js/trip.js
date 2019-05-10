//Creation of the different variables and outputs to display specific values :
let slider = document.getElementById("myRange");
let speed_output = document.getElementById("speed");
let time_output = document.getElementById("time");
let means_of_transport_output = document.getElementById("means_of_transport");

//Array with all the means of transport :
const all_means_of_transport = [
    { name: "un homme à pied", speed: 10 },
    { name: "un cheval pur-sang", speed: 65 },
    { name: "une voiture Ferrari", speed: 325 },
    { name: "un avion jet", speed: 740 },
    { name: "un avion de ligne A380", speed: 1185 },
    { name: "la fusée Apollo 11", speed: 5500 }
];

//Distance Earth / Moon in km :
const distance = 384400;

//One hour in Milliseconds :
const oneHourInMs = 3600000;

//Default value of the slider (for the speed) :
speed_output.innerHTML = slider.value;

//value time to go to the moon
//the amount of milliseconds is needed to create the final date
time_output.innerHTML = msToDate((distance / slider.value) * oneHourInMs);

//Initial mean of transport
means_of_transport_output.innerHTML = "un homme à pied";

//Function to display all the specific values :

slider.oninput = function () {

    //We create variables to know wich mean of transport is appropriated :
    let currentSpeed = all_means_of_transport[0].speed;
    let means_of_transport = all_means_of_transport[0].name;
    let differenceMin = Math.abs(slider.value - currentSpeed);
    let difference = 0;

    for (let i = 1; i < all_means_of_transport.length; i++) {

        //We set the difference between the current speed and the speed of means of transport 
        difference = Math.abs(slider.value - all_means_of_transport[i].speed);

        if (difference < differenceMin) {

            //Current speed
            currentSpeed = all_means_of_transport[i].speed;

            //Difference of speed
            differenceMin = difference;

            //Mean of transport appropriated
            means_of_transport = all_means_of_transport[i].name;
        }
    }

    //We display the appropriated informations for the user :

    //Speed
    speed_output.innerHTML = this.value;

    //Time
    time_output.innerHTML = msToDate((distance / slider.value) * oneHourInMs);

    //Mean of transport
    means_of_transport_output.innerHTML = means_of_transport;

}


//Creation of a function to convert milliseconds into a date with HH:MM:SS:

function msToDate(milliseconds) {

    //Get hours from milliseconds
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