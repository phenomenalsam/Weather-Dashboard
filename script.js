async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "f9ffcaa6d9a4da675b90a423438530ea";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${f9ffcaa6d9a4da675b90a423438530ea
}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML =`
      <p><strong>${data.name}</strong></p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = <p>City not found.</p>;
  }
}