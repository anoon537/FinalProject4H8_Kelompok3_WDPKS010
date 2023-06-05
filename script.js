function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = time;

  // Memperbarui jam setiap detik
  setTimeout(updateClock, 1000);
}

updateClock();

document.getElementById("search-btn").addEventListener("click", function () {
  const apiKey = "62fa7a157211f51ce88ba356908c5198";
  const city = document.getElementById("city-input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  document.getElementById("city-input").value = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      document.getElementById("kota").textContent = city;
      document.getElementById("temp").textContent = `${data.main.temp}°C`;
      document.getElementById("condition").textContent =
        data.weather[0].description;
      document.getElementById(
        "wind-speed"
      ).textContent = `${data.wind.speed} km/h`;
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
    });
});
