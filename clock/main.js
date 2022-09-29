import colors from './hex.js';

const clock = document.querySelector(".clock");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const meridiem = document.querySelector(".meridiem");

function dayOfTheWeek(val) {
  const weekday = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Frш",
    "Sat"
  ];
  return weekday[val];
};

function acivateClock() {
  let now = new Date();
  let time_hour = now.getHours();  
  let time_minute = now.getMinutes();
  let time_second = now.getSeconds();

  day.innerHTML = dayOfTheWeek(now.getDay())
  hour.innerHTML = (time_hour % 12 < 10) ? "0" + time_hour % 12 : time_hour % 12;
  minutes.innerHTML = (time_minute < 10) ? "0" + time_minute : time_minute; 
  seconds.innerHTML = (time_second < 10) ? "0" + time_second : time_second;
  meridiem.innerHTML = time_hour >= 12 ? "PM" : "AM";
  setTimeout(acivateClock, 1000);
}

window.addEventListener('load', () => {
  acivateClock();
  colors();
});