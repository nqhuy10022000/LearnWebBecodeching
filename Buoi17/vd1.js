const day = document.getElementById("day");

const hour = document.getElementById("hour");

const minute = document.getElementById("minute");

const second = document.getElementById("second");

const timeUtil = new Date(2021,1,12);

const DAY = 1000 * 3600 * 24;
const HOUR = 1000 * 3600;
const MINUTE = 1000 * 60;
const SECOND = 1000;

setInterval(() => {
    countDown();
}, 1000);

function countDown() {
    //TODO: ms
    const time = timeUtil.getTime() - Date.now();

    const dd = Math.floor(time / DAY);
    const d = Math.floor(time / DAY);

    const h = Math.floor((time % DAY) / HOUR);
    // const h = Math.floor(time / HOUR);

    const m = Math.floor(((time % DAY) % HOUR) / MINUTE);

    const s = Math.floor(((time % DAY) % HOUR % MINUTE) / SECOND);

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}