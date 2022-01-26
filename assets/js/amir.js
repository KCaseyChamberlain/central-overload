// Check to see if page is a secure context so service workers are available to get the current location.
if (window.isSecureContext) {
  navigator.serviceWorker.register("/offline-worker.js")
  .then(function () {
    const successCallback = (position) => {
      console.log(position);
    };
    const errorCallback = (error) => {
      console.error(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
} else {
  console.log("Page is not Secure!")
};
// Weather section starts here.
const weather = document.createElement('div');
center.appendChild(weather);
weather.id = 'weather';
weather.className = 'tile is-parent is-12 box';
weather.textContent = "Weather";

function getWeather() {
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=84020,us&appid=32ed05888dd11ce89460365fde5e625e';
  fetch(weatherUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log(data.name);
      console.log(data.main.temp/10);
    });
};
// Weather section ends here.
// News section starts here.
const news = document.createElement('div');
center.appendChild(news);
news.id = 'news';
news.className = 'tile is-parent is-vertical box';
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

var news0Text = document.createElement('article');
news0.appendChild(news0Text);
news0Text.className = 'title tile is-child';

var news0Source = document.createElement('a');
news0.appendChild(news0Source);
news0Source.setAttribute('target', '_blank');
news0Source.className = 'tile is-child';
// News 0 ends.
// News 1 starts.
const news1 = document.createElement('div');
news0To2.appendChild(news1);
news1.className = 'tile is-parent is-vertical is-4';

var news1Image = document.createElement('img');
news1.appendChild(news1Image);
news1Image.className = 'tile is-child';

var news1Text = document.createElement('article');
news1.appendChild(news1Text);
news1Text.className = 'title tile is-child';

var news1Source = document.createElement('a');
news1.appendChild(news1Source);
news1Source.setAttribute('target', '_blank');
news1Source.className = 'tile is-child';
// News 1 ends.
// News 2 starts.
const news2 = document.createElement('div');
news0To2.appendChild(news2);
news2.className = 'tile is-parent is-vertical is-4';

var news2Image = document.createElement('img');
news2.appendChild(news2Image);
news2Image.className = 'tile is-child';

var news2Text = document.createElement('article');
news2.appendChild(news2Text);
news2Text.className = 'title tile is-child';

var news2Source = document.createElement('a');
news2.appendChild(news2Source);
news2Source.setAttribute('target', '_blank');
news2Source.className = 'tile is-child';
// News 2 ends.
// News 3 starts.
const news3 = document.createElement('div');
news3To5.appendChild(news3);
news3.className = 'tile is-parent is-vertical is-4';
news3.textContent = "News 3";

var news3Image = document.createElement('img');
news3.appendChild(news3Image);
news3Image.className = 'tile is-child';

var news3Text = document.createElement('article');
news3.appendChild(news3Text);
news3Text.className = 'title tile is-child';

var news3Source = document.createElement('a');
news3.appendChild(news3Source);
news3Source.setAttribute('target', '_blank');
news3Source.className = 'tile is-child';
// News 3 ends.
// News 4 starts.
const news4 = document.createElement('div');
news3To5.appendChild(news4);
news4.className = 'tile is-parent is-vertical is-4';
news4.textContent = "News 4";

var news4Image = document.createElement('img');
news4.appendChild(news4Image);
news4Image.className = 'tile is-child';

var news4Text = document.createElement('article');
news4.appendChild(news4Text);
news4Text.className = 'title tile is-child';

var news4Source = document.createElement('a');
news4.appendChild(news4Source);
news4Source.setAttribute('target', '_blank');
news4Source.className = 'tile is-child';
// News 4 ends.
// News 5 starts.
const news5 = document.createElement('div');
news3To5.appendChild(news5);
news5.className = 'tile is-parent is-vertical is-4';
news5.textContent = "News 5";

var news5Image = document.createElement('img');
news5.appendChild(news5Image);
news5Image.className = 'tile is-child';

var news5Text = document.createElement('article');
news5.appendChild(news5Text);
news5Text.className = 'title tile is-child';

var news5Source = document.createElement('a');
news5.appendChild(news5Source);
news5Source.setAttribute('target', '_blank');
news5Source.className = 'tile is-child';
// News 5 ends.
// News 6 starts.
const news6 = document.createElement('div');
news6To8.appendChild(news6);
news6.className = 'tile is-parent is-vertical is-4';
news6.textContent = "News 6";

var news6Image = document.createElement('img');
news6.appendChild(news6Image);
news6Image.className = 'tile is-child';

var news6Text = document.createElement('article');
news6.appendChild(news6Text);
news6Text.className = 'title tile is-child';

var news6Source = document.createElement('a');
news6.appendChild(news6Source);
news6Source.setAttribute('target', '_blank');
news6Source.className = 'tile is-child';
// News 6 ends.
// News 7 starts.
const news7 = document.createElement('div');
news6To8.appendChild(news7);
news7.className = 'tile is-parent is-vertical is-4';
news7.textContent = "News 7";

var news7Image = document.createElement('img');
news7.appendChild(news7Image);
news7Image.className = 'tile is-child';

var news7Text = document.createElement('article');
news7.appendChild(news7Text);
news7Text.className = 'title tile is-child';

var news7Source = document.createElement('a');
news7.appendChild(news7Source);
news7Source.setAttribute('target', '_blank');
news7Source.className = 'tile is-child';
// News 7 ends.
// News 8 starts.
const news8 = document.createElement('div');
news6To8.appendChild(news8);
news8.className = 'tile is-parent is-vertical is-4';
news8.textContent = "News 8";

var news8Image = document.createElement('img');
news8.appendChild(news8Image);
news8Image.className = 'tile is-child';

var news8Text = document.createElement('article');
news8.appendChild(news8Text);
news8Text.className = 'title tile is-child';

var news8Source = document.createElement('a');
news8.appendChild(news8Source);
news8Source.setAttribute('target', '_blank');
news8Source.className = 'tile is-child';
// News 8 ends.
function getNews() {
  fetch("https://free-news.p.rapidapi.com/v1/search?q=trump&lang=en", {
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
    console.log(data);

    news0Image.setAttribute('src', data.articles[0].media);
    news0Text.textContent = data.articles[0].title;
    news0Source.textContent = data.articles[0].link;
    news0Source.setAttribute('href', data.articles[0].link);

    news1Image.setAttribute('src', data.articles[1].media);
    news1Text.textContent = data.articles[1].title;
    news1Source.textContent = data.articles[1].link;
    news1Source.setAttribute('href', data.articles[1].link);

    news2Image.setAttribute('src', data.articles[2].media);
    news2Text.textContent = data.articles[2].title;
    news2Source.textContent = data.articles[2].link;
    news2Source.setAttribute('href', data.articles[2].link);

    news3Image.setAttribute('src', data.articles[3].media);
    news3Text.textContent = data.articles[3].title;
    news3Source.textContent = data.articles[3].link;
    news3Source.setAttribute('href', data.articles[3].link);

    news4Image.setAttribute('src', data.articles[4].media);
    news4Text.textContent = data.articles[4].title;
    news4Source.textContent = data.articles[4].link;
    news4Source.setAttribute('href', data.articles[4].link);

    news5Image.setAttribute('src', data.articles[5].media);
    news5Text.textContent = data.articles[5].title;
    news5Source.textContent = data.articles[5].link;
    news5Source.setAttribute('href', data.articles[5].link);

    news6Image.setAttribute('src', data.articles[6].media);
    news6Text.textContent = data.articles[6].title;
    news6Source.textContent = data.articles[6].link;
    news6Source.setAttribute('href', data.articles[6].link);

    news7Image.setAttribute('src', data.articles[7].media);
    news7Text.textContent = data.articles[7].title;
    news7Source.textContent = data.articles[7].link;
    news7Source.setAttribute('href', data.articles[7].link);

    news8Image.setAttribute('src', data.articles[8].media);
    news8Text.textContent = data.articles[8].title;
    news8Source.textContent = data.articles[8].link;
    news8Source.setAttribute('href', data.articles[8].link);
  })
  .catch(err => {
	  console.error(err);
})};
// News section ends here.
getWeather();
getNews();