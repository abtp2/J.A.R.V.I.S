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
var now = new Date(), 
    hour = now.getHours();
var shift = " "; 
shift += (hour >= 4 && hour <= 11) ? "morning" : "",
shift += (hour >= 12 && hour <= 16) ? "afternoon" : "",
shift += (hour >= 17 && hour <= 20) ? "evening" : "", shift += (hour >= 21 || hour <= 3) ? "night" : "";



function remember(x){
var y = localStorage.getItem("memory");
var list = [];
if(y){
list = [y];
}
list.push(x);
localStorage.setItem("memory", list);
}

function showMemory(){
var y = localStorage.getItem("memory");
var memories = document.getElementById("memories");
if(y){
var list = y.split(",");
for (i=0;i<list.length;i++){
memories.innerHTML +=`<p>${i+1}. ${list[i]}</p>`;
}
}}

function clearMemory(){
localStorage.setItem("memory","");
showMemory();
}




const Toast = Swal.mixin({ 
toast: true, 
position: "top-end", 
showConfirmButton: false, 
timer: 3000, 
timerProgressBar: true, 
didOpen: (toast) => { 
toast.onmouseenter = Swal.stopTimer; toast.onmouseleave = Swal.resumeTimer; 
}});

function toggleMotionSwitch(element){
element.classList.toggle('on');
var switchStatus = element.classList.contains('on'); 
if (switchStatus){
Toast.fire({
icon: "success", 
title: "Starting in 3 seconds" 
});
setTimeout(function(){OnDetection()}, 3000);
}
else{
OffDetection();
}}













