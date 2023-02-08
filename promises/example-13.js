function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, Math.random() * 1000);
    });
}
Promise.race([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(value) {
    return delayedSum(value, value).then(function(result) {
        console.log(result);
        // expect output: 8 or 16
    });
}).catch(function (e) {
    console.log(e);
});