// This function picks a random number from 0 to 3;
function randNum() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	return randomNumber;
}

//This function gets computer choice ('Rock', 'Paper', 'Scissors') based on the random number
function getCopmuterChoice() {
	let compChoice = randNum();
	console.log('----------------------------');
	switch (compChoice) {
		case 1:
			return 'Rock';
			break;
		case 2:
			return 'Paper';
			break;
		case 3:
			return 'Scissors';
			break;
	}
}

let playerScore = 0;
let computerScore = 0;
let message = 'Result : ';

function play() {
	computerSelection = getCopmuterChoice();
	playerSelection = prompt('Rock, Paper or Scissors ?', '');

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
		alert('You calceled!');
		return 'You canceled';
	} else {
		alert('Choose Rock,Paper or Scissors!');
		return 'Choose Rock,Paper or Scissors';
	}
}

function game(n) {
	for (i = 0; i < n; i++) {
		console.log(play());
	}
}

game(5);

console.log('*** Final Result *** \n Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore);
