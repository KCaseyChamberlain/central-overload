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
// Main ends here.

// Movies list starts here.
var inputEl = document.querySelector('#movies-input');
var buttonEl = document.querySelector('#movies-button');
var movieEl = document.querySelector('#movies-list');
var movieTitle = localStorage.getItem('keymovie');
// Here it searches local storage to see if there is any movie title stored inside it and if there is not it searches for "The Godfather" by defult.
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
      "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565",
    },
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].titleType === "movie") {
        var movies = document.createElement('div');
        movieEl.appendChild(movies);
        movies.className = 'tile is-parent is-12 is-vertical'
        var moviesPoster = document.createElement('img');
        movies.appendChild(moviesPoster);
        moviesPoster.className = 'tile is-child is-12';
        moviesPoster.setAttribute("src", data.results[i].image.url);
        var moviesName = document.createElement('h4');
        movies.appendChild(moviesName);
        moviesName.className = 'tile is-child is-12 has-text-centered';
        moviesName.textContent = data.results[i].title;
        if (data.results[i].year == "" || data.results[i].year == null) {
          console.log(data.results[i].title + " Has Undefined Year!")
        } else {
          var moviesYear = document.createElement('h5');
          movies.appendChild(moviesYear);
          moviesYear.className = 'tile is-child is-12 has-text-centered';
          moviesYear.textContent = "Year: " + data.results[i].year;
        }
        if (data.results[i].runningTimeInMinutes == "" || data.results[i].runningTimeInMinutes == null) {
          console.log(data.results[i].title + " Has Undefined Length!")
        } else {
          var moviesTime = document.createElement('h5');
          movies.appendChild(moviesTime);
          moviesTime.className = 'tile is-child is-12 has-text-centered';
          moviesTime.textContent = "Length: " + data.results[i].runningTimeInMinutes + " Minutes";
        }
        if (data.results[i].principals == "" || data.results[i].principals == null) {
          console.log(data.results[i].title + " Has Undefined Stars!")
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
  fetch("https://weatherapi-com.p.rapidapi.com/ip.json?q=" + ip, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565",
    },
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
  fetch("https://api.ipify.org/?format=json")
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
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&units=imperial&lang=en&appid=32ed05888dd11ce89460365fde5e625e')
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
var topic = localStorage.getItem('keytopic');
// Here it searches local storage to see if there is any news topic stored inside it and if there is not it searches for "Breaking News" by defult.
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
  fetch("https://free-news.p.rapidapi.com/v1/search?q="+topic+"&lang=en", {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "free-news.p.rapidapi.com",
		  "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
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
const formatter = new Intl.NumberFormat('en');
const covid = document.querySelector('#right-side');
const world = document.querySelector('#world');
const stateSearch = document.querySelector('#search-state');

function worldTotal() {
  fetch('https://covid-19-data.p.rapidapi.com/totals', {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
	}
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    var confirmedTitle = document.createElement('h3');
    world.appendChild(confirmedTitle);
    confirmedTitle.className = 'tile is-child is-12 has-text-centered';
    confirmedTitle.textContent = "World Cases:";
    var confirmed = document.createElement('h4');
    world.appendChild(confirmed);
    confirmed.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    confirmed.textContent = formatter.format(data[0].confirmed);

    var deathsTitle = document.createElement('h3');
    world.appendChild(deathsTitle);
    deathsTitle.className = 'tile is-child is-12 has-text-centered';
    deathsTitle.textContent = "World Deaths:";
    var deaths = document.createElement('h4');
    world.appendChild(deaths);
    deaths.className = 'tile is-child is-12 has-text-centered has-text-danger';
    deaths.textContent = formatter.format(data[0].deaths);

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
var countriesList = document.querySelector('#countries-list');
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
  countriesList.innerHTML = "";
  countryName = localStorage.getItem('keycountry');
  fetch('https://covid-193.p.rapidapi.com/statistics?country=' + countryName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
	}
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    var continentTitle = document.createElement('h3');
    countriesList.appendChild(continentTitle);
    continentTitle.className = 'tile is-child is-12 has-text-centered';
    continentTitle.textContent = "Continent Name:";
    var continent = document.createElement('h4');
    countriesList.appendChild(continent);
    continent.className = 'tile is-child is-12 has-text-centered has-text-info';
    continent.textContent = data.response[0].continent;

    var countryTitle = document.createElement('h3');
    countriesList.appendChild(countryTitle);
    countryTitle.className = 'tile is-child is-12 has-text-centered';
    countryTitle.textContent = "Country Name:";
    var country = document.createElement('h4');
    countriesList.appendChild(country);
    country.className = 'tile is-child is-12 has-text-centered has-text-info';
    country.textContent = data.response[0].country;

    var populationTitle = document.createElement('h3');
    countriesList.appendChild(populationTitle);
    populationTitle.className = 'tile is-child is-12 has-text-centered';
    populationTitle.textContent = "Population:";
    var population = document.createElement('h4');
    countriesList.appendChild(population);
    population.className = 'tile is-child is-12 has-text-centered has-text-success';
    population.textContent = formatter.format(data.response[0].population);

    var casesNewTitle = document.createElement('h3');
    countriesList.appendChild(casesNewTitle);
    casesNewTitle.className = 'tile is-child is-12 has-text-centered';
    casesNewTitle.textContent = "New Cases:";
    var casesNew = document.createElement('h4');
    countriesList.appendChild(casesNew);
    casesNew.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesNew.textContent = formatter.format(data.response[0].cases.new);

    var casesActiveTitle = document.createElement('h3');
    countriesList.appendChild(casesActiveTitle);
    casesActiveTitle.className = 'tile is-child is-12 has-text-centered';
    casesActiveTitle.textContent = "Active Cases:";
    var casesActive = document.createElement('h4');
    countriesList.appendChild(casesActive);
    casesActive.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesActive.textContent = formatter.format(data.response[0].cases.active);

    var casesTotalTitle = document.createElement('h3');
    countriesList.appendChild(casesTotalTitle);
    casesTotalTitle.className = 'tile is-child is-12 has-text-centered';
    casesTotalTitle.textContent = "Total Cases:";
    var casesTotal = document.createElement('h4');
    countriesList.appendChild(casesTotal);
    casesTotal.className = 'tile is-child is-12 has-text-centered has-text-warning-dark';
    casesTotal.textContent = formatter.format(data.response[0].cases.total);

    var deathsNewTitle = document.createElement('h3');
    countriesList.appendChild(deathsNewTitle);
    deathsNewTitle.className = 'tile is-child is-12 has-text-centered';
    deathsNewTitle.textContent = "New Deaths:";
    var deathsNew = document.createElement('h4');
    countriesList.appendChild(deathsNew);
    deathsNew.className = 'tile is-child is-12 has-text-centered has-text-danger';
    deathsNew.textContent = formatter.format(data.response[0].deaths.new);

    var deathsTotalTitle = document.createElement('h3');
    countriesList.appendChild(deathsTotalTitle);
    deathsTotalTitle.className = 'tile is-child is-12 has-text-centered';
    deathsTotalTitle.textContent = "Total Deaths:";
    var deathsTotal = document.createElement('h4');
    countriesList.appendChild(deathsTotal);
    deathsTotal.className = 'tile is-child is-12 has-text-centered has-text-danger';
    deathsTotal.textContent = formatter.format(data.response[0].deaths.total);
  })
  .catch(err => {
    console.error(err);
  });
};


function searchStates() {
  fetch('https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US', {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "3e4fbce55emsh647009860a0e650p167679jsnce67625c67a4"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    var stateTitle = document.createElement('h3');
    stateSearch.appendChild(stateTitle);
    stateTitle.className = 'tile is-child is-12 has-text-centered';
    stateTitle.textContent = "US Stats by Region";
    for (var i = 0; i < data.data.length; i++) {
      var stateListTitle = document.createElement('h4');
      stateSearch.appendChild(stateListTitle);
      stateListTitle.className = 'tile is-child is-12 has-text-centered';
      stateListTitle.textContent = "Region Name:";
      var stateList = document.createElement('p');
      stateSearch.appendChild(stateList);
      stateList.className = 'tile is-child is-12 has-text-centered has-text-link';
      stateList.textContent = data.data[i].region.province;
      var deathsByStateTitle = document.createElement('h4');
      stateSearch.appendChild(deathsByStateTitle);
      deathsByStateTitle.className = 'tile is-child is-12 has-text-centered';
      deathsByStateTitle.textContent = "Deaths:";
      var deathsByState = document.createElement('p');
      stateSearch.appendChild(deathsByState);
      deathsByState.className = 'tile is-child is-12 has-text-centered has-text-danger';
      deathsByState.textContent = data.data[i].deaths;
      var fatalityByStateRateTitle = document.createElement('h4');
      stateSearch.appendChild(fatalityByStateRateTitle);
      fatalityByStateRateTitle.className = 'tile is-child is-12 has-text-centered';
      fatalityByStateRateTitle.textContent = "Fatality Rate:";
      var fatalityByStateRate = document.createElement('p');
      stateSearch.appendChild(fatalityByStateRate);
      fatalityByStateRate.className = 'tile is-child is-12 has-text-centered has-text-danger';
      fatalityByStateRate.textContent = data.data[i].fatality_rate;
    }
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