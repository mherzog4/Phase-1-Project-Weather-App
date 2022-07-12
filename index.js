window.addEventListener('DOMContentLoaded', () => {
    renderWeather('London')
})

const degreeElement = document.querySelector(".tempature-degree")
const descriptionElement = document.querySelector(".tempature-description")
const formElement = document.querySelector(".form")

function renderWeather (loc) {
    fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
        .then(resp => resp.json())
        .then(weatherObj => {
            degreeElement = weatherObj.current.temp_f
        })
}

formElement.addEventListener("submit", (e) => {
    
})