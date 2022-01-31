// WEATHER SECTION STARTS HERE
const weatherBlock = document.createElement('div');
center.appendChild(weatherBlock);
weatherBlock.id = 'weather-block';
weatherBlock.className = 'box columns';

// WEATHER BLOCK LOCATION
const locationCol = document.createElement('div');
locationCol.id = 'weather-location-col'
locationCol.className = 'column is-2';
weatherBlock.appendChild(locationCol)

const weatherBlockLocation = document.createElement('div');
weatherBlockLocation.id = 'weather-block-location'
weatherBlockLocation.className = 'box location-block';
locationCol.appendChild(weatherBlockLocation)
weatherBlockLocation.textContent="Location"

const weatherBlockCountry = document.createElement('div');
weatherBlockCountry.id = 'weather-block-country'
weatherBlockCountry.className = 'box location-block';
locationCol.appendChild(weatherBlockCountry)
weatherBlockCountry.textContent="Country"

// CURRENT WEATHER COL
const currentWeatherCol = document.createElement('div');
weatherBlock.appendChild(currentWeatherCol);
currentWeatherCol.id = "current-weather-col";
currentWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const currentWeatherDateDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherDateDiv);
currentWeatherDateDiv.id = "current-weather-date-div";
currentWeatherDateDiv.className = '  columns text-center weather-date';
currentWeatherDateDiv.textContent = "currentWeatherDateDiv has been created!";

const currentWeatherConditionDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherConditionDiv);
currentWeatherConditionDiv.id = "current-weather-condition-div";
currentWeatherConditionDiv.className = '  columns text-center weather-condition';
currentWeatherConditionDiv.textContent = "currentWeatherConditionDiv has been created!";

const currentWeatherIconDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherIconDiv);
currentWeatherIconDiv.id = "current-weather-icon-div";
currentWeatherIconDiv.className = '  columns text-center';
currentWeatherIconDiv.textContent = "currentWeatherIconDiv has been created!";

const currentWeatherTempDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherTempDiv);
currentWeatherTempDiv.id = "current-weather-temp-div";
currentWeatherTempDiv.className ='  columns text-center weather-temp';
currentWeatherTempDiv.textContent = "currentWeatherTempDiv has been created!";

// TOMORROW WEATHER COL
const twoWeatherCol = document.createElement('div');
weatherBlock.appendChild(twoWeatherCol);
twoWeatherCol.id = "two-weather-col";
twoWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const twoWeatherDateDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherDateDiv);
twoWeatherDateDiv.id = "two-weather-date-div";
twoWeatherDateDiv.className = '  columns text-center weather-date';
twoWeatherDateDiv.textContent = "twoWeatherDateDiv has been created!";

const twoWeatherConditionDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherConditionDiv);
twoWeatherConditionDiv.id = "two-weather-condition-div";
twoWeatherConditionDiv.className = '  columns text-center weather-condition';
twoWeatherConditionDiv.textContent = "twoWeatherConditionDiv has been created!";

const twoWeatherIconDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherIconDiv);
twoWeatherIconDiv.id = "two-weather-icon-div";
twoWeatherIconDiv.className = '  columns text-center';
twoWeatherIconDiv.textContent = "twoWeatherIconDiv has been created!";

const twoWeatherTempDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherTempDiv);
twoWeatherTempDiv.id = "two-weather-temp-div";
twoWeatherTempDiv.className ='  columns text-center weather-temp';
twoWeatherTempDiv.textContent = "twoWeatherTempDiv has been created!";

// DAY AFTER TOMORROW WEATHER COL
const threeWeatherCol = document.createElement('div');
weatherBlock.appendChild(threeWeatherCol);
threeWeatherCol.id = "three-weather-col";
threeWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const threeWeatherDateDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherDateDiv);
threeWeatherDateDiv.id = "three-weather-date-div";
threeWeatherDateDiv.className = 'columns text-center weather-date';
threeWeatherDateDiv.textContent = "threeWeatherDateDiv has been created!";

const threeWeatherConditionDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherConditionDiv);
threeWeatherConditionDiv.id = "three-weather-condition-div";
threeWeatherConditionDiv.className = 'columns text-center weather-condition';
threeWeatherConditionDiv.textContent = "threeWeatherConditionDiv has been created!";

const threeWeatherIconDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherIconDiv);
threeWeatherIconDiv.id = "three-weather-icon-div";
threeWeatherIconDiv.className = 'columns text-center';
threeWeatherIconDiv.textContent = "threeWeatherIconDiv has been created!";

const threeWeatherTempDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherTempDiv);
threeWeatherTempDiv.id = "three-weather-temp-div";
threeWeatherTempDiv.className = 'columns text-center weather-temp';
threeWeatherTempDiv.textContent = "threeWeatherTempDiv has been created!";

  function getWeather() {
    fetch("http://api.weatherapi.com/v1/forecast.json?q=auto:ip&days=3&key=a41250d8d3284fa3b3264257223001",{
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "933080ba96mshccf83a9f1a3bb02p17725ajsn4157f19eeff5"
    }
  })
  .then(response => {
  return response.json();
  })
  .then(data => {
    console.log(data);

        // CURRENT LOCATION
    console.log(data.location.country);
    console.log(data.location.name);

    var currentCountry = data.location.country
    getCountry(currentCountry)
    var currentLocation = data.location.name
    getLocation(currentLocation)

    // CURRENT WEATHER INFO
    console.log(data.current.condition.text)
    console.log(data.current.condition.icon)
    console.log(data.current.temp_f);

    var currentCondition = data.current.condition.text
    getCurrentCondition(currentCondition)
    var currentIcon = data.current.condition.icon
    getCurrentIcon(currentIcon)
    var currentTemp = data.current.temp_f
    getCurrentTemp(currentTemp)


    // TOMORROW'S WEATHER INFO
    console.log(data.forecast.forecastday[1].day.condition.text)
    console.log(data.forecast.forecastday[1].day.condition.icon)
    console.log(data.forecast.forecastday[1].day.avgtemp_f);

    var twoCondition = data.forecast.forecastday[1].day.condition.text
    getTwoCondition(twoCondition)
    var twoIcon = data.forecast.forecastday[1].day.condition.icon
    getTwoIcon(twoIcon)
    var twoTemp = data.forecast.forecastday[1].day.avgtemp_f
    getTwoTemp(twoTemp)


    // TWO DAYS OUT WEATHER INFO
    console.log(data.forecast.forecastday[2].day.condition.text)
    console.log(data.forecast.forecastday[2].day.condition.icon)
    console.log(data.forecast.forecastday[2].day.avgtemp_f);

    var threeCondition = data.forecast.forecastday[2].day.condition.text
    getThreeCondition(threeCondition)
    var threeIcon = data.forecast.forecastday[2].day.condition.icon
    getThreeIcon(threeIcon)
    var threeTemp = data.forecast.forecastday[2].day.avgtemp_f
    getThreeTemp(threeTemp)

  })
  .catch(err => {
	  console.error(err);
  });
};

// DISPLAYS LOCATION
var getCountry = function (currentCountry){
  var country = document.querySelector("#weather-block-country");
  $(country).empty();
  $(country).append(currentCountry);
}

var getLocation = function (currentLocation){
  var location = document.querySelector("#weather-block-location");
  $(location).empty();
  $(location).append(currentLocation);
}

// DISPLAYS CURRENT WEATHER'S INFO
var currentTime = function () {
  timeEL = document.querySelector('#current-weather-date-div')
  timeEL.innerHTML = moment().format('MMMM Do');
}
setInterval(currentTime, 1000);

var getCurrentCondition = function (currentCondition){
  var condition = document.querySelector("#current-weather-condition-div");
  $(condition).empty();
  $(condition).append(currentCondition);
}

var getCurrentIcon =  function (currentIcon){
  var icon = document.querySelector("#current-weather-icon-div");
  $(icon).empty();
  var img = document.createElement('img')
  $(icon).append(img);
  $(img).attr('src', currentIcon);
}

var getCurrentTemp = function (currentTemp){
  var temp = document.querySelector("#current-weather-temp-div");
  $(temp).empty();
  $(temp).append(currentTemp + " F");
}

// DISPLAYS TOMORROWS WEATHER'S INFO
var twoTime = function () {
  timeEL = document.querySelector('#two-weather-date-div')
  timeEL.innerHTML = moment().add(1, 'days').format('MMMM Do');
}
setInterval(twoTime, 1000);

var getTwoCondition = function (twoCondition){
  var condition = document.querySelector("#two-weather-condition-div");
  $(condition).empty();
  $(condition).append(twoCondition);
}

var getTwoIcon =  function (twoIcon){
  var icon = document.querySelector("#two-weather-icon-div");
  $(icon).empty();
  var img = document.createElement('img')
  $(icon).append(img);
  $(img).attr('src', twoIcon);
}

var getTwoTemp = function (twoTemp){
  var temp = document.querySelector("#two-weather-temp-div");
  $(temp).empty();
  $(temp).append(twoTemp + " F");
}

// DISPLAYS THE DAY AFTER TOMORROW"S WEATHER'S INFO
var threeTime = function () {
  timeEL = document.querySelector('#three-weather-date-div')
  timeEL.innerHTML = moment().add(2, 'days').format('MMMM Do');
}
setInterval(threeTime, 1000);

var getThreeCondition = function (threeCondition){
  var condition = document.querySelector("#three-weather-condition-div");
  $(condition).empty();
  $(condition).append(threeCondition);
}

var getThreeIcon =  function (threeIcon){
  var icon = document.querySelector("#three-weather-icon-div");
  $(icon).empty();
  var img = document.createElement('img')
  $(icon).append(img);
  $(img).attr('src', threeIcon);
}

var getThreeTemp = function (threeTemp){
  var temp = document.querySelector("#three-weather-temp-div");
  $(temp).empty();
  $(temp).append(threeTemp + " F");
}

getWeather()