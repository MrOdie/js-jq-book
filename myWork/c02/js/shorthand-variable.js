var price 		= 5,
	quantity 	= 1468,
	total 		= price * quantity;

var el = document.getElementById('cost');
el.textContent = '
$ ' + total;