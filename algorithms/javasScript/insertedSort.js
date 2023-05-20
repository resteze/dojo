const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */

//Pseudocode
//1. For loop iterates through array 
//2. temp vars holding the current index, and the index checking the sorted half 
//3. Making while loop insides that goes until 
function insertedSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentIndex = nums[i]
    let j = i - 1
    // the while loop searches through until we reach the end or the currentIndex is greater than 
    while (j >= 0 && currentIndex < nums[j]) {
      // nums[j+1] is our current index and reassigns it to the variable to the left 
      nums[j + 1] = nums[j]
      // then we look over to the next variable
      j -= 1
    }
    // after the while loop reassigns the number we are currently on to the number we are searching through with
    nums[j + 1] = currentIndex
  }
  return nums
}

// current = 8
// index[j]= 9
// index[j+1](8) = 9
// index[j] = 10

console.log(insertedSort(numsOrdered))
console.log(insertedSort(numsRandomOrder))
console.log(insertedSort(numsReversed))

//cursor jail