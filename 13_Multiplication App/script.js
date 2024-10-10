const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const prob = document.querySelector('.problem');
const inputel = document.querySelector('#question');
const formel = document.querySelector('.form');  // Use the form, not result button
const scoreEl = document.querySelector('.score');

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}
scoreEl.innerHTML = `${score}`;

prob.innerHTML = `What is ${num1} Multiply by ${num2}?`;

const answer = num1 * num2;

formel.addEventListener("submit", () => {
    const userans = +inputel.value;  // Convert string to number using `+`
    if (userans === answer) {
        score++;
    } else {
        score--;
    }
    updateLocalStorage();
    inputel.value = '';  // Clear the input field
    scoreEl.innerHTML = `${score}`;  // Update score display
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
