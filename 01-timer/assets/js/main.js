let timer = document.getElementById('timer');

let hours = minutes = seconds = 0;

function zeroLeft(number){
    return number < 10 ? `0${number}` : number; 
}

function restart() {
    hours = minutes = seconds = 0
    timer.style.color='black';
    timer.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
}

let interval;
function stop() {
    clearInterval(interval)
    timer.style.color='red';
}

function start() {
    timer.style.color='black';

    interval = setInterval( () => {          
        if (seconds == 60){
            seconds = 0
            minutes++
            if (minutes == 60){
                minutes = 0
                hours++
            }
        }

        timer.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds++)}`;
    }, 1000);
}
