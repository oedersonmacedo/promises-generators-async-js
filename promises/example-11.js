function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
Promise.all([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(values) {
    let [a, b] = values;
    return delayedSum().then(function(result) {
        console.log(result);
    });
}).catch(function (e) {
    console.log(e);
    // expect output: 'Invalid input'
});