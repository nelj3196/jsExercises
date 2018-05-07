
// Write a function isUniform() which takes an array as an argument
// and returns true if all elements in the array are identical

var myArray = [1, 1, 1, 1, 1, 1, 1, 1];
var isEqual =  myArray[0];


function isUniform(item) {
	for(var i = myArray.length -1; i >= 2; i--) {
		if(isEqual !== myArray[i]) {
			return false;
		}
		
	}
	return true;

}

isUniform(myArray);
