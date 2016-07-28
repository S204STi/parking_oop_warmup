'use strict';

var ParkingLot = function(spaces) {
	this.spaces = spaces;
	this.occupiedState = [];
	this.available = 0;
	console.log("this.spaces",this.spaces);
};

ParkingLot.prototype.vacancies = function () {
	this.vacancies = this.spaces;
	this.available = this.vacancies;
	console.log("this.vacancies",this.available);
	return this.available;
};

ParkingLot.prototype.summary = function(){
	for(var i = 1; i <= this.spaces; i++){
		this.occupiedState.push("Position " + i + ":" + " (empty)");
	}
	console.log("this.summary",this.occupiedState);
	return this.occupiedState;
};

ParkingLot.prototype.park = function(plate){
	this.plate = plate;
	console.log("this.capacity",this.occupiedState);
	for(var i = 1; i <= this.spaces; i ++){
		this.occupiedState.push("Position ")
	}

	}

	this.available -= 1;
	return this.capacity;
};

module.exports = ParkingLot;

// for (var i = 1; i <= this.plate.length; i++){
// 	for this.summary.indexOf(i){
// 		this.summary[i].replace = ("Position " + i + ":" + "(" + this.plate + ")");
// 	}
// }
