const timeElement = document.getElementById("time");
const secondsElement = document.getElementById("seconds");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
});

const secondsFormatter = new Intl.DateTimeFormat(undefined, {
  second: "2-digit"
});

const dayFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long"
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: "long",
  day: "numeric",
  year: "numeric"
});

function updateClock() {
  const now = new Date();

  timeElement.textContent = timeFormatter.format(now);
  secondsElement.textContent = secondsFormatter.format(now);
  dayElement.textContent = dayFormatter.format(now);
  dateElement.textContent = dateFormatter.format(now);
}

updateClock();
setInterval(updateClock, 1000);
