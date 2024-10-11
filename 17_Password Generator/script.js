const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const copy = document.querySelector('.fa-copy')
const msg = document.querySelector('.alert-container')

btn.addEventListener('click',createpassword)

copy.addEventListener('click',()=>{
    copypassword();
    if(input.value){
        msg.classList.remove("active")
        setTimeout(()=>{
            msg.classList.add("active")
        },3000)
    }
});

function createpassword(){
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  input.value = password;
  msg.innerText = password + " copied!";
}

function copypassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
  }