// Weather section starts here.
const forecast = document.createElement('div');
center.appendChild(forecast);
forecast.id = 'forecast';
forecast.className = 'tile is-parent is-12 box';
forecast.textContent = "Forecast";

  function getForecast(city) {
    fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q="+city+"&days=3",{
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
    console.log(data.location.region);
    console.log(data.location.name);
    console.log(data.current.temp_f);
  })
  .catch(err => {
	  console.error(err);
  });
};
// Weather section ends here.
getForecast()