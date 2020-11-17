/*

//LECTURE HOSTING
//functions 
calcage(1978);
function calcage(year) {
    console.log(2020 - year);
}
//calcage(1996);

var retire = function(year) {
    console.log((65-(2020-year)));
}

retire(1988);

//variables
console.log(known);
var known = "harsha";
console.log(known);

var age = 20;
var retired = function(year) {
    console.log(age);
    var age = 50;
    console.log(age);
    console.log(year - age);
}
retired(2020);
console.log(age);

*/

/*

//FIRST SCOPING EXAMPLE
var a = 'Hello!';
first();

function first() {
    var b = 'Hi';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//DIFFERENCE between SCOPE CHAIN AND EXECUTION STOCK

var a = 'Hello!';
first();

function first() {
    var b = 'Hi';
    second();
    
    function second() {
        var c = 'Hey!';
        third();
    }
function third() {
    console.log(a);
}
}


//THIS Method

var john = {
    name: 'John',
    DOB : 1996,
    calcAge : function() {
        console.log(this);
        console.log(2020 - this.DOB);
    }
}
john.calcAge();

var mike = {
    name : 'mike',
    DOB : '1990'
}
mike.calcAge = john.calcAge;
mike.calcAge();

*/

