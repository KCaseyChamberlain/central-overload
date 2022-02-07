// Header starts here.
const day = document.querySelector('#day');
const time = document.querySelector('#time');
// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated.
var nowDay = moment().format('dddd MMMM Do YYYY');
var nowTime = moment().format('h:mm:ss a');
day.textContent = nowDay;
time.textContent = nowTime;
setInterval(function () {
  var nowDay = moment().format('dddd MMMM Do YYYY');
  var nowTime = moment().format('h:mm:ss a');
  day.textContent = nowDay;
  time.textContent = nowTime;
}, 1000);
// Header ends here.
// Main starts here.
const main = document.querySelector('#main');
const leftSide = document.querySelector('#left-side');
const center = document.querySelector('#center');
const rightSide = document.querySelector('#right-side');
const formatter = new Intl.NumberFormat('en');
const key = '12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565';
// Main ends here.

// Movies list starts here.
var inputEl = document.querySelector('#movies-input');
var buttonEl = document.querySelector('#movies-button');
var movieEl = document.querySelector('#movies-list');

// Here it searches local storage to see if there is any movie title stored inside it and if there is not it searches for "The Godfather" by defult.
var movieTitle = localStorage.getItem('keymovie');
if (movieTitle == "" || movieTitle == null) {
  localStorage.setItem('keymovie', "The Godfather");
}
buttonEl.addEventListener('click', function() {
  var moviesSearch = inputEl.value;
  if (moviesSearch == "" || moviesSearch == null) {
    moviesSearch = localStorage.getItem('keymovie');
  }
  localStorage.setItem('keymovie', moviesSearch);
  movieTitle = localStorage.getItem('keymovie');
  getMovies();
});
function getMovies() {
  movieEl.innerHTML = "";
  movieTitle = localStorage.getItem('keymovie');
  fetch('https://imdb8.p.rapidapi.com/title/find?q=' + movieTitle, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].titleType === "movie") {
        var movies = document.createElement('div');
        movieEl.appendChild(movies);
        movies.className = 'tile is-parent is-12 is-vertical';

        var moviesPoster = document.createElement('img');
        movies.appendChild(moviesPoster);
        moviesPoster.className = 'tile is-child is-12';
        moviesPoster.setAttribute("src", data.results[i].image.url);

        var moviesName = document.createElement('h4');
        movies.appendChild(moviesName);
        moviesName.className = 'tile is-child is-12 has-text-centered';
        moviesName.textContent = data.results[i].title;

        if (data.results[i].year == "" || data.results[i].year == null) {
          console.log(data.results[i].title + " Has Undefined Year!");
        } else {
          var moviesYear = document.createElement('h5');
          movies.appendChild(moviesYear);
          moviesYear.className = 'tile is-child is-12 has-text-centered';
          moviesYear.textContent = "Year: " + data.results[i].year;
        }

        if (data.results[i].runningTimeInMinutes == "" || data.results[i].runningTimeInMinutes == null) {
          console.log(data.results[i].title + " Has Undefined Length!");
        } else {
          var moviesTime = document.createElement('h5');
          movies.appendChild(moviesTime);
          moviesTime.className = 'tile is-child is-12 has-text-centered';
          moviesTime.textContent = "Length: " + data.results[i].runningTimeInMinutes + " Minutes";
        }

        if (data.results[i].principals == "" || data.results[i].principals == null) {
          console.log(data.results[i].title + " Has Undefined Stars!");
        } else {
          var principals = document.createElement('div');
          movies.appendChild(principals);
          principals.className = 'tile is-parent is-12 is-vertical has-text-centered';

          for (var x = 0; x < data.results[i].principals.length; x++) {
            var principal = document.createElement('h5');
            principals.appendChild(principal);
            principal.className = 'tile is-child is-12';
            principal.textContent = data.results[i].principals[x].name;
          }
        }
      }
    };
  })
  .catch((err) => {
    console.error(err);
  });
};
// Movies list ends here.

