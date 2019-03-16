//Template for the hotel object:
function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	}
}

//Create two new hotel objects
var quayHotel = new Hotel('Quay', 400, 137);
var parkHotel = new Hotel('Park', 197, 25);

//hotel 1
var details1 = quayHotel.name + ' rooms: ';
	details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

//hotel 2
var details2 = parkHotel.name + ' rooms: ';
	details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;