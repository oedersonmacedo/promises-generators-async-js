function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        await sum(2);
    } catch (e) {
        console.log(e);
        // expect output: 'Invalid input'
    }
})();
