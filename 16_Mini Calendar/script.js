const month = document.querySelector(".month")
const day = document.querySelector(".day")
const dateEl = document.querySelector(".date")
const year = document.querySelector(".year")

const date = new Date()

month.innerHTML =  date.toLocaleString("en", {
    month: "long",
});

day.innerHTML = date.toLocaleString("en",{
    weekday :"long",
});

dateEl.innerHTML = date.getDate()

year.innerHTML = date.getFullYear()