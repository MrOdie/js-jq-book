var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href="https://example.org">' + itemContent + '</a>';