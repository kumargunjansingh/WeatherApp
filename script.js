const inputBox = document.querySelector('.input_box');
const searchBtn = document.getElementById('searchBtn');  
const weather_img = document.querySelector('.weather_img');   
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description'); 
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed') ;
const location_not_found = document.querySelector('.location_not_found');
const weather_body = document.querySelector('.weather_body');  
async function checkWeather(city)                                                                            
{ 
   const api_key ="128fa806702b2f7916f22a5ac1d8f926"; 
   const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;                  
  const weather_data = await fetch(`${url}`).then(response => response.json());
     if(weather_data.cod === `404`)
     { 
        location_not_found.style.display = "flex";  
        weather_body.style.display = "none";
        console.log("error");
        return;
     } 
     console.log("run");   
     location_not_found.style.display = "none";
     weather_body.style.display = "flex";
     temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;

     description.innerHTML = `${weather_data.weather[0].description}`;

     humidity.innerHTML = `${weather_data.main.humidity}%`;
     wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;
       switch(weather_data.weather[0].main)
       { 
         case 'clouds':  
         weather_img.scr = "/photos/cloud.png";
         break;
         case 'clear':  
         weather_img.scr = "/photos/clear.png";
         break;
         case 'Rain':  
         weather_img.scr ="/photos/rain.png";
         break;
         case 'Mist':  
         weather_img.scr = "/photos/mist.png";
         break;
         case 'Snow':  
         weather_img.scr = "/photos/snow.png";
         break;
       }                                              
     console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});        