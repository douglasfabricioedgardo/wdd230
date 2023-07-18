

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.650770, lng:  -86.012248 },
    zoom: 10,
  });
  const marker = new google.maps.Marker({
    position: { lat: 15.650770, lng:  -86.012248 },
    map: map,
    title: "Tocoa",
  });
}

function updateWeatherDisplay(data) {
  const weatherDisplay = document.getElementById("weather-display");
  weatherDisplay.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <div class="weather-description">${data.weather[0].description}</div>
    <div class="temperature">${Math.round(data.main.temp)} &deg;F</div>
    <div class="feels-like">Feels like ${Math.round(
    data.main.feels_like
  )} &deg;F</div>
    <div class="humidity">Humidity: ${data.main.humidity}%</div>
  `;
}

fetchCurrentWeather();