// Weather starts here.
const weatherBlock = document.querySelector('#weather');
// Here we use user's IP address to find user's location.
function userLocation(ip) {
  fetch('https://weatherapi-com.p.rapidapi.com/ip.json?q=' + ip, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": key
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getWeather(data.lat, data.lon);
    })
    .catch((err) => {
      console.error(err);
    });
};
// Here we get user's IP address so we can find user's location.
function user() {
  fetch('https://api.ipify.org/?format=json')
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      userLocation(data.ip);
    })
    .catch((err) => {
      console.error(err);
    });
};
// This function gets weather info based on lat and lon we passed to it then creates elements to display it.
function getWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&units=imperial&lang=en&appid=32ed05888dd11ce89460365fde5e625e')
  .then(response => {
    return response.json();
  })
  .then(data => {
    var today = document.createElement('div');
    weatherBlock.appendChild(today);
    today.className = 'tile is-parent is-vertical';

    var todayDate = document.createElement('div');
    today.appendChild(todayDate);
    todayDate.className = 'weather-date';
    todayDate.textContent = "Today";

    var todayIcon = document.createElement('img');
    today.appendChild(todayIcon);
    todayIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png');

    var todayTemp = document.createElement('p');
    today.appendChild(todayTemp);
    todayTemp.textContent = "Temp: " + data.current.temp + "°F";

    var todayWindSpeed = document.createElement('p');
    today.appendChild(todayWindSpeed);
    todayWindSpeed.textContent = "Wind: " + data.current.wind_speed + " mph";

    var todayHumidity = document.createElement('p');
    today.appendChild(todayHumidity);
    todayHumidity.textContent = "Humidity: " + data.current.humidity + " %";

    var todayUv = document.createElement('p');
    today.appendChild(todayUv);
    todayUv.textContent = "UV Index: " + data.current.uvi;

    for (var i = 1; i < 8; i++) {
      var dayDateCalc = (data.daily[i].dt - data.daily[0].dt) / 24 / 60 / 60;

      var days = document.createElement('div');
      weatherBlock.appendChild(days);
      days.className = 'tile is-parent is-vertical';

      var dayDate = document.createElement('div');
      days.appendChild(dayDate);
      dayDate.className = 'weather-date';
      dayDate.textContent = moment().add(dayDateCalc, 'days').format('L');

      var dayIcon = document.createElement('img');
      days.appendChild(dayIcon);
      iconCode = data.daily[i].weather[0].icon;
      dayIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png');

      var dayMinTemp = document.createElement('p');
      days.appendChild(dayMinTemp);
      dayMinTemp.textContent = "Temp ↓: " + data.daily[i].temp.min + "°F";

      var dayMaxTemp = document.createElement('p');
      days.appendChild(dayMaxTemp);
      dayMaxTemp.textContent = "Temp ↑: " + data.daily[i].temp.max + "°F";

      var dayWindSpeed = document.createElement('p');
      days.appendChild(dayWindSpeed);
      dayWindSpeed.textContent = "Wind: " + data.daily[i].wind_speed + " mph";

      var dayHumidity = document.createElement('p');
      days.appendChild(dayHumidity);
      dayHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";
    }
  })
  .catch(err => {
	  console.error(err);
  });
};
// Weather ends here.

// News section starts here.
const search = document.querySelector('#search');
const searchInput = document.querySelector('#news-input');
const searchButton = document.querySelector('#news-button');
const news = document.querySelector('#news');

