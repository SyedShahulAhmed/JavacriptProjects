const count = document.querySelector('.counter')
const bar = document.querySelector('.lb-front')

let idx=0

updatecount()

function updatecount(){
    count.innerHTML = `${idx}%`;
    bar.style.width = `${idx}%`;
    idx++;
    if(idx<101){
        setTimeout(updatecount,30)
    }
}

