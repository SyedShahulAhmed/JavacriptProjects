const testimonials = [
    {
        name:"-Michael",
        iurl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        Text:"The project exceeded my expectations with its exceptional attention to detail. The user interface was not only visually appealing but also remarkably functional!"
    },
    {
        name:"-Sophia",
        iurl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Text:"Impressive functionality and clean design made this project stand out. The JavaScript code is well-organized, making it easy to follow and adapt!"
    },
    {
        name:"-Jessica",
        iurl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Text:"I was amazed by the app's responsiveness and seamless user experience. It’s clear that a lot of thought went into both the design and functionality!"
    },
    {
        name:"-Daniel",
        iurl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        Text:"Outstanding work on the interactive features that truly elevate the user experience. The layout is intuitive, making navigation a breeze!"
    },
    {
        name:"-Cherise",
        iurl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        Text:"I loved the creativity and innovative approach behind this project. The smooth transitions and animations added a polished touch to the overall design!"
    }
]
const img = document.querySelector('img')
const text = document.querySelector('.text')
const user = document.querySelector('.user')

let idx = 0

updatetestimonial()

function updatetestimonial(){
    const { name , iurl , Text} = testimonials[idx]
    img.src = iurl
    text.innerText = Text
    user.innerHTML = name
    idx++;
    if(idx===testimonials.length){
        idx=0
    }
    setTimeout(()=>{
        updatetestimonial()
    },10000)
}

