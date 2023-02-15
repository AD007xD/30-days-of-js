//!! Declaring a function

function addOneAndOne() {
	console.log(1 + 1);
}

//!! Function with an argument
function add(a, b) {
	console.log(a + b);
}

//!! Function with a return value
function areaOfCircle(r) {
	return Math.PI * r * r;
}

//!! Function with infinite arguments
function addAll(...nums) {
	let sum = 0;
	nums.forEach((num) => {
		sum += num;
	});
	return sum;
}

//!! Anonymous Function
const anonymous = function () {
	console.log('Anonymous function');
};

//!! Expression Function
const square = function (n) {
	return n * n;
};

//!! Arrow Function
const cube = (n) => {
	n * n * n;
};

//!! Calling the functions
addOneAndOne();
add(1, 3);
console.log(areaOfCircle(7));
console.log(addAll(1, 2, 3, 4, 5));
console.log(addAll(1, 2, 3, 4, 5, 10, 20));
anonymous();
console.log(square(5));
cl(cube(3));
