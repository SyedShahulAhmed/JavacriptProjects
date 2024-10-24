const btn = document.querySelector('.gen')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

const apiUrl = "Your-API"

function genquote(){
    btn.innerHTML = "generate"
    btn.disabled = true;
    quote.innerHTML = "Updating"
    author.innerHTML = ""

    fetch(apiUrl)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        quote.innerHTML = `" ${data.quote} "`;
        author.innerHTML = `~ ${data.author}`;
        btn.innerHTML = "generate"
        btn.disabled = false;
    })
    .catch(error=>{
        console.log(error);
        quote.innerHTML = "Failed to generate a quote"
        author.innerHTML = ""
        btn.innerHTML = "generate"
        btn.disabled = false;
    })
}
genquote()

btn.addEventListener('click',genquote)