const side = document.querySelector('.sider')
const sbtn = document.querySelector('.show')
const hbtn = document.querySelector('.hide')

sbtn.addEventListener('click',()=>{
    side.classList.toggle("active")
})

hbtn.addEventListener('click',()=>{
    side.classList.add("active")
})