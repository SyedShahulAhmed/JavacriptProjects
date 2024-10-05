const billcal = document.querySelector('#result')
const billamount = document.querySelector('#bill')
const tipamount = document.querySelector('#tip')
const totalamount = document.querySelector('span')

billcal.addEventListener('click',Totaltip)

function Totaltip(){
    const total = billamount.value * (1 + tipamount.value / 100);
    totalamount.innerHTML= `Tip = ${total.toFixed(2)}`;
}
