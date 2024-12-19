
let search=document.getElementById('search');
let weatherData = {};
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
 async function getdata(country='egypt'){
    let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=17112855b8fc4840aeb131832241812&q=${country}&days=3`).catch(function(error){
        console.log(error)
        });
     weatherData = await req.json();
     console.log(weatherData)


    display();


}
search.addEventListener("keyup",function(){
    let country = search.value
    console.log(country)
    getdata(country);
});
getdata();
function display(){
    let date1 =new Date(weatherData.forecast.forecastday[0].date);
    let date2 =new Date(weatherData.forecast.forecastday[1].date);
    let date3 =new Date(weatherData.forecast.forecastday[2].date);
   
    let day1 = days[ date1.getDay() ];
    let month1 = months[ date1.getMonth() ];
    let day2 = days[ date2.getDay() ];
    let day3 = days[ date3.getDay() ];
  
 

   let temp=`<div class="col-lg-4 ">
                                <div class="today-weather  light-dark  text-start">
                                    <div class="dateItem">
                                        <div class="row  p-2">
                                            <div class="col-8">${day1}</div>
                                            <div class="col-4 text-end">${date1.getDate()} ${month1}</div>
                                        </div>
                                    </div>
                                    <div class="row p-2">
    
                                        <p class="ms-4 mt-4 fs-5">${weatherData.location.name}</p>
                                        <h2>${weatherData.current.temp_c}c</h2>
                                        <div class="img">
                                            <img src="https:${weatherData.current.condition.icon}">
                                        </div>
    
                                        <p class="text-primary ms-2">${weatherData.current.condition.text}</p>
                                        <div class="flex">
                                            <span class="pe-3"><img src="images/icon-umberella.png" alt=""> ${weatherData.current.humidity}%</span>
                                            <span class="pe-3"><img src="images/icon-wind.png" alt=""> ${weatherData.current.wind_kph}km/h</span>
                                            <span class="pe-3"><img src="images/icon-compass.png" alt=""> East</span>
    
                                        </div>
    
    
                                    </div>
    
                                </div>
                            </div>
                            <div class="col-lg-4 light-dark2">
                                <div class="forecast-weather      text-center"> 
                                        <div class="p-2 bg-dark">
                                            ${day2}
                                        </div>
                                    <div class="row py-5">
                                      
                                        <div class="img">
                                            <img src="https:${weatherData.forecast.forecastday[1].day.condition.icon}">
                                        </div>
                                        <h4 class="text-white mt-3">${weatherData.forecast.forecastday[1].day.maxtemp_c}c</h4>
                                        <h6 class="mb-3">${weatherData.forecast.forecastday[1].day.mintemp_c}</h6>
                                       
                                        <p class="text-primary ms-2">${weatherData.forecast.forecastday[1].day.condition.text}</p>
                                      
    
    
                                    </div>
    
                                </div>
                            </div>
                            <div class="col-lg-4 light-dark ">
                                <div class="forecast-weather  light-dark align-self-stretch  text-center"> 
                                        <div class="p-2 dateItem">
                                            ${day3}
                                        </div>
                                    <div class="row py-5 ">
                                      
                                        <div class="img">
                                            <img src="https:${weatherData.forecast.forecastday[2].day.condition.icon}">
                                        </div>
                                        <h4 class="text-white mt-3">${weatherData.forecast.forecastday[2].day.maxtemp_c}c</h4>
                                        <h6 class="mb-3">${weatherData.forecast.forecastday[2].day.mintemp_c}</h6>
                                       
                                        <p class="text-primary ms-2">${weatherData.forecast.forecastday[2].day.condition.text}</p>
                                      
    
    
                                    </div>
    
                                </div>
                            </div>`
                            document.querySelector('#myRow').innerHTML=temp;
                            
}
// fetch('https://api.weatherapi.com/v1/forecast.json?key=17112855b8fc4840aeb131832241812&q=egypt&days=3').then(function(data){
// data.json().then(function(weatherList){
// console.log(weatherList.current.temp_c);

// })
// }).catch(function(error){
// console.log(error)
// })


// }