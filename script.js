const API_KEY = "45c73bcd5dfaf9e8576f395cfb7252fd";

async function getWeather(){

const city =
document.getElementById("city").value;

if(city === ""){
return;
}

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

try{

const response =
await fetch(url);

const data =
await response.json();

if(data.cod !== 200){

document.getElementById("weather").innerHTML =
`
<h2>Город не найден</h2>
`;

return;
}

document.getElementById("weather").innerHTML =

`
<h2>${data.name}</h2>

<img
class="weather-icon"
src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

<div class="temp">
${Math.round(data.main.temp)}°C
</div>

<p>
${data.weather[0].description}
</p>

<div class="info">

<div>
💧<br>
${data.main.humidity}%<br>
Влажность
</div>

<div>
💨<br>
${data.wind.speed} м/с<br>
Ветер
</div>

<div>
🌡<br>
${data.main.feels_like}°C<br>
Ощущается
</div>

<div>
📊<br>
${data.main.pressure} гПа<br>
Давление
</div>

</div>
`;

}
catch(error){

document.getElementById("weather").innerHTML =
`
<h2>Ошибка соединения</h2>
`;

}

}