function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
		yield;
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
// expect output: 1
// expect output: { value: undefined, done: false }

console.log(foreverGenerator.next());
// expect output: 2
// expect output: { value: undefined, done: false }


console.log(foreverGenerator.next());
// expect output: 3
// expect output: { value: undefined, done: false }

today();
// expect output: print today YYYY-MM-DDTHH:mm:ss.mmmZ

console.log(foreverGenerator.next());
// expect output: 4
// expect output: { value: undefined, done: false }

console.log(foreverGenerator.next());
// expect output: 5
// expect output: { value: undefined, done: false }