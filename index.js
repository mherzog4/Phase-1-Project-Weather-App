window.addEventListener('DOMContentLoaded', () => {
    const tempElement = document.querySelector('.tempature-degree')
    const descriptionElement = document.querySelector('.tempature-descrption')
    const formElement = document.querySelector('.form')
    const placeElement = document.querySelector('.place')
    const regionElement = document.querySelector('.region')
    const countryElement = document.querySelector('.country')
    const todayButton = document.querySelector('.todayButton')
    const forecastButton = document.querySelector('.forecastButton')
    const forecastDiv = document.querySelector('.forecast')
    const todayElement = document.querySelector('.today')

    let temp_c
    let temp_f 

    formElement.addEventListener("submit", (e) => {
        e.preventDefault()
        renderWeather(e.target.submitField.value)
        e.target.submitField.value = ''
        forecastDiv.style.display = 'none'
        todayElement.style.display = 'block'
        todayButton.style.visibility = 'visible'
        forecastButton.style.visibility = 'visible'
    })

    tempElement.addEventListener('click', () => {
        if (tempElement.textContent == temp_f + ' °F') {
            tempElement.textContent = temp_c + ' °C'
        } else {
            tempElement.textContent = temp_f + ' °F'
        }
    })

    function renderWeather (loc) {
        fetch (`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=5&aqi=no&alerts=no1`)
            .then(resp => resp.json())
            .then(weatherObj => {
                temp_c = weatherObj['current']['temp_c']
                temp_f = weatherObj['current']['temp_f']
                tempElement.textContent = weatherObj['current']['temp_f'] + ' °F'
                descriptionElement.textContent = weatherObj['current']['condition']['text']
                placeElement.textContent = weatherObj['location']['name']
                regionElement.textContent = weatherObj['location']['region']
                countryElement.textContent = weatherObj['location']['country']
                createForcast(weatherObj)
            })
    }


    function createForcast(weatherObj) {
        forecastDiv.innerHTML = ''
        weatherObj.forecast.forecastday.forEach(day => {
            const dayDiv = document.createElement('div')
            const dateText = document.createElement('h3')
            const avgTemp = document.createElement('p')
            const avgTemp_c = day.day.avgtemp_c + ' °C'
            const avgTemp_f = day.day.avgtemp_f + ' °F'

            dateText.textContent = day.date
            dayDiv.append(dateText)
            avgTemp.textContent = avgTemp_f
            avgTemp.addEventListener('click', () => {
                if (avgTemp.textContent == avgTemp_c) {
                    avgTemp.textContent = avgTemp_f
                } else {
                    avgTemp.textContent = avgTemp_c
                }
            })
            dayDiv.append(avgTemp)
            forecastDiv.append(dayDiv)
        })
        
    }

    forecastButton.addEventListener('click', () => {
        todayElement.style.display = 'none'
        forecastDiv.style.display = 'block'
    })

    todayButton.addEventListener('click', () => {
        todayElement.style.display = 'block'
        forecastDiv.style.display = 'none'
    })
})

