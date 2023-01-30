//! Arrays

//!! An array is a collection of values

const groceries = ['milk', 'meat', 'butter', 'yoghurt'];

//` You can access the length of an array using the 'length' property
const length = groceries.length;
console.log(`groceries.length: ${length}`);

//` An array can also be created using the '.split()' method on a string
const splitArray = 'Some random sentence'.split();
console.log(`splitArray: ${splitArray}`);

//!! Accessing the elements of an array
const firstElem = groceries[0];
const secondElem = groceries[1];
const lastElem = groceries[length - 1];
//* Indexes of an array start from 0 and end at length - 1

//!! Changing an element
groceries[3] = 'cheese';
console.log(`Changing element at index 3: ${groceries}`);

//!! Manipulating an array
//` Using the array constructor
const emptyArray = Array(8);
console.log(`Array Constructor: ${emptyArray}`);

//` Using the fill method
const helloArray = Array(3).fill('Hello');
console.log(`Filled array: ${helloArray}`);

//` Concatenating two arrays
const helloGroceries = helloArray.concat(groceries);
console.log(`Concatenated Array: ${helloGroceries}`);

//!! Converting an array into a string
//` Using toString() method
let groceriesString = groceries.toString();
console.log(`Array Converted to String: ${groceriesString}`);

//` Using join() method
groceriesString = groceries.join('; ');
console.log(`Array Converted to String joined using ';': ${groceriesString}`);

//!! Slicing and Splicing
//` Slicing
const groceriesCopy = groceries.slice(); //* This copies the array
console.log(`Copied Array: ${groceriesCopy}`);

const slicedGroceries = groceries.slice(1, 3); //* Starts at index 1 and excludes the element in index 3
console.log(`Original Groceries Array: ${groceries}`);
console.log(`Sliced Array: ${slicedGroceries}`);

//` Splicing
const splicedGroceries = groceries.splice(1, 3);
console.log(`Original Groceries Array: ${groceries}`);
console.log(`Spliced Array: ${splicedGroceries}`);
console.log(`Original Groceries Array: ${groceries}`);

//!! Adding and removing elements
//` Adding
groceries.push('cereal'); //* Adds 'cereal' to the end of the array
console.log(`Array after adding 'cereal': ${groceries}`);

groceries.unshift('chocolate'); //* Adds 'chocolate' to the start of the array
console.log(`Array after adding 'chocolate': ${groceries}`);

//` Removing
groceries.pop(); //* Removes the last element
console.log(`Array after removing the last element: ${groceries}`);

groceries.unshift(); //* Removes the first element
console.log(`Array after removing the first element: ${groceries}`);

//!! Reversing an array
const reversedGroceries = groceries.reverse();
console.log(`Reversed Array: ${reversedGroceries}`);

//!! Sorting an array
const sortedGroceries = groceries.sort();
console.log(`Sorted Array: ${sortedGroceries}`);

const sortedReversedGroceries = sortedGroceries.reverse();
console.log(`Reversed and Sorted Array: ${sortedReversedGroceries}`);

//!! Nested Arrays
const nestedGroceries = [
    ['milk', 'cereal'],
    ['chocolate', 'candy'],
    ['pepper, salt'],
];
console.log(`Nested Array: ${nestedGroceries}`);
console.log(`First Element: ${nestedGroceries[0]}`);
console.log(`Second Element: ${nestedGroceries[1]}`);
console.log(`Third Element: ${nestedGroceries[2]}`);
