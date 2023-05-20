const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// console logs 'Tesla'
// console logs 'Mercedes'

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// // console logs 'Elon' (wrong, because name isnt definee)
// // console logs undefined 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
console.log(person)

// console logs '12345'
// console logs '12345'(wrong because const { password: hashedPassword } = person; only tries to add the password to the const person )

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second);
console.log(first == third);

// console logs false 
// console logs true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// console logs 'value'
// console logs [1, 5, 1, 8, 3, 3]
// console logs 1
// console logs 5
