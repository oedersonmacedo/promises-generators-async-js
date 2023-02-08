function sum(a, b) {
    return a + b;
}
const result = sum(2, 2);
console.log(result);
// expect output: 4

function delayedSum(a, b) {
    setTimeout(function() {
        return a + b;
    }, 1000);
}

const resultDelayed = delayedSum(2, 2);
console.log(resultDelayed);
// expect output: undefined