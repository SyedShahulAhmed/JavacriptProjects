const one = document.querySelector('#one');
const first = document.querySelector('#first');
const two = document.querySelector('#two');
const second = document.querySelector('#second');

updaterate();

function updaterate() {
    const apiUrl = `Your API Here/${one.value}`
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const rate = data.conversion_rates[two.value];
        second.value = (parseFloat(first.value) * rate).toFixed(2);
    })
    .catch(error => {
        console.error('Error fetching exchange rate:', error);
    });
}

one.addEventListener('change', updaterate);
two.addEventListener('change', updaterate);
first.addEventListener('input', updaterate);
