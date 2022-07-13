window.addEventListener('DOMContentLoaded', () => {
    const tempElement = document.querySelector('.tempature-degree')
    const descriptionElement = document.querySelector('.tempature-descrption')
    const formElement = document.querySelector('.form')
    const placeElement = document.querySelector('.place')
    const regionElement = document.querySelector('.region')
    const countryElement = document.querySelector('.country')
    const tempSpan = document.querySelector('.degree-section span')
    const todayButton = document.querySelector('.todayButton')
    const forcastButton = document.querySelector('.forcastButton')



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
                placeElement.textContent = weatherObj['location']['name']
                regionElement.textContent = weatherObj['location']['region']
                countryElement.textContent = weatherObj['location']['country']
                
                tempElement.addEventListener('click', () => {
                    if (tempSpan.textContent === 'F') {
                        tempSpan.textContent = 'C'
                        tempElement.textContent = weatherObj['current']['temp_c']
                    } else {
                        tempSpan.textContent = 'F'
                        tempElement.textContent = weatherObj['current']['temp_f']
            
                    }
                })
                
                showForcast(weatherObj)
            })
    }


    function showForcast(weatherObj) {
        
        weatherObj.forecastday.forEach(day => {
            const dayDiv = day.date
        })
    }
})

