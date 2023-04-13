async function start() {
	let message = 'BABEL';
	let encryptedMessage = '';
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let capAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < message.length; i++) {
		let character = message[i];

		// goes through the whole alphabet
		for (let j = 0; j <= 26; j++) {
			let letter = capAlphabet[j];

			if (character == letter) {
				encryptedMessage += capAlphabet[j + 1];
			}
		}
	}
	alert(encryptedMessage);
}
