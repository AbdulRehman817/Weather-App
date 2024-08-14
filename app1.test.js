// Select DOM elements
const searchButton = document.querySelector("#search");
const inputField = document.querySelector("#input");
const temperatureElement = document.querySelector("#temp");
const weatherElement = document.querySelector("#weather");
const maxTemperatureElement = document.querySelector("#max");
const minTemperatureElement = document.querySelector("#min");
const cityElement = document.querySelector("#city");

// Event listener for search button click
searchButton.addEventListener("click", async () => {
  try {
    // Fetch weather data
    const weatherData = await fetchWeatherData(inputField.value);

    // Update UI elements with weather data
    updateUI(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

// Fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
  const API_KEY = "8fc39c8c9f8d64a0e4c6a57d68ba1caa";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

// Update UI elements with weather data
function updateUI(weatherData) {
  const { name, main, weather } = weatherData;

  cityElement.innerHTML = name;
  temperatureElement.innerHTML = main.temp;
  weatherElement.innerHTML = weather[0].description;
  maxTemperatureElement.innerHTML = main.temp_max;
  minTemperatureElement.innerHTML = main.temp_min;
}
