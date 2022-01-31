// WEATHER SECTION STARTS HERE
const weatherBlock = document.createElement('div');
center.appendChild(weatherBlock);
weatherBlock.id = 'weather-block';
weatherBlock.className = 'box columns';

// WEATHER BLOCK TITLE
const weatherBlockCountry = document.createElement('div');
weatherBlockCountry.id = 'weather-block-country'
weatherBlockCountry.className = 'box';
weatherBlock.appendChild(weatherBlockCountry)
weatherBlockCountry.textContent="Country"

const weatherBlockLocation = document.createElement('div');
weatherBlockLocation.id = 'weather-block-location'
weatherBlockLocation.className = 'box';
weatherBlockCountry.appendChild(weatherBlockLocation)
weatherBlockLocation.textContent="Location"




// CURRENT WEATHER COL
const currentWeatherCol = document.createElement('div');
weatherBlock.appendChild(currentWeatherCol);
currentWeatherCol.id = "current-weather-col";
currentWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const currentWeatherCountryDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherCountryDiv);
currentWeatherCountryDiv.id = "current-weather-country-div";
currentWeatherCountryDiv.className = 'box  columns is-3';
currentWeatherCountryDiv.textContent = "currentWeatherCountryDiv has been created!";

const currentWeatherLocationDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherLocationDiv);
currentWeatherLocationDiv.id = "current-weather-location-div";
currentWeatherLocationDiv.className = 'box  columns is-3';
currentWeatherLocationDiv.textContent = "currentWeatherLocationDiv has been created!";

const currentWeatherIconDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherIconDiv);
currentWeatherIconDiv.id = "current-weather-icon-div";
currentWeatherIconDiv.className = 'box  columns is-3';
currentWeatherIconDiv.textContent = "currentWeatherIconDiv has been created!";

const currentWeatherTempDiv = document.createElement('div');
currentWeatherCol.appendChild(currentWeatherTempDiv);
currentWeatherTempDiv.id = "current-weather-temp-div";
currentWeatherTempDiv.className ='box  columns is-3';
currentWeatherTempDiv.textContent = "currentWeatherTempDiv has been created!";









// TOMORROW WEATHER COL
const twoWeatherCol = document.createElement('div');
weatherBlock.appendChild(twoWeatherCol);
twoWeatherCol.id = "two-weather-col";
twoWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const twoWeatherCountryDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherCountryDiv);
twoWeatherCountryDiv.id = "two-weather-country-div";
twoWeatherCountryDiv.className = 'box  columns is-3';
twoWeatherCountryDiv.textContent = "twoWeatherCountryDiv has been created!";

const twoWeatherLocationDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherLocationDiv);
twoWeatherLocationDiv.id = "two-weather-location-div";
twoWeatherLocationDiv.className = 'box  columns is-3';
twoWeatherLocationDiv.textContent = "twoWeatherLocationDiv has been created!";

const twoWeatherIconDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherIconDiv);
twoWeatherIconDiv.id = "two-weather-icon-div";
twoWeatherIconDiv.className = 'box  columns is-3';
twoWeatherIconDiv.textContent = "twoWeatherIconDiv has been created!";

const twoWeatherTempDiv = document.createElement('div');
twoWeatherCol.appendChild(twoWeatherTempDiv);
twoWeatherTempDiv.id = "two-weather-temp-div";
twoWeatherTempDiv.className ='box  columns is-3';
twoWeatherTempDiv.textContent = "twoWeatherTempDiv has been created!";










// DAY AFTER TOMORROW WEATHER COL
const threeWeatherCol = document.createElement('div');
weatherBlock.appendChild(threeWeatherCol);
threeWeatherCol.id = "three-weather-col";
threeWeatherCol.className = 'box column is-3 is-centered';
// currentWeatherCol.textContent = "currentWeatherCol has been created!";

const threeWeatherCountryDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherCountryDiv);
threeWeatherCountryDiv.id = "three-weather-country-div";
threeWeatherCountryDiv.className = 'box  columns is-3';
threeWeatherCountryDiv.textContent = "threeWeatherCountryDiv has been created!";

const threeWeatherLocationDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherLocationDiv);
threeWeatherLocationDiv.id = "three-weather-location-div";
threeWeatherLocationDiv.className = 'box  columns is-3';
threeWeatherLocationDiv.textContent = "threeWeatherLocationDiv has been created!";

const threeWeatherIconDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherIconDiv);
threeWeatherIconDiv.id = "three-weather-icon-div";
threeWeatherIconDiv.className = 'box  columns is-3';
threeWeatherIconDiv.textContent = "threeWeatherIconDiv has been created!";

const threeWeatherTempDiv = document.createElement('div');
threeWeatherCol.appendChild(threeWeatherTempDiv);
threeWeatherTempDiv.id = "three-weather-temp-div";
threeWeatherTempDiv.className ='box  columns is-3';
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
    console.log(data.location.country);
    console.log(data.location.name);
    console.log(data.current.condition.icon)
    console.log(data.current.temp_f);

    // var weatherCountry = data.location.country
    // var weatherLocation = data.location.name
    // var weatherConditionIcon = data.current.condition.icon
    // var weatherTemp = data.current.temp_f

    // $(weather).empty();
    // $(weather).append(weatherCountry + '<br>' + weatherLocation + '<br>' + weatherConditionIcon + '<br>' + weatherTemp + " F")

  })
  .catch(err => {
	  console.error(err);
  });
};

// Weather section ends here.
getWeather()

