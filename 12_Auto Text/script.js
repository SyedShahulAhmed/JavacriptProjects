const tchange = document.querySelector('#textchange')

const options = ["Web Developer","Data Analyst","Software Engineer","Gamer"]

let oindex = 0

let charindex= 0


function updatetext(){
    charindex++;
    tchange.innerHTML = `${options[oindex].slice(0,charindex)}`

    if(charindex === options[oindex].length){
        oindex++;
        charindex = 0;
    }
    if(oindex === options.length){
        oindex =0;
    }
    setTimeout(updatetext,300)
}

updatetext()