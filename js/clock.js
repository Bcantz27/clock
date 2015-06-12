var timeSettingsShow = false;
var twelvehour = true;

$(document).ready( function() {
    setDay();
    setDate();
    updateTime();
    setInterval(updateTime , 1000);

    document.getElementById("timeBtn").onclick = function () {
        if(timeSettingsShow)
        {
            document.getElementById("timesettings").className = "";
            timeSettingsShow = false;
        } else {
            document.getElementById("timesettings").className = "unscale";
            timeSettingsShow = true;
        }
    };

    document.getElementById("12hour").onclick = function () {
        twelvehour = true;
    };

    document.getElementById("24hour").onclick = function () {
        twelvehour = false;
    };
});

function setDate() {
    var time = new Date();
    var month = time.getMonth();
    var day = time.getDate();
    var year = time.getFullYear();

    switch(month) {
        case 0:
            month = "JAN";
        break;
        case 1:
            month = "FEB";
        break;
        case 2:
            month = "MAR";
        break;
        case 3:
            month = "APR";
        break;
        case 4:
            month = "MAY";
        break;
        case 5:
            month = "JUN";
        break;
        case 6:
            month = "JUL";
        break;
        case 7:
            month = "AUG";
        break;
        case 8:
            month = "SEP";
        break;
        case 9:
            month = "OCT";
        break;
        case 10:
            month = "NOV";
        break;
        case 11:
            month = "DEC";
        break;
    }

    document.getElementById("date").innerHTML = month + " " + day + " " + year;
}

function setDay() {
    var time = new Date();
    var day = time.getDay();

    switch(day){
        case 0:
            day = "SUNDAY";
        break;
        case 1:
            day = "MONDAY";
        break;
        case 2:
            day = "TUESDAY";
        break;
        case 3:
            day = "WEDSDAY";
        break;
        case 4:
            day = "THURSDAY";
        break;
        case 5:
            day = "FRIDAY";
        break;
        case 6:
            day = "SATURDAY";
        break;
    }

    document.getElementById("day").innerHTML = day;
}

function updateTime() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var suffix = " AM";

    //Format Time and Detect AM or PM
    if(hours > 12)
    {
        if(twelvehour) {
            hours = hours - 12;
        }
        suffix = " PM";
    }

    //Add leading Zero for numbers less than 10
    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(mins < 10)
    {
        mins = "0" + mins;
    }
    if(secs < 10)
    {
        secs = "0" + secs;
    }

    document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + secs + suffix;
}
