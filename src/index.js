function displayTemperature(response) {
console.log(response.data);
let temperatureElement = document.querySelector("#temperature")
temperatureElement.innerHTML = Math.round(response.data.main.temp);
let cityElement = document.querySelector("#city")
cityElement.innerHTML = response.data.name;
let descriptionElement = document.querySelector("#description")
descriptionElement.innerHTML = response.data.weather[0].description;
let humidityElement = document.querySelector("#humidity")
humidityElement.innerHTML = response.data.main.humidity;
let windElement = document.querySelector("#wind")
windElement.innerHTML = Math.round(response.data.wind.speed); 
}

let apiKey = "bd61a16d03e69c4265d6aac8396e35c8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
console.log(apiUrl)
axios.get(apiUrl).then(displayTemperature);