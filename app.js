const apikey="54671572ff3aea59f5d4f4df33349e50";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let inp=document.querySelector("input");
    let city=inp.value;
    checkweather(city);

});

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    let data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    
    if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src="./asetes/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src="./asetes/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src="./asetes/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector(".weather-icon").src="./asetes/snow.png";
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".weather-icon").src="./asetes/mist.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather-icon").src="./asetes/drizzle.png";
    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector(".weather-icon").src="asetes/haze.png";
    }

}

