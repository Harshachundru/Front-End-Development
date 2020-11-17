/*
console.log("This is a javascript Couse");
console.log("Determination & Grid");
console.log("Sencond line of Javascript code");
*/

//Defining variables and Data types

/*
var firstName = 'Harsha';
var lastName ='Chundru';
var age = 23;
var job;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
job = null
var isIrish = false;
console.log(isIrish);
*/

// variable mutation and type casting

/*
var firstName = 'Harsha';
var age = 23;
var job, isMarried;
job = 'software developer';
isMarried = false;
//Type corrtion
console.log(firstName + 'is a' + job + 'and he is' + age + 'years old');
//variable mutation

job ='full stack developer';
isMarried = true;
var lastName;
alert("Click ok to view the console")
lastName = prompt('Enter your last name:');

console.log(firstName + lastName + 'is a' + job +'. Is he married:' + isMarried)

*/

// Basic Operators

/*

var now, harAge, nanAge;
now = 2020;
harAge = 23;
nanAge = 18;

//math operators
birthYear_Har = now -harAge;
birthYear_Nan = now -nanAge;

console.log(birthYear_Har);
console.log(birthYear_Nan);

//logical operator
var harOlder = harAge > nanAge;
console.log(harOlder);

//types of operators
console.log(typeof now);
console.log(typeof 'isthisshowsthestring');
console.log(typeof harOlder);
var x
console.log(typeof x);

*/
/*

// Operator precedence

var now = 2020;
var dobHar = 1996;
var fullage = 18;
// comparison of age
var isFullage = now - dobHar >= fullage;
console.log(isFullage);
console.log(typeof isFullage);
//average age
var ageHar = now - dobHar;
var ageNan = 18;
var avgage = (ageNan + ageHar)/2;
console.log('This is the average age', avgage);
// multiple assignments
var x, y;
x = y = (99 + 66) * 44 - 66;
console.log(x, y);
// The code works without ; as well

//More operators
x = x+1 
console.log('This should give 7194+1 =', x)
x +=10
console.log('this should give', x)
x *= 2
console.log(x)
*/
/*
//First Challenge to CALCULATE BMI
var massMark = 80
var massJohn = 90
var heightMark, heightJohn
heightMark = prompt('Enter the height of Mark:')
heightJohn = prompt('Enter the height of John:')
var BMIMark = massMark/(heightMark* 2)
console.log("Mark's BMI:", BMIMark)
var BMIJohn = massJohn/(heightJohn* 2)
console.log("John's BMI:", BMIJohn)
var isBMI = BMIMark > BMIJohn
console.log('Is Mark"s BMI is higher than John"s?', isBMI)
*/

/*
//IF ELSE LOOP LOGICS 
// EXERCISE1
var Name = 'Harsha';
var civilstatus = 'Single';

if (civilstatus === 'married') {
    console.log(Name, 'Is married');
} else {
    console.log(Name, 'Will be married soon');
}

var ismarried = true;
if (ismarried) {
    console.log(Name, 'Is married');
} else {
    console.log(Name, 'Will be married soon');
}

// EXERCISE 2
var massMark = 80;
var massJohn = 90;
var heightMark, heightJohn;
heightMark = prompt('Enter the height of Mark:');
heightJohn = prompt('Enter the height of John:');
var BMIMark = massMark / (heightMark * 2);
var BMIJohn = massJohn / (heightJohn * 2);
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(" Marks\'s BMI was higher than John\'s");
} else {
    console.log('John\'s BMI was higher than Marks\'s');
}


*/

/*

//BOOLEAN LOGIC
var Name = 'John';
var johnAge = prompt("Enter the age of John");

if (johnAge < 13) {
    console.log(Name, "is a young boy");
} else if (johnAge >= 13 && johnAge <= 20) {
    console.log(Name, 'is a teenager');
} else if (johnAge > 20 && johnAge <= 40) {
    console.log(Name, 'Is an adult');
} else {
    console.log(Name, 'Is an OLD person');
}

*/

