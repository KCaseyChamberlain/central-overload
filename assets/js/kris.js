// const { timeLog } = require("console");

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
}
covidStats();
searchStates();