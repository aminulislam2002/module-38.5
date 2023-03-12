const API_KEY = "69e90a228077d717f3064516ad69f9ba";

const loadTemperatur = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperatur(data));
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

const displayTemperatur = (data) => {
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  //   console.log(data);
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("input-field");
  const city = searchField.value;
  // set city name
  const cityName = document.getElementById("city-name");
  cityName.innerText = city;
});

loadTemperatur("Dhaka");
