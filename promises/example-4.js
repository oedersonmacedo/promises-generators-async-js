function delayedSum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
delayedSum(2, 2).then(function(a) {
    delayedSum(4, 4).then(function(b) {
        delayedSum(a, b).then(function(result) {
            console.log(result);
            // expect output: 12
        });
    });
});
