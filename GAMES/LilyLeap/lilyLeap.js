let frog, lilypads;

function preload() {
	frog = new Sprite();
	lilypads = new Group();
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	makeLilyPads();
}

function makeLilyPads() {
	/* Part A: Use a loop to make more lily pads. */
	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = i * 16;

		let num = random(1, 100);
		if (num < 50) {
			i++;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);
	if (frog.y > 83 && frog.velocity.y <= 0) {
		frog.x = round(frog.x / 16) * 16;
		if (kb.presses('ArrowUp')) {
			// little jump
			frog.velocity.y = -1.4;
			frog.velocity.x = 0.975;
		} else if (kb.presses('ArrowRight')) {
			// BIG jump!
			frog.velocity.y = -2;
			frog.velocity.x = 1.4;
		}
	}
	camera.x = frog.x + 64;
}
