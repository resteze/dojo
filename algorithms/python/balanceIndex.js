/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [3,0,1,1,1]
const expected3 = 1


const nums4 = [-5,0,-1,-1,-1,-1,-1]

function balanceIndex(nums) { 
    if (nums.length < 3){
        return -1;
    }
    for(var i = 1;i < nums.length;i++){
        leftSum = 0;
        rightSum = 0;
        for(var x = 0; x < i; x++){
        leftSum += nums[x];
        }
        for(var j = nums.length -1;j > i; j--){
        rightSum += nums[j];
        }
        if (leftSum == rightSum){
            return i 
        }
    }
    return -1
}

// function balanceIndex2(nums) {
//     if (nums.length < 3){
//         return -1;
//     }
//     total = 0;
//     for (var i = 0;i < nums.length; i++){
//         total += nums[i];
//     }
//     goal = total/2
//     for (var j = 0; j <nums.length; j++){
//         left += nums[j]
//         if (left == goal){
//             return j
//         }
//     }
//     return -1
// }
console.log(balanceIndex(nums4))

console.log(balanceIndex2(nums4))