function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let s = 'AM';
    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
        s = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    let ans = document.querySelector('#digitalClock');
    ans.innerHTML = hours + ':' + mins + ':' + secs + ' ' + s;
    setTimeout(showTime, 1000);
}
showTime();