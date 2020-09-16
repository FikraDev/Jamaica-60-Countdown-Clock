const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const secs = document.querySelector("#secs")

function clock() {

    const jam60 = new Date("2022/8/6");
    const currentdate = new Date();
    const timeTo60 = (jam60 - currentdate) / 1000;


    const days = Math.floor(timeTo60 / 3600 / 24);
    const hours = Math.floor(timeTo60 / 3600) % 24;
    const mins = Math.floor(timeTo60 / 60) % 60;
    const secs = Math.floor(timeTo60 % 60);

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#mins").innerHTML = formatTime(mins);
    document.querySelector("#secs").innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(clock, 1000);