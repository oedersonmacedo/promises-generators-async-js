function forever() {
	let value = 1;
	while (true) {
		console.log(value++);
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

// The system will be in a loop
forever();

// The system NEVER will be executed
today();
