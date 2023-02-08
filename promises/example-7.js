function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
// GENERATE ERROR
delayedSum().then(function(a) {
    delayedSum().then(function(b) {
        delayedSum().then(function(result) {
            console.log(result);
        }).catch(function (e) {
            console.log(e);
        });
    }).catch(function (e) {
        console.log(e);
    });
}).catch(function (e) {
    console.log(e);
    // expect output: 'Invalid input'
});
