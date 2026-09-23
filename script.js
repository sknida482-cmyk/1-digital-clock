
// GET HTML ELEMENTS


const timeElement = document.getElementById("time");
const periodElement = document.getElementById("period");
const dateElement = document.getElementById("date");


// FUNCTION TO UPDATE CLOCK


function updateClock() {

  // Get the current date and time
  const now = new Date();



  // GET HOURS, MINUTES AND SECONDS


  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  // AM / PM


  let period = hours >= 12 ? "PM" : "AM";



  // CONVERT 24-HOUR FORMAT TO 12-HOUR


  hours = hours % 12;

  // When hour is 0, display 12
  hours = hours === 0 ? 12 : hours;



  // ADD ZERO BEFORE SINGLE DIGIT
  // Example: 5 becomes 05


  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");



  // DISPLAY TIME


  timeElement.textContent =
    `${hours}:${minutes}:${seconds}`;


  // Display AM / PM
  periodElement.textContent = period;



  // DISPLAY DATE


  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  dateElement.textContent =
    now.toLocaleDateString("en-IN", options);
}



// RUN FUNCTION IMMEDIATELY


updateClock();



// UPDATE CLOCK EVERY 1 SECOND


setInterval(updateClock, 1000);
