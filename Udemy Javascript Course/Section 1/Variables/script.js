//let firstName = 'John';
let lastName= 'Doe';
let age = '30';


console.log(age);

//variable names can only contain letters, numbers, underscores or dollar signs
let age = 30;

//Reassigning variables
let age = 31;
console.log(age);

//variables can be declared without having a value assigned.
let score;


const person = {
    name: 'Brad'
};
function sayHello() {
    console.log('Hello');
};
const output = sayHello;
person.name = 'John';

console.log(person);

//always use const unless you know the values will change
let a, b, c;
const d = 10, e = 20, f = 30;
