//alert('great success');

var pass = 50;
var score = prompt('what was your score?');
var msg;

if (score > pass) {
	msg = 'Congrats, you passed';
} else {
	msg = 'You suck.';
}

var el = document.getElementById('answer');
el.textContent = msg;