// Here it searches local storage to see if there is any news topic stored inside it and if there is not it searches for "Breaking News" by defult.
var topic = localStorage.getItem('keytopic');
if (topic == "" || topic == null) {
  localStorage.setItem('keytopic', "Breaking News");
}
searchButton.addEventListener('click', function() {
  var newsSearch = searchInput.value;
  if (newsSearch == "" || newsSearch == null) {
    newsSearch = localStorage.getItem('keytopic');
  }
  localStorage.setItem('keytopic', newsSearch);
  topic = localStorage.getItem('keytopic');
  getNews();
});
function getNews() {
  news.innerHTML = "";
  topic = localStorage.getItem('keytopic');
  fetch('https://free-news.p.rapidapi.com/v1/search?q=' + topic + '&lang=en', {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "free-news.p.rapidapi.com",
		  "x-rapidapi-key": key
	  }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (var i = 0; i < data.articles.length; i++) {
      if (data.articles[i].topic === "news") {
        var newsItem = document.createElement('div');
        news.appendChild(newsItem);
        newsItem.className = 'tile is-parent is-vertical is-4';

        var newsImageLink = document.createElement('a');
        newsItem.appendChild(newsImageLink);
        newsImageLink.className = 'tile is-parent is-12';
        newsImageLink.setAttribute('href', data.articles[i].link);
        newsImageLink.setAttribute('target', '_blank');

        var newsImage = document.createElement('img');
        newsImageLink.appendChild(newsImage);
        newsImage.className = 'tile is-child is-12';
        newsImage.setAttribute('src', data.articles[i].media);

        var newsSourceLink = document.createElement('a');
        newsItem.appendChild(newsSourceLink);
        newsSourceLink.className = 'tile is-parent is-12';
        newsSourceLink.setAttribute('href', "https://www." + data.articles[i].clean_url);
        newsSourceLink.setAttribute('target', '_blank');

        var newsSource = document.createElement('p');
        newsSourceLink.appendChild(newsSource);
        newsSource.className = 'tile is-child is-12 has-text-centered has-text-danger-dark is-italic';
        newsSource.textContent = "Source: " + data.articles[i].clean_url;

        var newsTextLink = document.createElement('a');
        newsItem.appendChild(newsTextLink);
        newsTextLink.className = 'tile is-parent is-12';
        newsTextLink.setAttribute('href', data.articles[i].link);
        newsTextLink.setAttribute('target', '_blank');
        
        var newsText = document.createElement('p');
        newsTextLink.appendChild(newsText);
        newsText.className = 'tile is-child is-12 has-text-justified has-text-black';
        newsText.textContent = data.articles[i].title;
      }
    };
  })
  .catch(err => {
	  console.error(err);
})};
// News section ends here.

// Covid-19 stats starts here.
const covid = document.querySelector('#right-side');
const world = document.querySelector('#world');
const countries = document.querySelector('#countries-list');
const states = document.querySelector('#states-list');

function worldTotal() {
  fetch('https://covid-19-data.p.rapidapi.com/totals', {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": key
	}
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    var totalTitle = document.createElement('h3');
    world.appendChild(totalTitle);
    totalTitle.className = 'tile is-child is-12 has-text-centered';
    totalTitle.textContent = "World Cases:";
    var total = document.createElement('h4');
    world.appendChild(total);
    total.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    total.textContent = formatter.format(data[0].confirmed);

    var worldDeathsTitle = document.createElement('h3');
    world.appendChild(worldDeathsTitle);
    worldDeathsTitle.className = 'tile is-child is-12 has-text-centered';
    worldDeathsTitle.textContent = "World Deaths:";
    var worldDeaths = document.createElement('h4');
    world.appendChild(worldDeaths);
    worldDeaths.className = 'tile is-child is-12 has-text-centered has-text-danger';
    worldDeaths.textContent = formatter.format(data[0].deaths);

    var recoveredTitle = document.createElement('h3');
    world.appendChild(recoveredTitle);
    recoveredTitle.className = 'tile is-child is-12 has-text-centered';
    recoveredTitle.textContent = "World Recovered:";
    var recovered = document.createElement('h4');
    world.appendChild(recovered);
    recovered.className = 'tile is-child is-12 has-text-centered has-text-success';
    recovered.textContent = formatter.format(data[0].recovered);
  })
  .catch(err => {
    console.error(err);
  });
};

