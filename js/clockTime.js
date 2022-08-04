var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("second")
var date = document.getElementById("day")
var month = document.getElementById("month")
var year = document.getElementById("year")
var session = document.getElementById("session")

console.log(month);


var display = function () {

    var dates = new Date();
    var hr = dates.getHours();
    var min = dates.getMinutes();
    var sec = dates.getSeconds();
    var dat = dates.getDay();
    var mon = dates.getMonth();
    var yea = dates.getFullYear();

    var ses = 'A.M';
    if (hr > 12) {
        ses = 'P.M';
        hr = hr - 12;

    }


    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;
    date.innerText = dat;
    month.innerText = mon + 1;
    year.innerText = yea;
    // console.log(month.innerText);
    // console.log(year.innerHTML);
    session.innerText = ses;


}
display()
setInterval(display, 1000)
