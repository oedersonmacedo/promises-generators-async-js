function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
delayedSum(2, 2).then(function(a) {
    return delayedSum(4, 4).then(function(b) {
        return delayedSum().then(function(result) {
            console.log(result);
        });
    });
}).catch(function (e) {
    console.log(e);
    // expect output: 'Invalid input'
});