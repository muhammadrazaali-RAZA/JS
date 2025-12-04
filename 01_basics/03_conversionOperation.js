// case 1:
let score = "33";

// console.log(score);  // 33
// console.log(typeof score); // string


// case 2:
score = "33abc";
let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// case 3:
score = null;
valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 0


// case 4:
score = undefined;
valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // Nan

// Investigation

// "33" => 33
// "33abc" => NaN   ; Not a Number
// true => 1; false => 0



// boolean case 1:
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn); // true

// boolean case 2:
isLoggedIn = "StringValue";

booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn); // true

// boolean case 3:
isLoggedIn = "";

booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn); // false

// Investigation

//  1 => true; 0 => false
//  "" => false
//  "something" => ture

// String case 1:
let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber); // string
console.log(stringNumber); // 33


