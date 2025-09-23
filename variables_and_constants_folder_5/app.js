let age = 55;

let price = 19.99;

let myName = "John Doe";
let bootcamp = 'TechCrush'
 let pet = `dog`

 let concat = myName + " is a student at " + bootcamp + "and owns a" + pet;

 let joiningStringVariable = myName+bootcamp+pet

 let literals = `${myName} is a student at ${bootcamp} and owns a ${pet}`;
//  console.log(literals)
// console.log(joiningStringVariable)

/**
 * This code initializes several variables with different data types:
 * this for a line
 */

// Variable naming conventions in Javascript

// camelCaseInJavascriptIsGoodForDescription

// snake_case_is_also_good_for_javascript_desription

// PascalCaseIsGoodForDescription

// let isClasses = true
// let isAbsent = false

// console.log(isClasses);

let balance = null;
balance = balance + 100;
balance = balance + 200;
balance = balance - 300;

// console.log(balance);





// sample object showing it non primitive features with keys, value and bringing in array

let ourClass = { topic: "Introduction to Javascript",
     duration: 3, 
     isActive: true, 
     fullClass: null,
     aSampleArray: [ 1, "John", null, true, ["nested", "array", 42], { key: "value", id: 1 } ],
     student: { key: "value", id: 1 },
    };
// comma ends a value
let ourArray = [1,"John", null, true, { name: "Doe", school: "TechCrush" } [1, 2, 3]];


// console.log(ourClass);
// console.log(ourArray);

// TYPE CASTING

let distance = "1000";

console.log("our variable is a", typeof distance)

let distanceInNumber = Number(distance);

console.log("our variable is a ", typeof distanceInNumber);