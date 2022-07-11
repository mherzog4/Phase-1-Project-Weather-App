let location = 'London'

function renderWeather () {
    fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=5&aqi=no&alerts=no1`)
        .then(resp => resp.json())
        .then(console.log)
}
