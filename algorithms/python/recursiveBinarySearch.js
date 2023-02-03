/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//                   V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// don't be afraid to add parameters! 👇
function binarySearch(sortedNums, searchNum, start = 0, end = sortedNums.length-1) {
    var mid = Math.round((start + end)/2)
    if (sortedNums[mid] == searchNum){
        console.log('Number found!')
        return true
    }
    if(searchNum < sortedNums[mid]){
        sortedNums.splice(mid,end)
        console.log('searchNum is bigger')
        // console.log(start)
        // console.log(end)
        // console.log(sortedNums)
        return binarySearch(sortedNums, searchNum, start, mid - 1)
    }
    if(searchNum > sortedNums[mid]){
        sortedNums.splice(start, mid)
        console.log('searchNum is smaller')
        // console.log(sortedNums)
        return binarySearch(sortedNums, searchNum, mid + 1, end)
    }

    console.log('Number you were searching for isnt there :(')
    return false
    
    // base case(s)
    // logic
    // recursive call(s) / return(s)
}
console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))