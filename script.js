
// seting variables
let firstNumber = [];
let secondNumber = [];
let operator = '';
let output = [];
let result = 0;
let number1 = 0;
let number2 = 0;
let operatorsCount = 0
let dotsCount = 0
const displayResult = document.getElementById("span")

//displaying numbers

function display(value) {
	operatorsCount = 0
	output.push(value)
	displayResult.textContent = output.join('')
}

//displaying operators
function displayOperators(value) {
	dotsCount = 0
	if (output.length === 0 && value !== ' - ') {
		operatorsCount += 0
	} else {
		operatorsCount ++
		if (operatorsCount > 1.1) {
			operatorsCount += 0
		} else if (operatorsCount < 1.1) {
			output.push(value)
			displayResult.textContent = output.join('')
		}
	}	
}

//displaying dots
function displayDots(value) {
	if (output.length === 0 || typeof output[output.length - 1] === "string") {
		dotsCount += 0
	} else {
		dotsCount ++
		if (dotsCount > 1.1) {
			dotsCount += 0
		} else if (dotsCount < 1.1) {
			output.push(value)
			displayResult.textContent = output.join('')
		}
	}	
}

// clear all variables and output
function clearFunction() {
	firstNumber = [];
		secondNumber = [];
		operator = '';
		output = [];
		result = 0;
		number1 = 0;
		number2 = 0;
		operatorsCount = 0
		dotsCount = 0

		output.splice(0, output.length - 1)
		displayResult.textContent = output.join('')
	}

//count function 
function equal() {
	for (let i = 1; i < output.length; i++) {
		if (isNaN(output[i]) && output[i] !== '.') {
			operator = output[i]
			secondNumber = output.splice(i, output.length - i)
			secondNumber.shift()
			firstNumber = output
		} else {continue}
	}

	console.log(secondNumber)
	let firstNumberCombined = firstNumber.join('')
	let secondNumberCombined = secondNumber.join('')

	number1 = parseFloat(firstNumberCombined.replace(/\s/g, ''))
	number2 = parseFloat(secondNumberCombined.replace(/\s/g, ''))

	if (operator === ' / ') {
		result = number1 / number2
		output = []
		display(result.toFixed(2))
	} else if (operator === ' + ') {
		result = number1 + number2
		output = []
		display(result.toFixed(2))
	} else if (operator === ' - '){
		result = number1 - number2
		output = []
		display(result.toFixed(2))
	} else if (operator === ' * ') {
		result = number1 * number2
		output = []
		display(result.toFixed(2))
	}
}

//buttons functions
const seven = function () {
	display(7);
}

const eight = function () {
	display(8);
}

const nine = function () {
	display(9);
}

const divide = function() {
	displayOperators(' / '); 
}

const four = function () {
	display(4);
}

const five = function () {
	display(5);
}

const six = function () {
	display(6);
}

const multiply = function () {
	displayOperators(' * ');
}

const one = function () {
	display(1);
}

const two = function () {
	display(2);
}

const three = function () {
	display(3);
}

const subtract = function () {
	displayOperators(' - ');
}

const zero = function () {
	display(0);
}

const dot = function () {
	displayDots('.');
}

const add = function () {
	displayOperators(' + ');
}
