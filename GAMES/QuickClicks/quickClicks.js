const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

const faketarget = `
 .d88d. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

/* Part A: find the range of row and column values the target can be placed at */
function makeTargets() {
	for (let fakeCount = 0; fakeCount < 4; fakeCount++) {
		let row = round(random(1, 23));
		let col = round(random(1, 72));
		button(faketarget, row, col);
	}
	let row = round(random(1, 23));
	let col = round(random(1, 72));
	button(target, row, col);
}

function start() {
	makeTargets();
}
