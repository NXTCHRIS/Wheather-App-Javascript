
addEventListener("DOMContentLoaded", function(){

    // setting up API Key and targeting DOM elements
    const apiKey = "API KEY HERE";
    const mainBtn = document.querySelector(".main-btn");
    const inputBox = document.getElementById("input-box")
    const error = document.querySelector(".error-text")
    // making the API call as per OPENWHEATERAPI DOC
    async function checkWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        var data = await response.json()
        // HANDLING ERRORS
        if(data.message === 'city not found') {
            error.style.display = "block"
        } else {
            error.style.display= "none"
        }
        // DISPLAY WHEATHER DATA IF API CALL SUCCESFUL
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C"
        document.querySelector(".percentages").innerHTML= data.main.humidity + "%"
        document.querySelector(".kmperhour").innerHTML=data.wind.speed
    }
    
    // listening when the user clicks on search btn 
    mainBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    })
})


