const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const dayNames = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const giveawayDeadline = document.querySelector(".giveaway-subtitle > span");
const items = document.querySelectorAll(".remaining-time > span");
const giveawayTime = document.querySelector(".giveaway-time");


const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const finalDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);
const finalYear = finalDate.getFullYear();
const finalMonth = monthNames[finalDate.getMonth()];
const finalDay = finalDate.getDate();
const finalHours = finalDate.getHours();
const finalMinutes = finalDate.getMinutes();
const finalDayName = dayNames[finalDate.getDay()];

// deadline
giveawayDeadline.innerText = 
`${finalDayName}, ${finalDay} ${finalMonth} ${finalYear} ${finalHours}:${finalMinutes}pm`;

// remaining time
function getRemainingTime(){
    const finalTime = finalDate.getTime();
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    let remainingTime = finalTime - currentTime;

    // one millisecond per units
    const perDay = 24 * 60 * 60 * 1000;
    const perHour = 60 * 60 * 1000;
    const perMinute = 60 * 1000;
    const perSecond = 1000;

    const remainingDays = Math.floor(remainingTime / perDay);
    remainingTime -= remainingDays * perDay;
    const remainingHours = Math.floor(remainingTime / perHour);
    remainingTime -= remainingHours * perHour;
    const remainingMinutes = Math.floor(remainingTime / perMinute);
    remainingTime -= remainingMinutes * perMinute;
    const remainingSeconds = Math.floor(remainingTime / perSecond);

    // const remainingDays = Math.floor(remainingTime / perDay);
    // const remainingHours = Math.floor((remainingTime % perDay) / perHour);
    // const remainingMinutes = Math.floor((remainingTime % perHour) / perMinute);
    // const remainingSeconds = Math.floor((remainingTime % perMinute) / perSecond);

    const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];
    function format(num){
        if(num < 10)
            return `0${num}`;
        return num;
    }
    items.forEach((item, index) => {
        item.innerText = format(values[index]);
    });

    if(remainingTime < 0){
        clearInterval(timerId);
        giveawayTime.innerHTML = 
        `<h1 class="giveaway-subtitle">Sorry, giveaway time ended. Try next time!</h1>`;
    }
}
const timerId = setInterval(getRemainingTime, 1000);
getRemainingTime();

