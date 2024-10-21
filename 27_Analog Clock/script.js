const hour = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')

function settime(){
    const time = new Date()

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const secarrow = (seconds/60) *360;
    const minarrow = (minutes/60) *360;
    const hourarrow = (hours/12) *360;

    sec.style.transform = `rotate(${secarrow}deg)`
    min.style.transform = `rotate(${minarrow}deg)`
    hour.style.transform = `rotate(${hourarrow}deg)`
}

setInterval(() => {
    settime()
}, 1000);