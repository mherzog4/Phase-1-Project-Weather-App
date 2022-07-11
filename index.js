
fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=5&aqi=no&alerts=no`)
    .then(resp => resp.json())
    .then(console.log)