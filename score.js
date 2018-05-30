var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// player 1 update score function
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;

	}
});

// player 2 update score function
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// reset button funciton
resetButton.addEventListener("click", function(){
	reset();
});

// reset
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

// Input field function
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
