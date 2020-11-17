//ADVANCED JAVASCRIPT

/*
//Function Constructor
var Person = function(name, DOB, job) {
    this.name = name;
    this.DOB = DOB;
    this.job = job;
} 

Person.prototype.calcage = function() {
        console.log(name, 'age' , 2020 - this.DOB);
    }
Person.prototype.lastName = 'Chundru';

var john = new Person('john', 1996, 'Software Employ');
john.calcage();

var mark = new Person('mark', 1968, 'architect');
mark.calcage();

var jeni = new Person('jeni', 1976, 'Teacher');
jeni.calcage();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jeni.lastName);

*/

//Object.create
/*

var personProto = { 
    calcAge: function() {
    console.log(2020 - this.DOB);
}
};

var john = Object.create(personProto);
john.name = 'john';
john.DOB = 1996;
john.job = 'teacher';

var mark = Object.create(personProto, {
    name: {value : 'mark'},
    DOB: {value : 1996},
    job: {value : 'Designer'}
    
});
*/ 

/*
//Primitives VS Objects

//Primities
var a = 29;
var b = a;
a = 45;
console.log(a);
console.log(b);
//this creates another data space for variable b

//Objects
var obj1 = {
    name: 'harsha',
    job: 'Developer',
    age: 23
};
var obj2 = obj1;
obj1.age = 35;

console.log(obj1);
console.log(obj2);
//the both obj1 & obj2 refers to the same place where age was stored

//Functions
var age = 24;
var obj = {
    name: 'harsha',
    city: 'dublin'
};

function change(a, b) {
    a = 30;
    b.city = 'Galway';
}

change(age, obj);

console.log(age); //age remains unchanged as it was primitive.
console.log(obj.city);//object gets changed.

*/

/*

//lecture: Passing functions as arguements or Call back Functions

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullage(el) {
    return el >= 18; 
}

function maxHeartRate(el) {
    if (el > 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calcAge);
 console.log(ages);

var fullAge = arrayCalc(ages, isFullage);
console.log(fullAge);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);

*/

/*

//Functions: Returning Functions


function interviewQuestions(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name, 'Explain about UX design');
            } 
        
        } else if (job === 'developer') {
            return function(name) {
                console.log(name, 'Explain about returning functions');
            }
        } else { 
            return function(name) {
                console.log('Helo ' + name + ', What do you do?');
            }
            
        }
    }


var designerQuestions = interviewQuestions('designer');

var developerQuestions = interviewQuestions('developer');

designerQuestions('john');
developerQuestions('mark');

interviewQuestions('engineer')('Harsha');
interviewQuestions('developer')('Harsha');
interviewQuestions('designer')('Harsha');


*/

/*
//IIFE-Immediately invoked function expressions.
 var score = Math.random * 10;
(function() {
   
    console.log(score >= 5);
}) ();

console.log(score);

(function(goodLuck) { 
    var score = Math.random * 10;
    console.log(score >= 5 - goodLuck);
}) (5);


////Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left untill retirement.';
    return function(yearofBirth) {
        var age = 2016 - yearofBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(66)(1996);
var USretirement = retirement(66);
USretirement(1980);
var Germanyretirement = retirement(65);
Germanyretirement(1980);
var Icelandretirement = retirement(67);
Icelandretirement(1980);


function interviewQuestions(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name, 'What is fundamentals of designing?');
        } else if(job === 'software developer' || job === 'software engineer') {
            console.log(name, 'What were technologies used in your past role');
        } else if(job === 'Django developer' || job === 'python developer') {
            console.log(name, "Explans about API's");
        } else if(job === 'Cybersecurity engineer') {
            console.log(name, "What are the main threats of data");
        } else if (job === 'QA analyst') {
            console.log(name, 'Explain the steps of QA automation');
        } else {
            console.log(name, 'There was no opening for your role at this moment');
        }
    }
}

interviewQuestions('software engineer')('John');
var designerQuestion = interviewQuestions('designer');
designerQuestion('Mark');

*/

/*

//Call, bind, apply methods

var john = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfday) {
        if (style === 'formal') {
            console.log('Good ', timeOfday, ' I\'m ', this.name, ' and work as a ', this.job, ' and my age is ', this.age);
        } else if(style === 'friendly') {
            console.log('Hey!, What\'s UP Guys', ' I\'m ', this.name, ' and work as a ', this.job, ' and my age is ', this.age, ' Have a nice', timeOfday);
        }
    }
};

john.presentation('formal', 'morning');


var emily = {
    name: 'Emily',
    age: 26,
    job: 'Student',
};

//CALL MEthod
john.presentation.call(emily, 'friendly', 'evening');
//BIND Method
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night'); //carrying

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');
emilyFormal('mid-night');

//APPLY
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

function isFullage(limit, el) {
    return el >= limit; 
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullage.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/

//CHALLENGE 7
//INVOKE FUNCTION


(function() {
    var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    
}

var q1 = new Question('Javascript is an easy language',['yes', 'no'], 0);
var q2 = new Question('React is a development framework of',['Javascript', 'Python'], 0);
var q3 = new Question('Call, Bind and Active are a part of ', ['Variables', 'Function & Objects'], 1);

Question.prototype.display_question = function() {
    console.log(this.question);
    for( i =0; i < this.answers.length; i++) {
        console.log(i, ':', this.answers[i]);
    } 
    
}

Question.prototype.checkAnswer = function(ans, callback) {
    var sc; 
    
    if (ans === this.correct) {
        console.log('Correct answer'); 
        sc = callback(true);
    } else {
        console.log('Wrong answer');
        sc = callback(false);
        
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is:', score);
    console.log('______________________________');
}


var questions = [q1, q2, q3];
    
function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}
var keepScore = score(); 

    
function nextQuestion() {

 
var n = Math.floor(Math.random()* questions.length);

questions[n].display_question();  

var answer = (prompt('Please select the correct answer.'));


if (answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer), keepScore);
    
    nextQuestion(); 
}


}

nextQuestion();


    
})();





















