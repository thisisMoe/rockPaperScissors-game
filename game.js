// This array store computer choices
var choices = [ 'Rock', 'Paper', 'Scissors' ];

// This function gets computer choice picking randomly from array;
function getCopmuterChoice() {
	var compChoice = choices[Math.floor(Math.random() * choices.length)];
	return compChoice;
}

let playerScore = 0;
let computerScore = 0;
let message = 'Result : ';

function play() {
	playerSelection = prompt('Rock, Paper or Scissors ?', '');
	computerSelection = getCopmuterChoice();

	console.log('Player choice: ' + playerSelection + ' ||');
	console.log('Computer choice: ' + computerSelection + ' ||');

	if (/rock/gi.test(playerSelection)) {
		// Used RegEx to test user input insensitively for 'rock'
		if (computerSelection == 'Rock') {
			return message + "Wow, That's a draw!!";
		} else if (computerSelection == 'Scissors') {
			playerScore++;
			return (
				message +
				'You Win !! ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' beats ' +
				computerSelection +
				'!'
			);
		} else {
			computerScore++;
			return (
				message +
				'You Lose! ' +
				computerSelection +
				' beats ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' !'
			);
		}
	} else if (/scissor|scissors/gi.test(playerSelection)) {
		//Used RegEx to test user input insensitively for 'scissor'
		if (computerSelection == 'Scissors') {
			return message + "Wow, That's a draw!!";
		} else if (computerSelection == 'Paper') {
			playerScore++;
			return (
				message +
				'You Win !! ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' beats ' +
				computerSelection +
				'!'
			);
		} else {
			computerScore++;
			return (
				message +
				'You Lose! ' +
				computerSelection +
				' beats ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' !'
			);
		}
	} else if (/paper/gi.test(playerSelection)) {
		// Used RegEx to test user input insensitively for 'paper'
		if (computerSelection == 'Paper') {
			return message + "Wow, That's a draw!!";
		} else if (computerSelection == 'Rock') {
			playerScore++;
			return (
				message +
				'You Win !! ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' beats ' +
				computerSelection +
				'!'
			);
		} else {
			computerScore++;
			return (
				message +
				'You Lose! ' +
				computerSelection +
				' beats ' +
				playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase() +
				' !'
			);
		}
	} else if (playerSelection == null) {
		console.log('------Canceled------');
		alert('You calceled!');
		return '***You canceled';
	} else {
		console.log('------Canceled------');
		alert('Choose Rock,Paper or Scissors!');
		return '***Choose Rock,Paper or Scissors';
	}
}

function game(n) {
	for (i = 0; i < n; i++) {
		console.log(play());
	}
}

game(5);

console.log('*** Final Result *** \n Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore);
