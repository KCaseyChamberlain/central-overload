// Weather section starts here.
const weather = document.createElement('div');
center.appendChild(weather);
weather.id = 'weather';
weather.className = 'is-12 box text-center ';
weather.textContent = "Weather";

const weatherCountry = document.createElement('div');
weather.appendChild(weatherCountry);
weatherCountry.id = "weather-country";
weatherCountry.className = 'is-12 box text-center';
weatherCountry.textContent = "weatherCountry has been created!";

const weatherLocation = document.createElement('div');
weather.appendChild(weatherLocation);
weatherLocation.id = "weather-location";
weatherLocation.className = 'is-12 box text-center';
weatherLocation.textContent = "weatherLocation has been created!";

const weatherIcon = document.createElement('div');
weather.appendChild(weatherIcon);
weatherIcon.id = "weather-icon";
weatherIcon.className = 'is-12 box text-center';
weatherIcon.textContent = "weatherIcon has been created!";

const weatherTemp = document.createElement('div');
weather.appendChild(weatherTemp);
weatherTemp.id = "weather-country";
weatherTemp.className = 'is-12 box text-center';
weatherTemp.textContent = "weatherTemp has been created!";




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

