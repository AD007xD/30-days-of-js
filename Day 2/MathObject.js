//!! Non-Primitive Data Types

//! Arrays
const array = [1, 2, 3];

//! Objects
const object = {
    name: 'John Doe',
    age: 69,
};

//!! Math Object
const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI)); //*Rounds values to the nearest number
console.log(Math.round(9.81));

console.log(Math.floor(PI)); //*Rounds down to the previous integer

console.log(Math.ceil(PI)); //*Rounds up to the next integer

console.log(Math.min(-5, 3, 20, 4, 5, 10)); //*Returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); //*Returns the maximum value

const randNum = Math.random(); //*Creates random number between 0 to 0.999999
console.log(randNum);

const numBetween1And10 = Math.floor(Math.random() * 11);
console.log(numBetween1And10);

//* Absolute value
console.log(Math.abs(-10));

//* Square root
console.log(Math.sqrt(100));

console.log(Math.sqrt(2));

//* Power
console.log(Math.pow(3, 2));

console.log(Math.E);

//* Logarithm
//* Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2));
console.log(Math.log(10));

//* Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2);
console.log(Math.LN10);

//* Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));

console.log(Math.cos(0));
console.log(Math.cos(60));
