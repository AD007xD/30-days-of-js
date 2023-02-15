//!! Objects

//` Empty object
const empty = {};

//` Object with values
const rectangle = {
	length: 50,
	width: 20,
};

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 21,

	sayHi() {
		console.log('Hi from John');
	},
	sayHello: function () {
		console.log('Hello from John');
	},
	sayHowdy: () => {
		console.log('Howdy from John');
	},

	//NOTE: sayHi(), sayHello(), and sayHowdy() are different ways to create an object method
};

//` Getting values from an object

console.log(`Length: ${rectangle.length}`);
console.log(`Width: ${rectangle[width]}`);

person.sayHi();
person.sayHello();
person.sayHowdy();
