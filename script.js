const search = document.querySelector(".input");
const btn = document.getElementById("btn");
const temp = document.getElementById("temp");
const humi = document.getElementById("humi");
const wind = document.getElementById("wind");
const description = document.getElementById("description");
const weather_img = document.querySelector(".weather-img");
const error=document.querySelector(".error");
const none=document.querySelector(".none");


async function cheakweather(city) {
    const apikey = '8ea8a06b7acab684884e96a41fb60a23';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

    const weather_data = await fetch(url + city + '&appid=8ea8a06b7acab684884e96a41fb60a23');
    var data = await weather_data.json();

    if(data.cod==='404'){
        error.style.display="flex";
        none.style.display="none";
        console.log("error");
        return;
    }
    error.style.display="none";
    none.style.display="flex";

    temp.innerHTML = Math.round(data.main.temp - 273.15) + ' °C';
    humi.innerHTML = data.main.humidity + ' %';
    wind.innerHTML = data.wind.speed + ' Km/h';
    description.innerHTML = data.weather[0].main;

    switch (data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "img/could.png";
            break;
        case 'Clear':
            weather_img.src = "img/w1.png";
            break;
        case 'Rain':
            weather_img.src = "img/rain.png";
            break;
        case 'Mist':
            weather_img.src = "img/cold.png";
            break;
        case 'Snow':
            weather_img.src = "img/images.png";
            break;
    }

    console.log(data.main.temp);
}

btn.addEventListener('click', () => {
    console.log(search.value);
    cheakweather(search.value);
});
