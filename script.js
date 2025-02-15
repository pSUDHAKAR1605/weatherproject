const apiKey = "API_KEY"; // Replace with your own API key
const getWeatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                weatherDisplay.classList.remove("hidden");
            })
            .catch(error => {
                alert("Error fetching weather data. Please try again.");
                console.error(error);
            });
    } else {
        alert("Please enter a city name!");
    }
});
