window.addEventListener('DOMContentLoaded', () => {
    renderWeather('London')
    const degreeElement = document.querySelector(".tempature-degree")
    const tElement = document.querySelector(".tempature-description")

    
    function renderWeather (loc) {
        fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
            .then(resp => resp.json())
            .then(console.log)

    }

    
    
})


