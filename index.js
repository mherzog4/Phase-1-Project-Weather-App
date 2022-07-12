window.addEventListener('DOMContentLoaded', () => {
    const degreeElement = document.querySelector('.tempature-degree')
    const descriptionElement = document.querySelector('.tempature-descrption')
    const formElement = document.querySelector('.form')
    const locationElement = document.querySelector(".location-timezone")
    
    formElement.addEventListener("submit", (e) => {
        e.preventDefault()
        renderWeather(e.target.submitField.value)
    })

    renderWeather('London')

    function renderWeather (loc) {
        fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
            .then(resp => resp.json())
            .then(weatherObj => {
                degreeElement.textContent = weatherObj['current']['temp_f']
                descriptionElement.textContent = weatherObj['current']['condition']['text']
                locationElement.textContent = weatherObj['location']['name'] + ', ' + weatherObj['location']['region'] + ', ' + weatherObj['location']['country']

            })
    }

    
})

