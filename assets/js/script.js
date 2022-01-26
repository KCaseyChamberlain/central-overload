// Header starts here.
const header = document.querySelector('#header');
const time = document.querySelector('#time');
// this code block does two thing, it first shows the current date and time then refreshes the time every second so our time display line stays updated.
var now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
time.textContent = now;
setInterval(function() {
  now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
  time.textContent = now;
}, 1000);
// Header ends here.
// Main starts here.
const main = document.querySelector('#main');
main.className = 'tile is-ancestor';

const left = document.createElement('div');
main.appendChild(left);
left.id = 'left';
left.className = 'tile is-parent is-2 box';
left.textContent = "Left";

const center = document.createElement('div');
main.appendChild(center);
center.id = 'center';
center.className = 'tile is-parent is-vertical is-8';

const right = document.createElement('div');
main.appendChild(right);
right.id = 'right';
right.className = 'tile is-parent is-2 box';
right.textContent = "Right";
// Main ends here.