var countryInput = document.querySelector('#country-input');
var countryButton = document.querySelector('#country-button');
// Here it searches local storage to see if there is any country name stored inside it and if there is not it searches for "USA" by defult.
var countryName = localStorage.getItem('keycountry');
if (countryName == "" || countryName == null) {
  localStorage.setItem('keycountry', "USA");
}
countryButton.addEventListener('click', function() {
  var countrySearch = countryInput.value;
  if (countrySearch == "" || countrySearch == null) {
    countrySearch = localStorage.getItem('keycountry');
  }
  localStorage.setItem('keycountry', countrySearch);
  countryName = localStorage.getItem('keycountry');
  searchCountries();
});
function searchCountries() {
  countries.innerHTML = "";
  countryName = localStorage.getItem('keycountry');
  fetch('https://covid-193.p.rapidapi.com/statistics?country=' + countryName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": key
	}
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    var continentTitle = document.createElement('h3');
    countries.appendChild(continentTitle);
    continentTitle.className = 'tile is-child is-12 has-text-centered';
    continentTitle.textContent = "Continent Name:";
    var continent = document.createElement('h4');
    countries.appendChild(continent);
    continent.className = 'tile is-child is-12 has-text-centered has-text-info';
    continent.textContent = data.response[0].continent;

    var countryTitle = document.createElement('h3');
    countries.appendChild(countryTitle);
    countryTitle.className = 'tile is-child is-12 has-text-centered';
    countryTitle.textContent = "Country Name:";
    var country = document.createElement('h4');
    countries.appendChild(country);
    country.className = 'tile is-child is-12 has-text-centered has-text-info';
    country.textContent = data.response[0].country;

    var populationTitle = document.createElement('h3');
    countries.appendChild(populationTitle);
    populationTitle.className = 'tile is-child is-12 has-text-centered';
    populationTitle.textContent = "Population:";
    var population = document.createElement('h4');
    countries.appendChild(population);
    population.className = 'tile is-child is-12 has-text-centered has-text-success';
    population.textContent = formatter.format(data.response[0].population);

    var casesNewTitle = document.createElement('h3');
    countries.appendChild(casesNewTitle);
    casesNewTitle.className = 'tile is-child is-12 has-text-centered';
    casesNewTitle.textContent = "New Cases:";
    var casesNew = document.createElement('h4');
    countries.appendChild(casesNew);
    casesNew.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesNew.textContent = formatter.format(data.response[0].cases.new);

    var casesActiveTitle = document.createElement('h3');
    countries.appendChild(casesActiveTitle);
    casesActiveTitle.className = 'tile is-child is-12 has-text-centered';
    casesActiveTitle.textContent = "Active Cases:";
    var casesActive = document.createElement('h4');
    countries.appendChild(casesActive);
    casesActive.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesActive.textContent = formatter.format(data.response[0].cases.active);

    var casesTotalTitle = document.createElement('h3');
    countries.appendChild(casesTotalTitle);
    casesTotalTitle.className = 'tile is-child is-12 has-text-centered';
    casesTotalTitle.textContent = "Total Cases:";
    var casesTotal = document.createElement('h4');
    countries.appendChild(casesTotal);
    casesTotal.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesTotal.textContent = formatter.format(data.response[0].cases.total);

    var deathsNewTitle = document.createElement('h3');
    countries.appendChild(deathsNewTitle);
    deathsNewTitle.className = 'tile is-child is-12 has-text-centered';
    deathsNewTitle.textContent = "New Deaths:";
    var deathsNew = document.createElement('h4');
    countries.appendChild(deathsNew);
    deathsNew.className = 'tile is-child is-12 has-text-centered has-text-danger';
    deathsNew.textContent = formatter.format(data.response[0].deaths.new);

    var deathsTotalTitle = document.createElement('h3');
    countries.appendChild(deathsTotalTitle);
    deathsTotalTitle.className = 'tile is-child is-12 has-text-centered';
    deathsTotalTitle.textContent = "Total Deaths:";
    var deathsTotal = document.createElement('h4');
    countries.appendChild(deathsTotal);
    deathsTotal.className = 'tile is-child is-12 has-text-centered has-text-danger';
    deathsTotal.textContent = formatter.format(data.response[0].deaths.total);
  })
  .catch(err => {
    console.error(err);
  });
};

