// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	let num = round(random(1, 100));
	let guess;

	while (guess != num) {
		guess = await prompt('guess a number 1 to 100');
		if (guess == num) {
			await alert('Correct');
		} else if (guess > num) {
			await alert('Your guess is too high');
		} else if (guess < num) {
			await alert('your guess is too low');
		}
	}

	exit(); // this function exits the game
} // end
