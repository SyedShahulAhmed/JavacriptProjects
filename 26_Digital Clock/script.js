const hour = document.querySelector('.hourel')
const min = document.querySelector('.minutesel')
const sec = document.querySelector('.secondsel')
const day = document.querySelector('.dayel')

function Updatetime(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ap = "AM"

    if(h>12){
        h = h - 12
        ap = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
    day.innerHTML = ap
    setTimeout(()=>{
        Updatetime()
    },1000)
    
}

Updatetime()