/*

//TERENARY OPERATOR AND SWITCH STATEMENTS

//TERENARY OPERATOR

var Name = 'John';
var johnAge = prompt("Enter the age of John");

//SWITCH STATEMENT 
switch (true) {
    case johnAge < 13:
        console.log(Name, 'is a young person');
        break;
    case johnAge > 13 && johnAge < 20:
        console.log(Name, 'is Teenager');
        break;
    case johnAge >20 && johnAge <40:
        console.log(Name, 'is adult');
        break;
    default:
        console.log(Name, 'Is old');
}
johnAge < 18 ? console.log(Name, "is not eligible to drink beer") : console.log(Name, 'is eligibile to drink beer');

var isId = johnAge < 30 ? 'Required' : 'NOT REQUIRED'
console.log('Age Proof' , isId);

//SWITCH STATEMENT

var job = prompt("Enter your job");
switch (job) {
    case 'teacher':
        console.log(Name, 'Teaches to people');
        break;
    case 'driver':
        console.log(Name, 'Drives Uber in DUblin');
        break;
    case 'engineer':
    case 'software engineer':
    case 'data engineer':
        console.log(Name, 'works in software industry');
        break;
    case 'freelancer':
    case 'free lancer':
        console.log(Name, 'works a free lancer');
        break;
    default:
        console.log(Name, 'does soething else');
}
    
*/

/*
//TRUTHY AND FALSY VALUES AND EQUALITY

var height;

if (height){
    console.log("The height was defined");
} else {
    console.log('The height was not defined');
}
   
height = prompt("Specify the height");
if (height || height === 0){
    console.log("The height was defined");
} else {
    console.log('The height was not defined');
}

*/ 

/*

// CODING CHALLANGE 1

var Game1A = 100;
var Game2A = 120;
var Game3A = 103;

var Johnavgscore = (Game1A + Game2A + Game3A) /3;
console.log("The average score of john's team is:", Johnavgscore);

var Game1B = 100;
var Game2B = 120;
var Game3B = 103;

var Mikeavgscore = (Game1B + Game2B + Game3B) / 3;
console.log("The average score of mike's team is:", Mikeavgscore);

var Game1C = 100;
var Game2C = 120;
var Game3C = 103;
var Maryavgscore = (Game1C + Game2C + Game3C) /3; 
console.log("The average score of Mary's team is:", Maryavgscore);


if (Johnavgscore > Mikeavgscore) { 
    console.log('The John"s team has score the highest');
} else if (Johnavgscore < Mikeavgscore) {
    console.log(" The Mike's team has scored the highest");
} else {              
    console.log(" The average scored were same ");
}

if (Johnavgscore > Mikeavgscore && Johnavgscore > Maryavgscore) {
    console.log("John's team has the highest average score");
} else if (Johnavgscore > Mikeavgscore && Johnavgscore < Maryavgscore) {
    console.log("Mary's team has the highest average score");
} else if (Johnavgscore < Mikeavgscore && Mikeavgscore > Maryavgscore) {
    console.log("Mike's team has the highest average score");
} else if (Johnavgscore < Mikeavgscore && Mikeavgscore < Maryavgscore) {
    console.log("Mary's team has the highest average score");
} else {
    console.log("All three teams has the same average");
}
*/

/*

// FUNCTIONs

function calcage(Birthyear) {
    var age = 2020 - Birthyear;
    return age; 
}
var Harshaage = calcage(1996);
var Nanage = calcage(2004);
console.log(Harshaage, Nanage);

function calcretirement(Year, FirstName) {
    var personAge = calcage(Year);
    var retireyears = 70 - personAge; 
    
    if (retireyears > 0) {
        console.log(FirstName, "will retire in" , retireyears, "years");
    } else {
        console.log(FirstName, "was already retired");
    }
}

var harretire = calcretirement(1996, "Harsha");
var nanretire = calcretirement(2004, "Nandu");
var murretire = calcretirement(1978, "Murthy");
var swamyretire = calcretirement(1945, "SWAMY");

*/ 
/*
// FUNCTION EXPRESSIONS

var jobdescrip = function (Name, Jobtitle) {
    switch (Jobtitle) {
        case 'teacher':
            return Name + 'teaches to people';
        case 'engineer':
            return Name + 'design and develop many things';
        case 'investor':
            return Name + 'invest in many companies';
        case 'student':
            return Name + 'is a masters student';
        default :
            return Name + 'does something else';
        
    }
}

console.log(jobdescrip("harsha","student"));
console.log(jobdescrip("nandu","doctor"));
console.log(jobdescrip("Arun", "Investor"));
console.log(jobdescrip("Pavan", "Investor"));

*/

