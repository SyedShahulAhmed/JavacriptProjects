const btn = document.querySelectorAll("button")

const input = document.querySelector('.result')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
        const btnval = btn[i].textContent;
        if(btnval === "C"){
            clearinput()
        }else if (btnval === "="){
            calculate()
        }else{
            appendval(btnval)
        } 
    })
}
function clearinput(){
    input.value = "";
}

function calculate(){
    if(input.value === ""){
        alert("Enter some value")
    }else if (/^[\/*\-+]/.test(input.value)) {
        alert("Invalid input: Cannot start with an operator");
    }   
    else{
        input.value = eval(input.value)
    }
}

function appendval(btnval){
    input.value += btnval
}