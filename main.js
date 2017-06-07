$(document).ready(function(){

// input from user
var inputs = [""];

// current result of user input calculation
var totalString;

// operator array for validation without "."
var operators1 = ["+", "-", "/", "*"];

// operator array for validatrion with "."
var operators2 = ["."];

// numbers for validation
var nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input) {

	// validate input - can't end with operator or period
	if (operators2.includes(inputs[inputs.length-1] === true && input === ".")) {
		console.log("Duplicate '.' ");
	}

	// validate input - can't start with operator
	else if (inputs.length === 1 && operators1.includes(inputs) === false) {
		inputs.push(input);
	}

	// validate input - can't have more than one operator together
	else if (operators1.includes(inputs[inputs.length-1]) === false) {
		inputs.push(input);
	}

	// check to add number to input
	else if (nums.includes(Number(input))) {
		inputs.push(input);
	}

	update();
}

// updates the results of the display for user
function update() {
	// join the input array and display for user
	totalString = inputs.join("");
	$("#result").html(totalString);
}

// evaluates total 
function getTotal() {
	totalString = inputs.join("");
	$("#result").html(eval(totalString));
}

// on click of buttons
$("h1").on("click", function() {

	if (this.id === "allClear") {
		inputs = [""];
		update();
	}

	// add pecentage and negative ifs here

	else if (this.id === "total") {
		getTotal();
	}

	else {

		if (inputs[inputs.length-1].indexOf("+", "-", "/", "*") === -1) {
			getValue(this.id);
		}

		else {
			getValue(this.id);
		}
	}

});


});