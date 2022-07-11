window.addEventListener('DOMContentLoaded', () => {
    let loc = 'London'
    renderWeather()
    const tempElement = document.querySelector()
    const iconElement = document.querySelector()
    const locationElement = document.querySelector()
    const tElement = document.querySelector()

    function renderWeather () {
        fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
        .then(resp => resp.json())
        .then(console.log)

    }
    
})

