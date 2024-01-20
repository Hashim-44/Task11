
var city = document.getElementById("search");



async function getCw(cap) {
    var myApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=93824416015f4b75901210944241301&q=${cap}&days=3`)
let fmyApi = await myApi.json()
data = fmyApi.forecast.forecastday 
data2 = fmyApi.location
data3 = fmyApi.current.condition
data4 = fmyApi.forecast.forecastday[0].day
data5 = fmyApi.forecast.forecastday[1].day.condition
data6 = fmyApi.forecast.forecastday[1].day
data7 = fmyApi.forecast.forecastday[2].day.condition
data8  = fmyApi.forecast.forecastday[2].day
// console.log(data2);
// console.log(data);
// console.log(fmyApi);
display()
}

getCw('ghaza')


let data2=[]

let data = []

let data3 = []
let data4 =[]

let data5 =[]
let data6 =[]
let data7 =[]
let data8 =[]




function display() {
   
 
  function getCDay( date = new Date(), locale = "en-US" ){
    return date.toLocaleDateString(locale, { weekday: "long"});
    }
    
    currentDay1 = getCDay(new Date (data[0].date));
    currentDay2 = getCDay(new Date (data[1].date));
    currentDay3 = getCDay(new Date (data[2].date));
    console.log(`${currentDay2}` );

       let cols = `
        <div class="item-1 col-md-4">
        <div class="d-flex i-head justify-content-between">
         
          <div class="day"><p>${currentDay1}</p></div>
          <div class="day"><p>${data[0].date}</p></div>
        </div>
        <div class="mt-4">
          <p class="fs-3">${data2.name}</p>
        </div>
        <div class="d-flex justify-content-evenly">
          <div class="number"><h2>${data4.maxtemp_c}<sup>o</sup>c</h2></div>
          <div><img src="${data3.icon}" alt="" width="90px"></div>
        </div>
        <div class="text"><p class="main-color">${data3.text}</p></div>
        <div class="d-flex p-2">
          <div class="p-2">
            <img src="images/icon-umberella.png" alt="">
            <span>20%</span>
          </div>
          <div class="p-2">
            <img src="images/icon-wind.png" alt="">
            <span>18km/h</span>
          </div>
          <div class="p-2">
            <img src="images/icon-compass.png" alt="">
            <span>East</span>
          </div>
        </div>
      </div>



      <div class="item-2 col-md-4 text-center">
        <div>
          <p>${currentDay2}</p>
        </div>
        <div>
          <div>
            <img src="${data5.icon}" alt="">
          </div>
          <div>
            <p>${data6.maxtemp_c}<sup>o</sup>C</p>
            <p><small>${data6.mintemp_c}<sup>o</sup></small></p>
          </div>
          <div class="text">
            <p class="main-color">${data5.text}</p>
          </div>
        </div>
      </div>



      <div class="item-3 col-md-4 text-center">
        <div>
          <p>${currentDay3}</p>
        </div>
        <div>
          <div>
            <img src="${data7.icon}" alt="">
          </div>
          <div>
            <p>${data8.maxtemp_c}<sup>o</sup>C</p>
            <p><small>${data8.mintemp_c}<sup>o</sup></small></p>
          </div>
          <div class="text">
            <p class="main-color">${data7.text}</p>
          </div>
        </div>
      </div>
        `




    document.getElementById('myData').innerHTML= cols
}

function searchc(){
let myc=  city.value;
getCw(myc)
}

city.addEventListener('input' , function(){
  searchc()
})


