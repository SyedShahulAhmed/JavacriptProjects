const form = document.querySelector("form");
const searchip = document.querySelector("#img");
const searchres = document.querySelector(".flexwrap");
const more = document.querySelector(".more");

const key = "Your Access Key";
let page = 1;

function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function Searchimg() {
  const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${searchip.value}&client_id=${key}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (page === 1) {
        searchres.innerHTML = "";
      }
      const result = data.results;
      result.forEach((item) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("result");
        const image = document.createElement("img");
        image.src = item.urls.small;
        image.alt = item.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = item.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = capitalize(item.alt_description);
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchres.appendChild(imageWrapper);
      });

      more.style.display = result.length ? "block" : "none";
      more.style.marginTop = "10px";
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });

  page++;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 0;
  Searchimg();
});

more.addEventListener("click", () => {
  Searchimg();
});
