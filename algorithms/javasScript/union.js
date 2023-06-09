/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];// return the distinct intersect numbers

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];


/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(sortedA, sortedB) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < sortedA.length && j < sortedB.length) {
        // if they are the same : i++ & j++ 
        // if newArr hasn't pushed that new number, push it & i++ & j++
        if (sortedA[i] === sortedB[j]) {
            if (newArr.length === 0 || newArr[newArr.length - 1] !== sortedA[i]) {
                newArr.push(sortedA[i]);
            }
            i++;
            j++;
        }
        if (sortedA[i] < sortedB[j]) {
            i++;
        } else {
            j++;
        }
    }
    return newArr;
}


// console.log(orderedIntersection(numsA1, numsB1))
// console.log(orderedIntersection(numsA2, numsB2))
// console.log(orderedIntersection(numsA3, numsB3))

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];


function orderedMultisetUnion(sortedA, sortedB) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while (i < sortedA.length && j < sortedB.length) {
        if (sortedA[i] < sortedB[j]) {
            newArr.push(sortedA[i])
            i++;
        } else if (sortedA[i] === sortedB[j]) {
            newArr.push(sortedA[i])
            i++;
            j++;
        } else {
            newArr.push(sortedB[j])
            j++;
        };
    };


    while (j < sortedB.length) { // if j hasn't looped all elements in sortedB
        newArr.push(sortedB[j])
        j++;
    };

    while (i < sortedA.length) { // if i hasn't looped all elements in sortedB
        newArr.push(sortedA[i])
        i++;
    };


    return newArr;
}

console.log(orderedMultisetUnion(numsA4, numsB4))
console.log(orderedMultisetUnion(numsA5, numsB5))

