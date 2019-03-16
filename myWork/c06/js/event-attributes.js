// alert('success');

function checkUsername() {
	var elMsg = document.getElementById('feedback');
	var elUsername = document.getElementById('username');
	if (elUsername.value.length < 5) {
		elMsg.textContent = 'Username must be atleast 5 characters long, though preferrably longer';
	} else {
		elMsg.textContent = '';
	}
}