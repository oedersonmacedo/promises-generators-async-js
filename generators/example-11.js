function* forever() {
	let value = 1;
	while (true) {
        try {
            let reset = yield value++;
            if (reset) value = 1;
        } catch (e) {
            console.log(e);
        }
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
// expect output: 2023-02-09T18:28:36.695Z

console.log(foreverGenerator.throw("error"));
// expect output: 'error'
// expect output: { value: 4, done: false }

console.log(foreverGenerator.next(true));
// expect output: { value: 1, done: false }

console.log(foreverGenerator.next());
// expect output: { value: 2, done: false }
