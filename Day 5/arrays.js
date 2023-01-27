//! Arrays

//!! An array is a collection of values

const groceries = ['milk', 'meat', 'butter', 'yoghurt'];

//` You can access the length of an array using the 'length' property
const length = groceries.length;
console.log(length);

//` An array can also be created using the '.split()' method on a string
const splitArray = 'Some random sentence'.split();
console.log(splitArray);

//!! Accessing the elements of an array
const firstElem = groceries[0];
const secondElem = groceries[1];
const lastElem = groceries[length - 1];
