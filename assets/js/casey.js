// WEATHER SECTION STARTS HERE
const weatherBlock = document.createElement('div');
center.appendChild(weatherBlock);
weatherBlock.id = 'weather-block';
weatherBlock.className = 'box';

// WEATHER BLOCK TITLE
const weatherBlockTitle = document.createElement('div');
weatherBlockTitle.id = 'weather-block-title'
weatherBlockTitle.className = 'box';
weatherBlock.appendChild(weatherBlockTitle)
weatherBlockTitle.innerHTML="Weather"


// WEATHER COUNTRY
const weatherCountryCols = document.createElement('div');
weatherBlock.appendChild(weatherCountryCols);
weatherCountryCols.id = "weather-country-cols";
weatherCountryCols.className = 'box columns is-centered';
// weatherCountryCols.textContent = "weatherCountryCols has been created!";

const weatherCountryDiv = document.createElement('div');
weatherCountryCols.appendChild(weatherCountryDiv);
weatherCountryDiv.id = "weather-country-div";
weatherCountryDiv.className = 'box  column is-is-one-third';
weatherCountryDiv.textContent = "weatherCountryDiv has been created!";

const weatherCountryDivTwo = document.createElement('div');
weatherCountryCols.appendChild(weatherCountryDivTwo);
weatherCountryDivTwo.id = "weather-country-div-two";
weatherCountryDivTwo.className = 'box  column is-is-one-third';
weatherCountryDivTwo.textContent = "weatherCountryDivTwo has been created!";

const weatherCountryDivThree = document.createElement('div');
weatherCountryCols.appendChild(weatherCountryDivThree);
weatherCountryDivThree.id = "weather-country-div-three";
weatherCountryDivThree.className = 'box  column is-is-one-third';
weatherCountryDivThree.textContent = "weatherCountryDivThree has been created!";



// WEATHER LOCATION
const weatherLocationCols = document.createElement('div');
weatherBlock.appendChild(weatherLocationCols);
weatherLocationCols.id = "weather-location-cols";
weatherLocationCols.className = 'box  columns';
// weatherLocationCols.textContent = "weatherLocationCols has been created!";

const weatherLocationDiv = document.createElement('div');
weatherLocationCols.appendChild(weatherLocationDiv);
weatherLocationDiv.id = "weather-location-div";
weatherLocationDiv.className = 'box  column is-is-one-third';
weatherLocationDiv.textContent = "weatherLocationDiv has been created!";

const weatherLocationDivTwo = document.createElement('div');
weatherLocationCols.appendChild(weatherLocationDivTwo);
weatherLocationDivTwo.id = "weather-location-div-two";
weatherLocationDivTwo.className = 'box  column is-is-one-third';
weatherLocationDivTwo.textContent = "weatherLocationDivTwo has been created!";

const weatherLocationDivThree = document.createElement('div');
weatherLocationCols.appendChild(weatherLocationDivThree);
weatherLocationDivThree.id = "weather-location-div-three";
weatherLocationDivThree.className = 'box  column is-is-one-third';
weatherLocationDivThree.textContent = "weatherLocationDivThree has been created!";



// WEATHER ICON
const weatherIconCols = document.createElement('div');
weatherBlock.appendChild(weatherIconCols);
weatherIconCols.id = "weather-icon-cols";
weatherIconCols.className = 'box  columns';
// weatherIconCols.textContent = "weatherIconcols has been created!";

const weatherIconDiv = document.createElement('div');
weatherIconCols.appendChild(weatherIconDiv);
weatherIconDiv.id = "weather-icon-div";
weatherIconDiv.className = 'box  column is-is-one-third';
weatherIconDiv.textContent = "weatherIconDiv has been created!";

const weatherIconDivTwo = document.createElement('div');
weatherIconCols.appendChild(weatherIconDivTwo);
weatherIconDivTwo.id = "weather-icon-div-two";
weatherIconDivTwo.className = 'box  column is-is-one-third';
weatherIconDivTwo.textContent = "weatherIconDivTwo has been created!";

const weatherIconDivThree = document.createElement('div');
weatherIconCols.appendChild(weatherIconDivThree);
weatherIconDivThree.id = "weather-icon-div-three";
weatherIconDivThree.className = 'box  column is-is-one-third';
weatherIconDivThree.textContent = "weatherIconDivThree has been created!";




// WEATHER TEMP
const weatherTempCols = document.createElement('div');
weatherBlock.appendChild(weatherTempCols);
weatherTempCols.id = "weather-temp-cols";
weatherTempCols.className = 'box  columns';
// weatherTempCols.textContent = "weatherTempcols has been created!";

const weatherTempDiv = document.createElement('div');
weatherTempCols.appendChild(weatherTempDiv);
weatherTempDiv.id = "weather-temp-div";
weatherTempDiv.className ='box  column is-is-one-third';
weatherTempDiv.textContent = "weatherTempDiv has been created!";

const weatherTempDivTwo = document.createElement('div');
weatherTempCols.appendChild(weatherTempDivTwo);
weatherTempDivTwo.id = "weather-temp-div-two";
weatherTempDivTwo.className ='box  column is-is-one-third';
weatherTempDivTwo.textContent = "weatherTempDivTwo has been created!";

const weatherTempDivThree = document.createElement('div');
weatherTempCols.appendChild(weatherTempDivThree);
weatherTempDivThree.id = "weather-temp-div-three";
weatherTempDivThree.className ='box  column is-is-one-third';
weatherTempDivThree.textContent = "weatherTempDivThree has been created!";



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

