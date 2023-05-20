console.log(hello);
var hello = 'world';

// undefined
// hello = 'world'

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// needle = 'haystack'
// in the function needle ='magnet'
// console logs 'magnet'

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// brendan = 'super cool'
// console logs 'only okay' once because function was never called

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// food = 'chicken'
// console logs 'chicken'
//function was called 
// reassigns food to 'half-chicken'
//console logs 'half-chicken'
// in the function food = 'gone'

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// function is called but wasnt found because while it was instatianted the var wasnt set as a fucntion before the call

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// undefined
// genre = 'disco'
// function was called
// reassigns genre to 'rock'
// console logs 'rock'
// in the function genre = 'r&b'
// console logs 'r&b'
// console logs 'rock' (wrong, actually disco because in the funtion stays in the function)

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = 'san jose'
// console logs 'san jose'
// calls function
// in the function reassigns dojo = 'seattle'
// console logs 'seattle'
// in the function dojo = 'burbank'
// console logs 'burbank'
// console logs 'san jose'

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// function is called with variables Chicago and 65
// const dojo = {
// name: 'Chicago'
// student: '65'
// hiring: True
// }
// console logs dojo
// function is called with variable Berkley and 0
// const dojo = {
// name: 'Berkley'
// student: '0'
// }
// because students <= 0 dojo = 'closed for now'(wrong, because dojo is a const and cant be reassigned)
// console logs 'closed for now'




