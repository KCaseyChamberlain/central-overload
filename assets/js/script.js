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
  fetch("https://imdb8.p.rapidapi.com/title/find?q=" + movieTitle, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "fcf1d86f53mshed2a791c0ac3101p14b521jsn848124570e2d",
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
        movies.className = 'tile is-child is-12'
        var moviesPoster = document.createElement('img');
        movies.appendChild(moviesPoster);
        moviesPoster.setAttribute("src", data.results[i].image.url);
        var moviesName = document.createElement('p');
        movies.appendChild(moviesName);
        moviesName.textContent = "Name: " + data.results[i].title;
        if (data.results[i].year == "" || data.results[i].year == null) {
          console.log(data.results[i].title + " Has Undefined Year!")
        } else {
          var moviesYear = document.createElement('p');
          movies.appendChild(moviesYear);
          moviesYear.textContent = "Year: " + data.results[i].year;
        }
        if (data.results[i].runningTimeInMinutes == "" || data.results[i].runningTimeInMinutes == null) {
          console.log(data.results[i].title + " Has Undefined Length!")
        } else {
          var moviesTime = document.createElement('p');
          movies.appendChild(moviesTime);          
          moviesTime.textContent = "Length: " + data.results[i].runningTimeInMinutes + " Minutes";
        }
        if (data.results[i].principals == "" || data.results[i].principals == null) {
          console.log(data.results[i].title + " Has Undefined Stars!")
        } else {
          var principals = document.createElement('div');
          movies.appendChild(principals);
          principals.textContent = "Stars:";
          for (var x = 0; x < data.results[i].principals.length; x++) {
            var principal = document.createElement('p');
            principals.appendChild(principal);
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
const news0To2 = document.createElement('div');
news.appendChild(news0To2);
news0To2.id = 'news0To2';
news0To2.className = 'tile is-parent';
const news3To5 = document.createElement('div');
news.appendChild(news3To5);
news3To5.id = 'news3To5';
news3To5.className = 'tile is-parent';
const news6To8 = document.createElement('div');
news.appendChild(news6To8);
news6To8.id = 'news6To8';
news6To8.className = 'tile is-parent';
// News 0 starts.
const news0 = document.createElement('div');
news0To2.appendChild(news0);
news0.className = 'tile is-parent is-vertical is-4';
var news0Image = document.createElement('img');
news0.appendChild(news0Image);
news0Image.className = 'tile is-child';
var news0Source = document.createElement('p');
news0.appendChild(news0Source);
news0Source.className = 'tile is-child';
var news0Text = document.createElement('a');
news0.appendChild(news0Text);
news0Text.setAttribute('target', '_blank');
news0Text.className = 'title tile is-child';
// News 0 ends.
// News 1 starts.
const news1 = document.createElement('div');
news0To2.appendChild(news1);
news1.className = 'tile is-parent is-vertical is-4';
var news1Image = document.createElement('img');
news1.appendChild(news1Image);
news1Image.className = 'tile is-child';
var news1Source = document.createElement('p');
news1.appendChild(news1Source);
news1Source.className = 'tile is-child';
var news1Text = document.createElement('a');
news1.appendChild(news1Text);
news1Text.setAttribute('target', '_blank');
news1Text.className = 'title tile is-child';
// News 1 ends.
// News 2 starts.
const news2 = document.createElement('div');
news0To2.appendChild(news2);
news2.className = 'tile is-parent is-vertical is-4';
var news2Image = document.createElement('img');
news2.appendChild(news2Image);
news2Image.className = 'tile is-child';
var news2Source = document.createElement('p');
news2.appendChild(news2Source);
news2Source.className = 'tile is-child';
var news2Text = document.createElement('a');
news2.appendChild(news2Text);
news2Text.setAttribute('target', '_blank');
news2Text.className = 'title tile is-child';
// News 2 ends.
// News 3 starts.
const news3 = document.createElement('div');
news3To5.appendChild(news3);
news3.className = 'tile is-parent is-vertical is-4';
var news3Image = document.createElement('img');
news3.appendChild(news3Image);
news3Image.className = 'tile is-child';
var news3Source = document.createElement('p');
news3.appendChild(news3Source);
news3Source.className = 'tile is-child';
var news3Text = document.createElement('a');
news3.appendChild(news3Text);
news3Text.setAttribute('target', '_blank');
news3Text.className = 'title tile is-child';
// News 3 ends.
// News 4 starts.
const news4 = document.createElement('div');
news3To5.appendChild(news4);
news4.className = 'tile is-parent is-vertical is-4';
var news4Image = document.createElement('img');
news4.appendChild(news4Image);
news4Image.className = 'tile is-child';
var news4Source = document.createElement('p');
news4.appendChild(news4Source);
news4Source.className = 'tile is-child';
var news4Text = document.createElement('a');
news4.appendChild(news4Text);
news4Text.setAttribute('target', '_blank');
news4Text.className = 'title tile is-child';
// News 4 ends.
// News 5 starts.
const news5 = document.createElement('div');
news3To5.appendChild(news5);
news5.className = 'tile is-parent is-vertical is-4';
var news5Image = document.createElement('img');
news5.appendChild(news5Image);
news5Image.className = 'tile is-child';
var news5Source = document.createElement('p');
news5.appendChild(news5Source);
news5Source.className = 'tile is-child';
var news5Text = document.createElement('a');
news5.appendChild(news5Text);
news5Text.setAttribute('target', '_blank');
news5Text.className = 'title tile is-child';
// News 5 ends.
// News 6 starts.
const news6 = document.createElement('div');
news6To8.appendChild(news6);
news6.className = 'tile is-parent is-vertical is-4';
var news6Image = document.createElement('img');
news6.appendChild(news6Image);
news6Image.className = 'tile is-child';
var news6Source = document.createElement('p');
news6.appendChild(news6Source);
news6Source.className = 'tile is-child';
var news6Text = document.createElement('a');
news6.appendChild(news6Text);
news6Text.setAttribute('target', '_blank');
news6Text.className = 'title tile is-child';
// News 6 ends.
// News 7 starts.
const news7 = document.createElement('div');
news6To8.appendChild(news7);
news7.className = 'tile is-parent is-vertical is-4';
var news7Image = document.createElement('img');
news7.appendChild(news7Image);
news7Image.className = 'tile is-child';
var news7Source = document.createElement('p');
news7.appendChild(news7Source);
news7Source.className = 'tile is-child';
var news7Text = document.createElement('a');
news7.appendChild(news7Text);
news7Text.setAttribute('target', '_blank');
news7Text.className = 'title tile is-child';
// News 7 ends.
// News 8 starts.
const news8 = document.createElement('div');
news6To8.appendChild(news8);
news8.className = 'tile is-parent is-vertical is-4';
var news8Image = document.createElement('img');
news8.appendChild(news8Image);
news8Image.className = 'tile is-child';
var news8Source = document.createElement('p');
news8.appendChild(news8Source);
news8Source.className = 'tile is-child';
var news8Text = document.createElement('a');
news8.appendChild(news8Text);
news8Text.setAttribute('target', '_blank');
news8Text.className = 'title tile is-child';
// News 8 ends.
function getNews() {
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
    news0Image.setAttribute('src', data.articles[0].media);
    news0Source.textContent = data.articles[0].clean_url;
    news0Text.textContent = data.articles[0].title;
    news0Text.setAttribute('href', data.articles[0].link);

    news1Image.setAttribute('src', data.articles[1].media);
    news1Source.textContent = data.articles[1].clean_url;
    news1Text.textContent = data.articles[1].title;
    news1Text.setAttribute('href', data.articles[1].link);

    news2Image.setAttribute('src', data.articles[2].media);
    news2Source.textContent = data.articles[2].clean_url;
    news2Text.textContent = data.articles[2].title;
    news2Text.setAttribute('href', data.articles[2].link);

    news3Image.setAttribute('src', data.articles[3].media);
    news3Source.textContent = data.articles[3].clean_url;
    news3Text.textContent = data.articles[3].title;
    news3Text.setAttribute('href', data.articles[3].link);

    news4Image.setAttribute('src', data.articles[4].media);
    news4Source.textContent = data.articles[4].clean_url;
    news4Text.textContent = data.articles[4].title;
    news4Text.setAttribute('href', data.articles[4].link);

    news5Image.setAttribute('src', data.articles[5].media);
    news5Source.textContent = data.articles[5].clean_url;
    news5Text.textContent = data.articles[5].title;
    news5Text.setAttribute('href', data.articles[5].link);

    news6Image.setAttribute('src', data.articles[6].media);
    news6Source.textContent = data.articles[6].clean_url;
    news6Text.textContent = data.articles[6].title;
    news6Text.setAttribute('href', data.articles[6].link);

    news7Image.setAttribute('src', data.articles[7].media);
    news7Source.textContent = data.articles[7].clean_url;
    news7Text.textContent = data.articles[7].title;
    news7Text.setAttribute('href', data.articles[7].link);

    news8Image.setAttribute('src', data.articles[8].media);
    news8Source.textContent = data.articles[8].clean_url;
    news8Text.textContent = data.articles[8].title;
    news8Text.setAttribute('href', data.articles[8].link);
  })
  .catch(err => {
	  console.error(err);
})};
// News section ends here.

// Covid-19 stats starts here.
var yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
var covid = document.createElement('div');
rightSide.appendChild(covid);
covid.className = 'tile is-child';

function covidStats() {

  fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date=" + yesterday, {
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
      var deathsTitle = document.createElement('h4');
      covid.appendChild(deathsTitle);
      deathsTitle.textContent = "Deaths:  ";
      var deaths = document.createElement('div')
      covid.appendChild(deaths);
      deaths.textContent = data.data.deaths;

      var fatalityRateTitle = document.createElement('h4');
      covid.appendChild(fatalityRateTitle);
      fatalityRateTitle.textContent = "Fatality Rate:  ";

      var fatalityRate = document.createElement('div')
      covid.appendChild(fatalityRate);
      fatalityRate.textContent = data.data.fatality_rate;
    })

    .catch(err => {
      console.error(err);
    });
};

function searchStates() {
  fetch("https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US&date=" + yesterday, {
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
      for (var i = 0; i < data.data.length; i++) {
        var stateListTitle = document.createElement('h4');
        covid.appendChild(stateListTitle);
        stateListTitle.textContent = "Region Name:  ";

        var stateList = document.createElement('h4')
        covid.appendChild(stateList);
        stateList.id = 'state-list';
        stateList.textContent = data.data[i].region.province;

        var deathsByStateTitle = document.createElement('h4');
        covid.appendChild(deathsByStateTitle);
        deathsByStateTitle.textContent = "Deaths:  ";

        var deathsByState = document.createElement('p')
        covid.appendChild(deathsByState);
        deathsByState.className = 'dbs';
        deathsByState.textContent = data.data[i].deaths;

        var fatalityByStateRateTitle = document.createElement('h4');
        covid.appendChild(fatalityByStateRateTitle);
        fatalityByStateRateTitle.textContent = "Fatality Rate:  ";

        var fatalityByStateRate = document.createElement('p')
        covid.appendChild(fatalityByStateRate);
        fatalityByStateRate.className = 'dbs';
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
covidStats();
searchStates();