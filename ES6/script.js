/*
//Lecture : let and count

// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
let name6 = 'Jane Smith';
const age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


//ES5
function driversLicense(passedTest) {
	if(passedTest) {
		var firstName = 'John';
		var yearofBirth = 1990;
		
		
	}
	//function scope
	console.log(firstName, 'born in', yearofBirth, 'is now officially allowed to drive a car');
}

driversLicense(true);

//ES6
function driversLicense(passedTest) {
	let firstName;
	const yearofBirth = 1990;

	if(passedTest) {
		firstName = 'John';
	//const yearofBirth = 1990; //block scope
		
	}
	console.log(firstName, 'born in', yearofBirth, 'is now officially allowed to drive a car');
}

driversLicense(true);


let i = 23;
for (i=0; i<5; i++) {
	//block scope
	console.log(i);
}

console.log(i);

*/

/*

/// Lecture: Blocks and IIFEs

//Blocks

{
	const a = 1;
	let b = 2;
	var c = 3;
}
//console.log(a+b);
console.log(c);


//ES5
(function() {
	var c = 3;
})();
//console.log(c);

*/

/*

// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearofBirth = 1996;

function calcAge(year) {
	return 2020 - year;
}
calcAge(yearofBirth);

//ES5
console.log('this is' + firstName+ '' + lastName + '.Today, he is' + calcAge(yearofBirth) + 'years old');

//ES6
//tem[plate literals]
console.log(`This is ${firstName} ${lastName}. He was born in ${yearofBirth}. Today, he is ${calcAge(yearofBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('tm'));
console.log(n.includes(''));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));

*/

/*
//Lecture: Arrow Functions

const years = [1990, 1996, 1997, 1889, 1343, 1245, 1678];

//ES5
//map methid
var ages5 = years.map(function(el) {
	return 2020 - el;
	
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age of ${index +1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age of ${index +1}: ${age}`;
});
console.log(ages6);

*/
/*

//Lecture : Arrow functions2

//ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number' + self.position + 'and this is' + self.color;
			alert(str);
		});
	}
}
//box5.clickMe();

//ES6
var box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number' + this.position + 'and this is' + this.color;
			alert(str);
		});
	}
}
box6.clickMe();



var box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number' + this.position + 'and this is' + this.color;
			alert(str);
		});
	}
}
box66.clickMe();



//ES5
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
	
	var arr = friends.map(function(el) {
		return this.name + 'is friends with' + el;
	}.bind(this));
	console.log(arr);
}

var friends = ['Bob', 'Jane', 'Raj', 'tej'];
new Person('John').myFriends5(friends);

//ES6


Person.prototype.myFriends6 = function(friends) {
	var arr6 = friends.map((el) =>  `${this.name} + 'is friends with' + ${el}`);
	console.log(arr6);
}
new Person('Mike').myFriends6(friends);

*/

//Lecture: Destructuring

//ES5
var john = ['John', 28];
//var name = john[0];
//var age = john[1];


//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
	firstName: 'Harsha',
	lastName: 'Chundru',
	ages: 24
};

const {firstName, lastName, ages} = obj;
console.log(firstName);
console.log(lastName);
console.log(ages);

const {firstName: a, lastName: b, ages: c} = obj;
console.log(a);
console.log(b);
console.log(c);


function calcAgeRetirement(year) {
	const aged = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [aged, retirement] = calcAgeRetirement(1996);
console.log(aged);
console.log(retirement);

