const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;



function recursiveSigma(num) {
    if (num <= 0){
        return 0
    }
    else {
        console.log(num);
        return num+ recursiveSigma(Math.floor(num-1))
    }
}

console.log(recursiveSigma(num1));