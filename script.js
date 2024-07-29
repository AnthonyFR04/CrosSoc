// Function to get the ordinal suffix for the date
function getDateSuffix(date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

// Arrays to map numbers to names
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get current date components
var now = new Date();
var day = daysOfWeek[now.getDay()];
var month = monthsOfYear[now.getMonth()];
var date = now.getDate();
var year = now.getFullYear();
var dateSuffix = getDateSuffix(date);

// Format the date string
var formattedDate = `${day}, ${month} ${date}${dateSuffix}, ${year}`;

// Display the date in the HTML element with id="datetime"
document.getElementById("datetime").innerHTML = formattedDate;

document.querySelectorAll('.cell input').forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            const nextInput = e.target.nextElementSibling;
            if (nextInput && nextInput.tagName === 'INPUT') {
                nextInput.focus();
            }
        }
    });
});