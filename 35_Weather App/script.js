const inpEl = document.querySelector("#city");
const btn = document.querySelector(".search");
const Img = document.querySelector(".icon");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const form = document.querySelector("form");
const detail = document.querySelector(".details");

const key = "Your Api Key";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});

function getWeather() {
  const city = inpEl.value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        alert("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const temperature = Math.round(data.current.temp_c);
      const description = data.current.condition.text;
      const icon = data.current.condition.icon;

      const details = [
        `Feels like: ${Math.round(data.current.feelslike_c)}°C`,
        `Humidity: ${data.current.humidity}%`,
        `Wind speed: ${data.current.wind_kph} kph`,
      ];
      Img.innerHTML = `<img src="${icon}" alt="WeatherImage">`;
      temp.innerHTML = `${temperature}°C`;
      desc.innerHTML = description;

      detail.innerHTML = details
        .map((detail) => `<div>${detail}</div>`)
        .join("");
    })
    .catch((error) => {
      console.error(error);
    });
}
