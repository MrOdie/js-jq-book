//Immediately invoked function to create hotel object
(function() {
	// create hotel object and write out details
	var hotel = {
		name: 'Park',
		roomRate: 240, //dollar amount
		discount: 15, // percent discount
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};


//write out hotel name, standard and special rates

//declare variables
var hotelName, roomRate, specialRate;

//assign out variables
hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

//write out hotel name, standard and special rates
hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();

//part two: calculate and write out expiry dates, etc
var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	//delcare variable within the function
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	//add 7 days time (in milliseconds)
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	// create arrays to store days of week/month
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
	//collect parts of date to show on page
	day = dayNames[weekFromToday.getDay()];
	console.log(day);
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	console.log(month);
	year = weekFromToday.getFullYear();
	//create message
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br> (' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());