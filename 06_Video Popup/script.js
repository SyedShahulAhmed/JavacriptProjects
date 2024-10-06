
const watch = document.querySelector('#watch');
const closebtn = document.querySelector('.close-icon');
const trailer = document.querySelector('.gtavideo');
const video = document.querySelector('#vid');

watch.addEventListener('click', () => {
    trailer.classList.add("act");
    video.play();
});

closebtn.addEventListener('click', () => {
    trailer.classList.remove("act");
    video.pause();
    video.currentTime = 0; 
});
