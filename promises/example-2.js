function delayedSum(a, b, callback) {
    setTimeout(function() {
        callback(a + b);
    }, 1000);
}

delayedSum(2, 2, function(result) {
    console.log(result);
    // expect output: 4
});