// const { timeLog } = require("console");

var yesterday = moment().subtract(1,'days').format('YYYY-MM-DD')
var covid=document.createElement('div')
right.appendChild(covid)
covid.className = 'tile is-child';

function covidStats(){

fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date="+yesterday, {
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

var datelabel=document.createElement('div')
covid.appendChild(datelabel);
datelabel.textContent = 'Date:';
datelabel.setAttribute('class', 'subtitle')

var date=document.createElement('div')
covid.appendChild(date);
date.textContent = data.data.date;
date.setAttribute('class', 'title')

var deaths=document.createElement('div')
covid.appendChild(deaths);
deaths.textContent = data.data.deaths;


var fatality_rate=document.createElement('div')
covid.appendChild(fatality_rate);
fatality_rate.textContent = data.data.fatality_rate;

var recovered=document.createElement('div')
covid.appendChild(recovered);
recovered.textContent = data.data.recovered;
})


.catch(err => {
	console.error(err);
});
};
 covidStats();