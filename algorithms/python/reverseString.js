
//create a function
//create a temp var 
//set paramater

function reverseString(someString){
    var tempVar = "";
    for(var i = someString.length - 1;i >= 0; i--){
        tempVar += someString[i];
    }
    return tempVar;
}
var test = 'hello';
var test2 = 'This is a long word';

console.log(reverseString(test));
console.log(reverseString(test2));