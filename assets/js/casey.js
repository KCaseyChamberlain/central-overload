// Weather section starts here.
const forecast = document.createElement('div');
center.appendChild(forecast);
forecast.id = 'forecast';
forecast.className = 'tile is-parent is-12 box';
forecast.textContent = "Forecast";

function getForecast(city) {
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q="+city+"&days=7", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
    }
  })
  .then(response => {
  return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data.location.country);
    console.log(data.location.region);
    console.log(data.location.name);
    console.log(data.current.temp_f);
  })
  .catch(err => {
	  console.error(err);
  });
};
// Weather section ends here.