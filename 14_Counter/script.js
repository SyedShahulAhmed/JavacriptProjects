const plus = document.querySelector('.add')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')

const count = document.querySelector('.counter')
let c= 0

plus.addEventListener('click',()=>{
    c++;
    updatecount()
})
minus.addEventListener('click',()=>{
    c--;
    updatecount()
})
reset.addEventListener('click',()=>{
    c=0
    updatecount()
})

const updatecount = ()=>{
    count.innerHTML = `${c}`;

    if (c > 0) {
        count.style.color = 'green'; 
    } else if (c < 0) {
        count.style.color = 'red';  
    } else {
        count.style.color = 'white'; 
    }
}