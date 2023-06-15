var clock = document.getElementById("clock")
var stopwatch = document.getElementById("stopwatch")
var countdown = document.getElementById("countdown")

function clockDisplay() {
    if (clock.style.display == "none") {
        clock.style.display = "block";
    } else {
        clock.style.display = "none";
    }
    stopwatch.style.display = "none";
    countdown.style.display = "none";
}

function stopwatchDisplay() {
    if (stopwatch.style.display == "none") {
        stopwatch.style.display = "block";
    } else {
        stopwatch.style.display = "none";
    }
    clock.style.display = "none";
    countdown.style.display = "none";
}

function countdownDisplay() {
    if (countdown.style.display == "none") {
        countdown.style.display = "block";
    } else {
        countdown.style.display = "none";
    }
    clock.style.display = "none";
    stopwatch.style.display = "none";
}

function clockDisplayInfinite() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + " : " + minutes + " : " + seconds;
    document.getElementById("clock-display").innerHTML = time;
    setTimeout(clockDisplayInfinite, 1000);
}

function startStopwatch() { 
    var time = 0;
    var interval = setInterval(function() {
        time++;
        var hours = Math.floor(time / 10 / 60 / 60);
        var minutes = Math.floor(time / 10 / 60);
        var seconds = Math.floor(time / 10 % 60);
        var tenths = time % 10;
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        document.getElementById("stopwatch-display").innerHTML = hours + " : " + minutes + " : " + seconds + " : " + tenths;
    }
    , 100);
    document.getElementById("start-btn").onclick = function() {
        clearInterval(interval);
    }
    document.getElementById("stop-btn").onclick = function() {
        clearInterval(interval);
    }
    document.getElementById("reset-btn").onclick = function() {
        clearInterval(interval);
        resetStopwatch();
    }
}

function resetStopwatch() {
    document.getElementById("stopwatch-display").innerHTML = "00 : 00 : 00 : 0";
}

clock.style.display = "none";
stopwatch.style.display = "none";
countdown.style.display = "none";

clockDisplayInfinite();