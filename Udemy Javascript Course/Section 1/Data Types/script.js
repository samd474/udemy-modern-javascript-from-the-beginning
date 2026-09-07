/*primitive data types
string: sequence of characters
numbers: integers and floating point numbers
boolean: true/false
null: intentional absence of any number
undefined: variable that has not yet been defined or assigned
symbol: built in object whose constructor returns a unique symbol
BigInt: Numbers greater than the Number type can handle
Reference types or Objects are non-primitive valuesthat, when assigned to a variable, are given a reference to that value
Object literals, arrays, and functions are all reference types
*/

/*
Static type vs Dynamic type
Javascript is dynamically typed, which means variable types do not need to be explicitly defined.
*/
//Reference values are stored in the heap

const firstName = 'Sally';
const aptNumber = null;
//const output = aptNumber;
console.log(firstName, typeof output)


const name = 'John';
let age = 30;


let NewName = name;
newName = 'Jonathan';

//Type conversion
let amount = 100;
console.log(amount)

let amount = '100';
//Change string to number

amount = amount.toString;

amount = parseFloat;


//Boolean constructor
//convert number to boolean
amount = Boolean;

console.log(typeof Boolean);
