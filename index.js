window.addEventListener('DOMContentLoaded', () => {
    const tempElement = document.querySelector('.tempature-degree')
    const descriptionElement = document.querySelector('.tempature-descrption')
    const formElement = document.querySelector('.form')
    const locationElement = document.querySelector('.location-timezone')
    const tempSpan = document.querySelector('.tempature span')

    formElement.addEventListener("submit", (e) => {
        e.preventDefault()
        renderWeather(e.target.submitField.value)
        e.target.submitField.value = ''
    })

    

    renderWeather('London')
    
    function renderWeather (loc) {
        fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
            .then(resp => resp.json())
            .then(weatherObj => {
                tempElement.textContent = weatherObj['current']['temp_f']
                descriptionElement.textContent = weatherObj['current']['condition']['text']
                locationElement.textContent = weatherObj['location']['name'] + ', ' + weatherObj['location']['region'] + ', ' + weatherObj['location']['country']
                
                tempElement.addEventListener('click', () => {
                    console.log(tempSpan)
                    if (tempSpan.textContent === 'F') {
                        tempSpan.textContent = 'C'
                        tempElement.textContent = weatherObj['current']['temp_c']
                    } else {
                        tempSpan.textContent = 'F'
                        tempElement.textContent = weatherObj['current']['temp_f']
            
                    }
                })
            })
    }
})

