
// async function fetchAsyncForecast(id) {
//     const url = `${baseUrl1}forecast?id=${id}&appid=${apiWeather}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (e) {
//         console.log(e);
//     }
// }


let baseUrl1 = "http://api.openweathermap.org/data/2.5/";
let apiWeather = "f68af541e25953c2db8d624ee5d7b1b9";



async function fetchAsyncWeather(city) {
    const url = `${baseUrl1}weather?q=${city}&appid=${apiWeather}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        render(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}
function render(data) {
    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    const sunriseTime = `${sunrise.getHours()}:${("0" + sunrise.getMinutes()).slice(-2)}`;
    const sunsetTime = `${sunset.getHours()}:${("0" + sunset.getMinutes()).slice(-2)}`;

    const weatherCart = document.querySelector("#weatherInfo");
    weatherCart.innerHTML = `
        <h2>${data.name}</h2>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" >
        <p>Coordinates: Latitude ${data.coord.lat}, Longitude ${data.coord.lon}</p>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Sunrise: ${sunriseTime}</p>
        <p>Sunset: ${sunsetTime}</p>
    `;
}

function submitCity() {
   
    const city = document.querySelector("#cityInput").value;
    if (city) {
        fetchAsyncWeather(city);
    } else {
        alert("Please enter a city name.");
    }
}

fetchAsyncWeather()

// export const returnNameByIndex = (countryIndex) => {
//     switch (countryIndex) {
//       case 'IT':
//         return 'Italy'
//         break
//       case 'GE':
//         return 'Germany'
//     }
//   }