//alert('great success');

var msg;
var level = prompt('what level are you on?');

// Determine msg based on level attained
switch (level) {
case 1:
	msg = 'Good luch on the first test.';
	break;

case 2:
	msg = 'Second test';
	break;

case 3:
	msg = 'third test';
	break;

default:
	msg = 'default test';
	break;
}

var el = document.getElementById('answer');
el.textContent = msg;