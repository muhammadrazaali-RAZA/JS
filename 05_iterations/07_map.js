/** ---------------------------------------------------------
 *  map() — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 *  map():
 *      - Creates a NEW array.
 *      - Transforms each element using a callback function.
 *      - Always returns an array of the SAME length.
 *      - Does NOT modify the original array.
 *
 *  Syntax:
 *      array.map((value, index, array) => {
 *          return transformedValue;
 *      });
 *
 *  Perfect for:
 *      ✔ transforming values
 *      ✔ converting data formats
 *      ✔ extracting specific fields from objects
 *      ✔ building pipelines using chaining
 */


/** ---------------------------------------------------------
 *  1. Basic Example: Add 10 to Each Number
 *  ---------------------------------------------------------
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.map((number) => number + 10);

console.log(numbers);
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


/** ---------------------------------------------------------
 *  2. Chaining map() — Multiple Transformations
 *  ---------------------------------------------------------
 *
 *  Chaining:
 *      - Calling multiple methods one after another.
 *      - Each map() returns a new array, so the next map()
 *        works on the transformed result.
 */


let newNumbers = numbers
                        .map( (number) => number * 5)       // multiply each by 5
                        .map( (number) => number + 1)               // add 1
                        .map( (number) => number >= 70);    // convert to boolean

console.log(newNumbers);
// Output: [false, false, false, true, true, true, true, true, true, true]


/** ---------------------------------------------------------
 *  3. Mixing map() and filter() in a Chain
 *  ---------------------------------------------------------
 *
 *  - map() transforms values
 *  - filter() selects values
 *
 *  This is a common pattern in real-world data processing.
 */

newNumbers = numbers
                    .map( (number) => number * 5)        // multiply each by 5
                    .map( (number) => number + 1)                // add 1
                    .filter( (number) => number >= 70);  // keep only >= 70

console.log(newNumbers);
// Output: [71, 76, 81, 86, 91, 96]


/** ---------------------------------------------------------
 *  4. Advanced Example: Extracting Fields from Objects
 *  ---------------------------------------------------------
 */


const users = [
    { name: "Raza", age: 25 },
    { name: "Ali", age: 30 },
    { name: "John", age: 17 }
];

const names = users.map((user) => user.name);
console.log(names);
// Output: ["Raza", "Ali", "John"]


/** ---------------------------------------------------------
 *  5. Advanced Example: Transforming Objects
 *  ---------------------------------------------------------
 */

const updatedUsers = users.map((user) => {
    return {
        ...user,
        isAdult: user.age >= 18
    };
});

console.log(updatedUsers);
// [
//   { name: "Raza", age: 25, isAdult: true },
//   { name: "Ali", age: 30, isAdult: true },
//   { name: 'John', age: 17, isAdult: false }
// ]


/** ---------------------------------------------------------
 *  6. Advanced Example: map() with Index
 *  ---------------------------------------------------------
 */

const indexed = numbers.map((value, index) => {
    return `Index ${index} → Value ${value}`;
});

console.log(indexed);


/** ---------------------------------------------------------
 *  7. Advanced Example: map() for Data Conversion
 *  ---------------------------------------------------------
 */

const prices = ["10", "20", "30", "40"];

const numericPrices = prices.map(Number);
console.log(numericPrices);
// Output: [10, 20, 30, 40]


/** ---------------------------------------------------------
 *  8. Important Notes About map()
 *  ---------------------------------------------------------
 *
 *  ✔ map() always returns a new array
 *  ✔ map() does NOT change the original array
 *  ✔ map() always returns the same number of items
 *  ✔ map() is perfect for transformations
 *
 *  ✘ map() is NOT for filtering (use filter)
 *  ✘ map() is NOT for side effects (use forEach)
 *  ✘ map() cannot break early (use for...of)
 */
