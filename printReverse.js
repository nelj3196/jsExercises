
// Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order.
// Note: Don't actually reverse the array itself.

var randomLetters = ["a", "b", "c", "d", "e"];

function printReverse(letter) {

	for(var i = randomLetters.length - 1; i >= 0; i--) {
		console.log(letter[i]);
	}
}

printReverse(randomLetters);