var stateInput = document.querySelector('#state-input');
var stateButton = document.querySelector('#state-button');
// Here it searches local storage to see if there is any state name stored inside it and if there is not it searches for "Utah" by defult.
var stateName = localStorage.getItem('keystate');
if (stateName == "" || stateName == null) {
  localStorage.setItem('keystate', "Utah");
}
stateButton.addEventListener('click', function() {
  var stateSearch = stateInput.value;
  if (stateSearch == "" || stateSearch == null) {
    stateSearch = localStorage.getItem('keystate');
  }
  localStorage.setItem('keystate', stateSearch);
  stateName = localStorage.getItem('keystate');
  searchStates();
});
function searchStates() {
  states.innerHTML = "";
  stateName = localStorage.getItem('keystate');
  fetch('https://covid-19-statistics.p.rapidapi.com/reports?region_province=' + stateName + '&iso=USA', {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": key
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    var regionTitle = document.createElement('h3');
    states.appendChild(regionTitle);
    regionTitle.className = 'tile is-child is-12 has-text-centered';
    regionTitle.textContent = "State Name:";
    var region = document.createElement('h4');
    states.appendChild(region);
    region.className = 'tile is-child is-12 has-text-centered has-text-info';
    region.textContent = data.data[0].region.province;

    var stateConfirmedTitle = document.createElement('h3');
    states.appendChild(stateConfirmedTitle);
    stateConfirmedTitle.className = 'tile is-child is-12 has-text-centered';
    stateConfirmedTitle.textContent = "State Total:";
    var stateConfirmed = document.createElement('h4');
    states.appendChild(stateConfirmed);
    stateConfirmed.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    stateConfirmed.textContent = formatter.format(data.data[0].confirmed);

    var stateActiveTitle = document.createElement('h3');
    states.appendChild(stateActiveTitle);
    stateActiveTitle.className = 'tile is-child is-12 has-text-centered';
    stateActiveTitle.textContent = "State Active:";
    var stateActive = document.createElement('h4');
    states.appendChild(stateActive);
    stateActive.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    stateActive.textContent = formatter.format(data.data[0].active);

    var stateDeathsTitle = document.createElement('h3');
    states.appendChild(stateDeathsTitle);
    stateDeathsTitle.className = 'tile is-child is-12 has-text-centered';
    stateDeathsTitle.textContent = "State Deaths:";
    var stateDeaths = document.createElement('h4');
    states.appendChild(stateDeaths);
    stateDeaths.className = 'tile is-child is-12 has-text-centered has-text-danger';
    stateDeaths.textContent = formatter.format(data.data[0].deaths);

    var stateFatalityRateTitle = document.createElement('h3');
    states.appendChild(stateFatalityRateTitle);
    stateFatalityRateTitle.className = 'tile is-child is-12 has-text-centered';
    stateFatalityRateTitle.textContent = "Fatality Rate:";
    var stateFatalityRate = document.createElement('h4');
    states.appendChild(stateFatalityRate);
    stateFatalityRate.className = 'tile is-child is-12 has-text-centered has-text-danger';
    stateFatalityRate.textContent = (data.data[0].fatality_rate);
  })
  .catch(err => {
    console.error(err);
  });
};
// Covid-19 stats ends here.

getMovies();
user();
getNews();
worldTotal();
searchCountries();
searchStates();