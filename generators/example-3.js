function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();

// The system will be in a loop
foreverGenerator.next();

// The system NEVER will be executed today
today();
