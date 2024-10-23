const img = document.querySelector('.container')

const btn = document.querySelector('.load')

btn.addEventListener('click',()=>{
    imgadd = 5
    loadimg()
})

function loadimg(){
    for (let i = 0; i < imgadd; i++) {
        const imgEl = document.createElement('img')
        const n = Math.floor(Math.random() * 2000)
        imgEl.src =`https://picsum.photos/300?random = ${n}`
        img.appendChild(imgEl)
    }
}