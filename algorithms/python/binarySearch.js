/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted.
*/
//                v
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   v
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;


//pseudo code

function binarySearch(sortedNums, searchNum) {
    var start = 0
    var end = sortedNums.length - 1
    var mid = 0
    while (start <= end){
        mid = Math.round((start + end)/2)
        if (searchNum == sortedNums[mid]){
            console.log('Number found!')
            return true
        }
        else if(searchNum < sortedNums[mid]){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    console.log('Number you were searching for isnt there :(')
    return false
}


console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true
console.log(binarySearch(nums3, searchNum3)); // true