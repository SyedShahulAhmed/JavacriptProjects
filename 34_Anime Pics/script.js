const img = document.querySelector("img")

const btn = document.querySelector('.gen')

const apiUrl = "Your Api Here"

const generate = document.querySelector('.load')

function genimg(){
    btn.disabled = true;
    btn.innerText = "Generating..."
    fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {
        img.src =  data.url
    })
    .then(()=>{
    btn.disabled = false
    btn.innerHTML = "Generate"
    })
    .catch((error)=>{
        console.log(error);
    })
}
btn.addEventListener('click',genimg)