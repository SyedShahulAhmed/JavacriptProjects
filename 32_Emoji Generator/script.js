const tap = document.querySelector('.Tap');
const nameEl = document.querySelector('.ename');
const emoji = [];

const apiUrl = `Your API Here`

function genemoji() {


    fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const numberOfEmojis = Math.min(1500, data.length);
        for (let i = 0; i < numberOfEmojis; i++) {
            emoji.push({
                ename: data[i].character,
                ecode: data[i].unicodename
            });
        }
    })
    .catch(error => {
        console.error("Error fetching emoji data:", error);
    });
}

genemoji();

tap.addEventListener("click", () => {
    const randemo = Math.floor(Math.random() * emoji.length);
    tap.innerHTML = emoji[randemo].ename;
    nameEl.innerHTML = emoji[randemo].ecode;
});
