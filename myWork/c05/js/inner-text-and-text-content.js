// alert('success');

var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

// Show content of each property.
var msg = '<p>textContent: ' + showTextContent + '</p>.';
msg += '<p>innerText: ' + showInnerText + '</p>.';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';