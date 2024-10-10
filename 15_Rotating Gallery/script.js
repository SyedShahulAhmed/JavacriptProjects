const previous = document.querySelector('.prev')
const next = document.querySelector('.next')

const img = document.querySelector('.image-container')

let x = 0

let time;

previous.addEventListener('click',()=>{
    x=x+45
    clearTimeout(time);
    updateimg()
})
next.addEventListener('click',()=>{
    x=x-45
    clearTimeout(time);
    updateimg()
})
const updateimg = ()=>{
    img.style.transform = `perspective(1000px) rotateY(${x}deg)`
    time = setTimeout(()=>{
        x=x-45;
        updateimg()
    },4000)
}

updateimg()