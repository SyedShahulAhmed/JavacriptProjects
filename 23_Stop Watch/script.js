const Time = document.querySelector('#timer')
const Start = document.querySelector('#start')
const Stop = document.querySelector('#stop')
const Reset = document.querySelector('#reset')


let starttime = 0;
let timeelapsed = 0;
let timeinterval;

function starttimer(){
    starttime = Date.now() - timeelapsed;
    timeinterval = setInterval(()=>{
        timeelapsed = Date.now()- starttime;
        Time.innerHTML = formatTime(timeelapsed);
    },10)
    Start.disabled = true;
    Stop.disabled = false;
}

function formatTime(timeelapsed){
    const milliseconds = Math.floor((timeelapsed % 1000) / 10);
  const seconds = Math.floor((timeelapsed % (1000 * 60)) / 1000);
  const minutes = Math.floor((timeelapsed % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(timeelapsed / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopTimer(){
    clearInterval(timeinterval);
    Start.disabled = false;
    Stop.disabled = true;
}


function ResetTimer(){
    clearInterval(timeinterval);
    timeelapsed = 0;
    Time.innerHTML = "00:00:00";

    Start.disabled = false;
    Stop.disabled = true;
}

Start.addEventListener('click',starttimer)
Stop.addEventListener('click',stopTimer)
Reset.addEventListener('click',ResetTimer)