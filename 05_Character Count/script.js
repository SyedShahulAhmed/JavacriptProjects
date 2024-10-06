const textarea = document.querySelector('#tarea')
const totalcounter = document.querySelector('#tcounter')
const Remaincounter = document.querySelector('#rcounter')

textarea.addEventListener('keyup',()=>{
    updatecounter()
})


const updatecounter = ()=>{
    totalcounter.innerHTML = textarea.value.length;
    Remaincounter.innerHTML = textarea.getAttribute('maxlength')-textarea.value.length
}
