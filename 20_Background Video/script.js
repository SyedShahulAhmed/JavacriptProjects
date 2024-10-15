const video = document.querySelector('.bg-video');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.fa');

btn.addEventListener('click', () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    } else {
        btn.classList.add("pause");
        video.pause();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
});
