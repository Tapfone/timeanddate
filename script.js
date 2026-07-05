function updateClock() {

    const now = new Date();

    // Time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const timeString =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    // Date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const dateString = now.toLocaleDateString("en-US", options);

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}

// Initial update
updateClock();

// Refresh every second
setInterval(updateClock, 1000);
