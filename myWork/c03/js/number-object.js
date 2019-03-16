var originalNumber = Math.PI;

var msg = '<h2>original number</h2>' + originalNumber + '</p>';
msg += '<h2> 3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2> 3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;