function max(input) {
 var maxNum = 0;
 for(var i = 0; i < input.length; i++) {
     if(maxNum < input[i]) {
         maxNum = input[i];
     	}
    }
  	return maxNum;
}
max([1, 2, 3, 7]);
