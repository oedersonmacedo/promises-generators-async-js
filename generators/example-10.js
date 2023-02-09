function* forever() {
	let value = 1;
	while (true) {
        let reset = yield value++;
        if (reset) value = 1;
	}
}

function today() {
	let date = new Date();
	console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.throw("error"));
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
