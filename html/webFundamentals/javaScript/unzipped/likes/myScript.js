var count1 = 9;
var count2 = 12;
var count3 = 9;
var numLikes1Element = document.querySelector(".numLikes1 ");
var numLikes2Element = document.querySelector(".numLikes2 ");
var numLikes3Element = document.querySelector(".numLikes3 ");
function likePost1() {
    count1 ++;
    numLikes1Element.innerText = count1 + " like(s)";
}
function likePost2() {
    count2 ++;
    numLikes2Element.innerText = count2 + " like(s)";
}
function likePost3() {
    count3 ++;
    numLikes3Element.innerText = count3 + " like(s)";
}