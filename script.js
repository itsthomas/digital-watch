const secondField = document.querySelector('.second');
const minuteField = document.querySelector('.minute');
const hourField = document.querySelector('.hour');

function setTime() {
  const now = new Date();
  
  let seconds = now.getSeconds();
  // console.log(seconds);
  // change seconds to 2 digit 
  seconds = ("0" + seconds).slice(-2);
  secondField.textContent = seconds;
  
  
  
  let minutes = now.getMinutes();
  // console.log(minutes);
  // change minutes to 2 digit 
  minutes = ("0" + minutes).slice(-2);
  minuteField.textContent = minutes;
  
  let hours = now.getHours();
  // console.log(hours);
  // change hours to 2 digit 
  hours = ("0" + hours).slice(-2);
  hourField.textContent = hours;

}

setInterval(setTime, 1000);