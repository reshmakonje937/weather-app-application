const apiKey = "PASTE_YOUR_REAL_API_KEY_HERE";

function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            // ❗ Handle invalid city or API issues
            if (data.cod !== 200) {
                alert("City not found. Try another city.");
                return;
            }

            document.getElementById("location").innerText =
                "City: " + data.name + ", " + data.sys.country;

            document.getElementById("temperature").innerText =
                "Temperature: " + data.main.temp + " °C";

            document.getElementById("condition").innerText =
                "Condition: " + data.weather[0].description;

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";
        })
        .catch(error => {
            alert("Network error. Try again later.");
        });
}