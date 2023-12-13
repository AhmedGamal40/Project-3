// get Date
const today = new Date();

// day-num
const day = today.getDate();
document.querySelector('#day-num').textContent = day;

// dayName
const dayName = today.getDay();
switch (dayName) {
    case 0:
        document.querySelector('#day-name').textContent = 'Sunday'
        break;
    case 1:
        document.querySelector('#day-name').textContent = 'Monday'
        break;
    case 2:
        document.querySelector('#day-name').textContent = 'Tuesday'
        break;
    case 3:
        document.querySelector('#day-name').textContent = 'Wednesday'
        break;
    case 4:
        document.querySelector('#day-name').textContent = 'Thursday'
        break;
    case 5:
        document.querySelector('#day-name').textContent = 'Friday'
        break;
    default:
        document.querySelector('#day-name').textContent = 'Saturday'
        break;
}

// Get time in UTC
const utcHours = today.getUTCHours();

// Calculate Cairo time by adding the time zone offset
const egyptOffset = 2; // UTC +2 for Cairo
const egyptHours = utcHours + egyptOffset;

// Convert Cairo time to 12-hour format
const isPM = egyptHours >= 12;
const hours = egyptHours % 12;
const ampm = isPM ? "PM" : "AM";

// Update elements with Cairo time
document.querySelector('#hours').textContent = `${hours}`;
document.querySelector('#hour-time').textContent = `${ampm}`;

function counter() {
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 1;
      minutes++;
    }
    document.getElementById("seconds").innerHTML =  seconds;
    document.querySelector('#minutes').textContent = minutes;
  }, 1000);
}
window.onload = counter;