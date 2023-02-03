const num1 = 3;
const expected1 = 6; // 3*2*1 = 6
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;


function factorial(n) {
    if(isNaN(parseInt(n))) {
        return 'not a number';
    }
    n = Math.floor(n);
    if(n === 0) {
        return 1;
    }
    return n * factorial(n-1)
}
console.log(factorial(num1))
console.log(factorial(num2))
console.log(factorial(num3))
console.log(factorial('bob'))