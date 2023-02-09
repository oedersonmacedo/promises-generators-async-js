function* forever() {
	let value = 1;
	while (true) {
		yield value++;
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();

console.log(foreverGenerator.next());
// expect output: { value: 1, done: false }

console.log(foreverGenerator.next());
// expect output: { value: 2, done: false }

console.log(foreverGenerator.next());
// expect output: { value: 3, done: false }

today();
// expect output:  print today YYYY-MM-DDTHH:mm:ss.mmmZ

console.log(foreverGenerator.next());
// expect output: { value: 4, done: false }

console.log(foreverGenerator.next());
// expect output: { value: 5, done: false }