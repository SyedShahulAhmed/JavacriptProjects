const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".container");

let currentImg = 0;
let timeout;
function updateImg() {
    if (currentImg >= imgsEl.length) {
        currentImg = 0;
    } else if (currentImg < 0) {
        currentImg = imgsEl.length - 1;
    }
    imageContainerEl.style.transform = `translateX(-${currentImg * 700}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 5000);
}
nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();
