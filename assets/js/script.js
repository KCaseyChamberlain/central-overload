// Header starts here.
const header = document.querySelector("#header");
const day = document.querySelector("#day");
const time = document.querySelector("#time");
// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated.
var nowDay = moment().format("dddd MMMM Do YYYY");
var nowTime = moment().format("h:mm:ss a");
day.textContent = nowDay;
time.textContent = nowTime;
setInterval(function () {
  var nowDay = moment().format("dddd MMMM Do YYYY");
  var nowTime = moment().format("h:mm:ss a");
  day.textContent = nowDay;
  time.textContent = nowTime;
}, 1000);
// Header ends here.
// Main starts here.
const main = document.querySelector("#main");
main.className = "tile is-ancestor";

const left = document.createElement("div");
main.appendChild(left);


left.id = 'left';
left.className = 'tile is-parent is-2 box';
left.textContent = 'link'


const center = document.createElement("div");
main.appendChild(center);
center.id = "center";
center.className = "tile is-parent is-vertical is-8";

const right = document.createElement("div");
main.appendChild(right);

right.id = 'right';
right.className = 'tile is-parent is-2, is-vertical box';
right.textContent = "COVID-19 Stats by Yesterday";


// Main ends here.
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
}
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
      // getForecast(data.city);
    })
    .catch((err) => {
      console.error(err);
    });
}
user();
