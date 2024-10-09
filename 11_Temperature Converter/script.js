const c = document.querySelector('#cel')
const f = document.querySelector('#Faren')
const k = document.querySelector('#kel')

function caltemp(event) {
    const currentValue = +event.target.value;
    switch (event.target.name) {
        case "celsius":
            k.value = (currentValue + 273.32).toFixed(2);
            f.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            c.value = ((currentValue - 32) / 1.8).toFixed(2);
            k.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            c.value = (currentValue - 273.32).toFixed(2);
            f.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}