// console.log(typeof(function))

const countryCode = "pk";
const unit = "metric";
const appId = "";

// const city="Lahore"
let input = document.querySelector("#locationinput");
// const cityEle =document.getElementById("city");

const search = document.querySelector("#search");
search.addEventListener("click", () => {
  if (search === "") {
    return;
  }

  const APIKEY = "8fc39c8c9f8d64a0e4c6a57d68ba1caa";
  const cityName = document.querySelector("#city");
  const city = input.value;
  //  city.innerHTML=input.value
  // city=input.value
  // city=cityEle.value
  // console.log(city)
  const hum = document.querySelector(".hum");
  const tum_img = document.querySelector("#tum-img");
  const hum_img = document.querySelector("#hum-img");
  const hum_p = document.querySelector(".hum-p");
  const tum_p = document.querySelector(".tum-p");
  const tum = document.querySelector(".tum");
  // https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}
  const image = document.querySelector(".weather_box img");
  const temperature = document.getElementById("temperature");
  const weatherEle = document.getElementById("description");
  const span = document.querySelector(".span");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${APIKEY}`
  )
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      const { main, weather, wind } = data;

      switch (data.weather[0].main) {
        case "Clear":
          if (search !== city) {
            image.src = "./not-found.png";
          }
          image.src = "./clear.png";
          break;
        case "Rain":
          image.src = "./rain.png";
          break;
        case "Snow":
          image.src = "./snow.png";
          break;
        case "Clouds":
          image.src = "./cloud.png";
          break;
        case "Haze":
          image.src = "./mist.png";
          break;
        case "Smoke":
          image.src = "./smoke.png";
          break;
        case "Mist":
          image.src = "./blizzard.png";
          break;
        default:
          image.src = "";
          break;
      }
      console.log(temperature);
      temperature.innerHTML = Math.round(main.temp);
      span.style.display = "block";
      weatherEle.innerHTML = weather[0].description;
      hum.innerHTML = main.humidity;
      hum_p.style.display = "block";
      hum_img.style.display = "block";
      tum.innerHTML = wind.speed;
      tum_p.style.display = "block";
      tum_img.style.display = "block";
      console.log(weatherEle);
      console.log(temperature);
      // console.log(weatherEle)
      // console.log(weatherEle)
      // max.innerHTML =main.temp_max;
      // min.innerHTML =main.temp_min;
    })
    .catch((err) => {
      console.log(err);
    });
});
