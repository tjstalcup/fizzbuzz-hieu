//Created and Edited by Hieu Nguyen.
//Create a function and also include a prompt command to ask the user.
function Fizzbuzz(){
	var inputValue = parseInt(prompt('Please enter a number, but please no decimals.'));//Create command and prompt to ask the user the instructions.
	var newValueTest = +inputValue;//Define inputValue with a new variable.

	if (isNaN(newValueTest)) {
		alert('Not a number, please refresh the webpage and enter a number only no demicals or negatives.'); // Not a valid number try again
	}

	else if (newValueTest % 1 !== 0) { //Apply a restriction rule stated on the assignment and also example on stackoverflow.
		alert('Do not use decimals. Please refresh page and enter a whole number.');//Apply alert to let the user know
	}
	//After creating the conditions then I can apply the for loop to 1 to 100 or more. Similar to the FizzBuzz original.
	//.append is from the website w3schools http://www.w3schools.com/jquery/html_append.asp
	else for (var i = 1; i <= newValueTest; i++) {
		if (i % 15 === 0) {
			$("body").append("<p> fizzbuzz </p>");
		}
		else if (i % 3 === 0) {
			$("body").append("<p> fizz </p>");
		}
		else if (i % 5 === 0) {
			$("body").append("<p> buzz </p>");
		}
		else {
			$("body").append("<p>" + i + "</p>");
		}
	}
}
//Apply the jQuery document ready function on the bottom since I had to define a few new conditions.
$(document).ready(function() {
Fizzbuzz();//call the defined function on the top after inserting a number of choice.
});