
const API_KEY = "fd8208ddc59a08a40ec0644a435e1739";
function onGeo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weather = "";
    console.log(lat + " " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });

}

function onGeoErr() {
    alert("Can't find you. No Whether for you");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);