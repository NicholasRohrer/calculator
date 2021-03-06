$(document).ready(function(){

// input string from user
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
	if (operators2.includes(inputs[inputs.length-1]) === true && input === ".") {
		alert("Error: Can't have two ' . ' in a row.");
	}

	// validate input - can't have period and then operator
	else if (operators2.includes(inputs[inputs.length-1]) === true && operators1.includes(input) === true) {
		alert("Error: Incorrect Syntax. Can't have ' . ' and then operator.");
	}

	// validate input - can't start with operator
	else if (inputs.length === 1 && operators1.includes(input) === true) {
		alert("Error: Can't start with operator");
		return;
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

	else if (this.id === "%") {
		inputs.push("/100");
		totalString = inputs.join("");
		$("#result").html(eval(totalString));
	}
	
	else if (this.id === "negate") {
		inputs.push("*-1");
		totalString = inputs.join("");
		$("#result").html(eval(totalString));
	}

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