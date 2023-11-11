//weather api..
function weather(){
const api ="https://api.openweathermap.org/data/2.5/weather?q=Palia&units=metric&appid=a5d9781f30d813a1295f5385f15e4be4";
return fetch(api)
  .then(response => response.json())
  .then(data => {
   var tempMin = data.main.temp_min;
   const pressure = data.main.pressure;
   const humidity = data.main.humidity;
   return tempMin;
    });
}
//to use it
//weather().then(x=> {});

//morning, night....
const currentHour = new Date().getHours();
function getTimeOfDay(currentHour) {
  if (currentHour >= 6 && currentHour < 12) {
    return "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
}



function leave(){
window.close();
}
