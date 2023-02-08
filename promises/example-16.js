function delayedSum(a, b, timeout) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, timeout);
    });
}
Promise.race([
    delayedSum(2, 2, 1000),
    delayedSum(4, 4, 500),
    delayedSum()
]).then(function(results) {
    console.log(results);
}).catch(function(e) {
    console.log(e);
    // expect output: 'Invalid input'
})