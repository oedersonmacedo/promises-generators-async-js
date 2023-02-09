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
console.log(foreverGenerator);
// expect output: Object [Generator] {}

console.log(typeof foreverGenerator);
// expect output: object

console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__));
// expect output: [ 'constructor', 'next', 'return', 'throw' ]

today();
// expect output: print today YYYY-MM-DDTHH:mm:ss.mmmZ