/*

// ARRAYS IN JAVASCRIPT
//They are similar to python list, tuples and dictionaries.

var Names = ['Harsha','Nandu','Pavan','Arun','Phani'];
console.log(Names); 
console.log(Names.length);

// Array with various data types
var personData = ['Harsha', 'Chundru', 1996, 'MSc.', true];
console.log(personData);

console.log(personData[3]);
personData[0] = 'Harsha Venkata Sai';
console.log(personData);


personData.push('Indian');
console.log(personData);

personData.unshift('Mr.');
console.log(personData);

personData.pop();
personData.shift();
console.log(personData);

console.log(personData.indexOf(1996));

var personName = personData[0] === 'Harsha Venkata Sai' ? "He is a gentle man" : "I don't know about him"; 
console.log(personName);

*/

/*

// CHALLENGE _ TIP CALCULATOR 

var bills = [124, 48, 268];
console.log(bills);

var tip; 
var all_tips = [];

function tipcal(billAmount) {
    if (billAmount < 50) {
        tip = billAmount * 0.2;
        return tip; 
    } else if (billAmount >= 50 && billAmount <= 200) {
        tip = billAmount * 0.15;
        return tip; 
    } else {
        tip = billAmount * 0.1;
        return tip; 
    }
}

all_tips[0] = tipcal(bills[0]);
all_tips[1] = tipcal(bills[1]);
all_tips[2] = tipcal(bills[2]);

console.log(all_tips);

var finalPrices = [bills[0] + all_tips[0], bills[1] + all_tips[1], bills[2] + all_tips[2]];
console.log(finalPrices);

*/

/*

//OBJECTS 

var personInfo = { 
    FirstName : "Harsha", 
    lastName : "Chundru", 
    Qualification : 'MSc. Information systems',
    DOB : 1996,
    Nationality : "Indian",
    friends : ['sandy', 'pochu', 'balu', 'sivaji', 'mahesh', 'gowtham'],
    isMarried : false
};

console.log(personInfo.firstName);
console.log(personInfo.DOB);

var skills = new Object();

skills.language = ['python', 'javascript', 'html', 'css'];
skills['JSframeworks'] = ['react', 'angular', 'node'];
skills['pythonframeworks'] = 'Django';

console.log(skills);

var jobs = new Array();
jobs[0] = 'Python developer';
jobs[1] = 'web developer';
jobs[2] = 'Javascript developer';

console.log(jobs);

*/ 

/*
//Diclaring functions in objects.

var personInfo = { 
    FirstName : "Harsha", 
    lastName : "Chundru", 
    Qualification : 'MSc. Information systems',
    DOB : 1997,
    Nationality : "Indian",
    friends : ['sandy', 'pochu', 'balu', 'sivaji', 'mahesh', 'gowtham'],
    isMarried : false,
    calcAge : function() {
        this.age = 2020 - this.DOB;
    }
};

personInfo.calcAge();
console.log(personInfo);

*/ 

/*
//CODING CHALLENGING 

var john = {
    FirstName : "John",
    LastName : "Marko",
    mass : 80,
    height : 170,
    calBMI : function() {
        this.BMI = this.mass/this.height * 2;
    }
}
john.calBMI();
console.log(john);
console.log(john.BMI);

var mark = {
    FirstName : "Mark",
    LastName : "Gabrial",
    mass : 90,
    height : 160,
    calBMI : function() {
        this.BMI = this.mass/this.height * 2;
    }
}
mark.calBMI();
console.log(mark);
console.log(mark.BMI);

if (mark.BMI > john.BMI) {
    console.log("The Mark's BMI is the highest");
} else if (mark.BMI < john.BMI) {
    console.log('The John"s BMI is the highest');
} else {
    console.log("The John's BMI is equal to Mark's BMI");
}

*/ 

