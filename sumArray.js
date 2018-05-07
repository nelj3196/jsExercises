var arrayInput = [2, 2, 10, 2, 2];

function sumArray(sumArray) {
	var result = 0;
	for(var i = arrayInput.length -1; i >= 0; i--) {
		result += arrayInput[i];
	}
	console.log(result);
}

sumArray(arrayInput);
