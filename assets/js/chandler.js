// Movies section

var inputEl = document.createElement("input");
var buttonEl = document.createElement("button");
var movieEl = document.createElement("div");

left.appendChild(inputEl);
left.appendChild(buttonEl);
left.appendChild(movieEl);

inputEl.setAttribute("placeholder", "Find Movies");
buttonEl.textContent = "Search";
//Find movies
function getMovies() {
  movieEl.innerHTML = "";
  var moviesSearch = inputEl.value;
  fetch("https://imdb8.p.rapidapi.com/title/find?q=" + moviesSearch, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "fcf1d86f53mshed2a791c0ac3101p14b521jsn848124570e2d",
    },
  })
    //Find response
    .then((response) => {
      return response.json();
    })
    //Pull data
    .then((data) => {
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].titleType === "movie") {
          var moviesName = document.createElement("h2");
          var moviesYear = document.createElement("p");
          var moviesTime = document.createElement("h3");
          var moviesPoster = document.createElement("img");
          var url = data.results[i].image.url;

          moviesPoster.setAttribute("src", url);
          moviesName.textContent = "Movie Name = " + data.results[i].title;
          moviesYear.textContent = "Year Made = " + data.results[i].year;
          moviesTime.textContent =
            "Length = " + data.results[i].runningTimeInMinutes;

          movieEl.appendChild(moviesPoster);
          movieEl.appendChild(moviesName);
          movieEl.appendChild(moviesYear);
          movieEl.appendChild(moviesTime);
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
//Button
buttonEl.addEventListener("click", function () {
  getMovies();
});
