// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Dynamic Language

const score = 100;
const scoreValue = 5.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id === anotherId); // false  --always unique, even with the same description.

id = Symbol.for('123');
anotherId = Symbol.for('123');

console.log(id === anotherId); // true   --reuses the same symbol from a global registry.

const bigNumber = 32165465486354n
console.log(typeof bigNumber);


// # Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["ironman", "spiderman", "hulk"];

let myObj = {
    name: "Raza",
    age: 27,
};

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);   // function


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let  myName = "Raza";
let anotherName = myName;   // assign COPY of the value

anotherName = "RazaAli";

console.log(myName);              //  Raza
console.log(anotherName);         //  RazaAli

let userOne = {
    name: "Raza",
    age: 27,
};

let userTwo = userOne;  // assign by REFERENCE

console.log(userTwo);             // { name: 'Raza', age: 27 }
userTwo.name = "RazaALI" ;

console.log(userOne);             // { name: 'RazaALI', age: 27 }
console.log(userTwo);             // { name: 'RazaALI', age: 27 }