const currentTemp = document.querySelector("#current-temp");
const captionDesc = document.querySelector("#caption-desc");
const forecastDays = document.querySelector(".weather-card__forecast-days");

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=managua&units=metric&appid=eb62be483b069ca0c752ef1f2c028508';
const forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?id=3600704&appid=eb62be483b069ca0c752ef1f2c028508";
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayWeather() {
  const [weatherData, forecastData] = await Promise.all([
    apiFetch(weatherUrl),
    apiFetch(forecastUrl),
  ]);
  displayCurrent(weatherData);
  displayForecast(forecastData);
}

function displayCurrent(weatherData) {
  currentTemp.innerHTML = `<strong>${Math.round(weatherData.main.temp)}&deg;C</strong>`;
  const description = weatherData.weather[0].description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  captionDesc.textContent = description;

  // Create the image element
  const iconImg = document.createElement("img");

  // Set the src and alt attributes
  iconImg.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  );
  iconImg.setAttribute(
    "alt",
    `This is an icon image of ${weatherData.weather[0].description}`
  );

  // Append the image to the weatherIcon element
  currentTemp.parentNode.insertBefore(iconImg, currentTemp.nextSibling);
}

function displayForecast(forecastData) {
  const forecastDaysHtml = forecastData.list
    .filter((data, index) => index % 8 === 0)
    .map((day) => {
      const dayOfWeek = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" });
      const minTemp = Math.round(day.main.temp_min)/10;
      const maxTemp = Math.round(day.main.temp_max)/10;
      return `<div class="weather-card__forecast-day">
                <div>${dayOfWeek}</div>
                <div>${minTemp}&deg;C / ${maxTemp}&deg;C</div>
              </div>`;
    })
    .join("");
  forecastDays.innerHTML = forecastDaysHtml;
}

displayWeather();