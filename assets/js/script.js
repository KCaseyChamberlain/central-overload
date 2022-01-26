const header = document.querySelector('#header');
header.className = 'has-text-danger is-size-1';
header.textContent = "Uhoo!";

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