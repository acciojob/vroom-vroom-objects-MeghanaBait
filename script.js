// Complete the js code
function Car(make, model) {
	getMakeModel(){
		return make + " "+ model;
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	getTopSpeed(){
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