//testing tools
//mindmapping 
//ux design
//design patterns
//implementation tools

/*

// LOOPS IN JAVASCRIPT 

// FOR loop 


for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < 10; i+= 2) {
    console.log(i);
}

var personInfo = ["Harsha", "Chundru", 'MSc. Information systems', true, 1996, "Indian", true];

for (var i = 0; i < personInfo.length; i++) {
    console.log(personInfo[i]);
}

console.log("*********************************************************");

//WHILE LOOP

var i = 0;
while(i < personInfo.length) {
    console.log(personInfo[i]);
    i++;
}

console.log("*********************************************************");

//Break & Continue statements
for (var i = 0; i < personInfo.length; i++) {
    if (typeof personInfo[i] !== 'string') continue; 
    console.log(personInfo[i]);
    
}

console.log("*********************************************************");
for (var i = 0; i < personInfo.length; i++) {
    if (personInfo[i] === true) break; 
    console.log(personInfo[i]);
    
}

console.log("*********************************************************");
for (var i = personInfo.length -1; i >= 0; i--) {
    console.log(personInfo[i]);
}

*/
//markTrip : [77, 375, 110, 45]

var johnTrip = [124, 48, 268, 180, 42];
var johnTip = [];
var johnBill= [];

function billCalc() {
    for (i = 0; i < johnTrip.length; i++) {
    if (johnTrip[i] <= 50) {
        var tip = johnTrip[i] * 0.2;
        //console.log(tip);
        johnTip.push(tip);
        var total = johnTrip[i] + tip;
        johnBill.push(total);
        
        
    } else if (johnTrip[i] > 50 && johnTrip[i] < 200) {
        var tip = johnTrip[i] * 0.15;
        //console.log(tip);
        johnTip.push(tip);
        var total = johnTrip[i] + tip;
        johnBill.push(total);
    } else {
        var tip = johnTrip[i] * 0.1;
        //console.log(tip);
        johnTip.push(tip);
        var total = johnTrip[i] + tip;
        johnBill.push(total);
        
    }
}

    
}
billCalc();
console.log("The actual bills", johnTrip);
console.log("The tips of JOHN are: ", johnTip);
console.log("The total amount for JOHN including bills:" ,johnBill);

var markTrip = [77, 375, 110, 45];
var markTip = [];
var markBill = [];

function billCalc1() {
    for (i = 0; i < markTrip.length; i++) {
    if (markTrip[i] <= 100) {
        var tip = markTrip[i] * 0.2;
        //console.log(tip);
        markTip.push(tip);
        var total = markTrip[i] + tip;
        markBill.push(total);
        
        
    } else if (markTrip[i] > 100 && markTrip[i] < 300) {
        var tip = markTrip[i] * 0.1;
        //console.log(tip);
        markTip.push(tip);
        var total = markTrip[i] + tip;
        markBill.push(total);
    } else {
        var tip = markTrip[i] * 0.25;
        //console.log(tip);
        markTip.push(tip);
        var total = markTrip[i] + tip;
        markBill.push(total);
        
    }
}

    
}
billCalc1();
console.log('The actual bill:', markTrip);
console.log("The tips of Mark are: ", markTip);
console.log("The total amount for Mark including bills:" ,markBill);

function aveTip() {
    var add = 0;
    for (i = 0; i < johnTip.length; i++) {
        
        add = add + johnTip[i];
        console.log("this is itrerative sum", add);
    } 
    var johnavgsum = add / johnTip.length; 
    console.log("The average tip ammount of John is ", johnavgsum);
    var addd = 0;
    for (i = 0; i < markTip.length; i++) {
        
        addd = addd + markTip[i];
        console.log("this is itrerative sum", addd);
    }
    var markavgsum = add /markTip.length; 
    console.log("The average tip ammount of Mark is", markavgsum);
    
    if (johnavgsum > markavgsum) {
        console.log("John's average tip spendings are higher");
    } else if (johnavgsum < markavgsum) {
        console.log("Mark's average tip spendings are higher");
    } else {
        console.log("The average tip spendings were same for Mark & John");
    }
    
}

aveTip();
