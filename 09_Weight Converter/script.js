const pounds = document.querySelector('#weigh'); 
const kg = document.querySelector('#kgs');
const error = document.querySelector('#error');

let errortime;
let result;
function updateweight() {
    let val = parseFloat(pounds.value); 

    if (isNaN(val) || val <= 0) {
        error.innerHTML = "Please Enter Valid Number";
        clearTimeout(errortime);
        errortime = setTimeout(() => {
            error.innerHTML = "";
            pounds.value = "";
            kg.innerHTML = 0
        }, 3000);
        
        kg.value = '';
    } else {
        kg.innerHTML = (val / 2.2).toFixed(2); 
        clearTimeout(result);
        result = setTimeout(() => {
            kg.value = ''; 
            pounds.value = ''; 
            kg.innerHTML = 0
        }, 10000);
    }
}

pounds.addEventListener("input", updateweight);
