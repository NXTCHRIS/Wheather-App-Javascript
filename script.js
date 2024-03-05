
addEventListener("DOMContentLoaded", function(){


    const apiKey = "ae55ac2c89cff7621cb848a61b1e6e66";
    const mainBtn = document.querySelector(".main-btn");
    const inputBox = document.getElementById("input-box")


    async function checkWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        var data = await response.json()
    
        console.log(data)
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C"
        document.querySelector(".percentages").innerHTML= data.main.humidity + "%"
        document.querySelector(".kmperhour").innerHTML=data.wind.speed
    }
    
    mainBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    })


})


