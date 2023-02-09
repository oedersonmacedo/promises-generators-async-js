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
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ];
        const results = [];
        functions.forEach(async function(fn) {
            const result = await fn;
            console.log('result: ' + result);
            results.push(result);
        });
        const [a,b] = results; 
        // results = undefined

        const result = await sum(a, b); // Here generate error ('Invalid input')
        console.log(result);
        // NOT PRINT
    } catch (e) {
        console.log(e);
        // expect output: 'Invalid input'
    }
})();
// expect output: 'result: 4'
// expect output: 'result: 8'