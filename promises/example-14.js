function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
Promise.allSettled([
    delayedSum(2, 2),
    delayedSum(4, 4),
    delayedSum()
]).then(function(results) {
    console.log(results);
    // expect output: 
    // [
    //     { status: 'fulfilled', value: 4 },
    //     { status: 'fulfilled', value: 8 },
    //     { status: 'rejected', reason: 'Invalid input' }
    // ]
})