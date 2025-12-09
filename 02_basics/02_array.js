const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash","batman"];

marvelHeros.push(dcHeros);         // push all dcHeros array as one index

console.log(marvelHeros.length);   // 4
console.log(marvelHeros);          // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

marvelHeros.pop();
console.log(marvelHeros);          // ["thor", "ironman", "spiderman"];

// Case 1
dcHeros.forEach((value) => {
    marvelHeros.push(value);
});

console.log(marvelHeros.length);   // 6
console.log(marvelHeros);          // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


marvelHeros.pop();
marvelHeros.pop();
marvelHeros.pop();
console.log(marvelHeros);          // [ 'thor', 'ironman', 'spiderman' ]

// Case 2
let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);             // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


allHeros = []
console.log(allHeros);             // []

// Case 3
allHeros = [...marvelHeros, ...dcHeros];
console.log(allHeros);             // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

/*** Spread vs Rest
 * Spread (...)
 *    - Spread = Spill out (break apart into pieces).
 *    - Think of spread as "unpacking" or "spilling out" items one by one.
 *    - If you see ... outside function parameters → Spread.
 */

function add(a, b, c) {
    return a + b + c;
}
const arrayNumbers = [1, 2, 3];
console.log(add(...arrayNumbers));   // ...numbers spreads [1,2,3] into add(1,2,3)

/***
 * Rest (...)
 *    - Rest = Gather-up (collect pieces into one bag).
 *    - Think of rest as "packing up" or "collecting" items into a single bag (array).
 *    - If you see ... inside function parameters → Rest.
 */

function greet(first, ...others) {
    console.log("First:", first);
    console.log("Others:", others);
}
greet("thor", "ironman", "spiderman");           // First: thor   Others: ["ironman", "spiderman"]


const anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, [6, 7, [4,3,2,1,],8],9];
let flatArry = anotherArray.flat(1);   // flat will flat the nested array with depth
console.log(flatArry);                                     // [ 1, 2, 3, 4, 5, 6, 7, 8, 6, 7, [ 4, 3, 2, 1 ], 8, 9 ]

flatArry = anotherArray.flat(Infinity);  // depth 2 or Infinity will spread array in one
console.log(flatArry);                                     // [ 1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 4, 3, 2, 1, 8, 9 ]

console.log(Array.isArray("RazaAli"));      // false
console.log(Array.from("RazaAli"));      // [ 'R', 'a', 'z', 'a', 'A', 'l', 'i' ]

console.log(Array.from({name: "RazaAli"}));   // [ ] --if it cant convert, array will be empty

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
