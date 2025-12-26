/** ---------------------------------------------------------
 *  for...of LOOP — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 *  The `for...of` loop is used to iterate over **iterable**
 *  objects such as:
 *
 *      ✔ Arrays
 *      ✔ Strings
 *      ✔ Maps
 *      ✔ Sets
 *      ✔ Typed Arrays
 *      ✔ NodeLists (browser)
 *
 *  It gives you the **value directly**, unlike `for...in`
 *  which gives you the index/key.
 *
 *  Syntax:
 *      for (const item of iterable) {
 *          // use item
 *      }
 */


/** ---------------------------------------------------------
 *  1. Basic Example with Array
 *  ---------------------------------------------------------
 */

const arr = [10, 11, 12, 13, 14, 15];

for (const num of arr) {
    console.log(num);
}
// Output: 10, 11, 12, 13, 14, 15


/** ---------------------------------------------------------
 *  2. Iterating Over a String
 *  ---------------------------------------------------------
 *
 *  - Strings are iterable character-by-character.
 */

const greeting = "Hello World!";

for (const char of greeting) {
    if (char === " ") continue;  // skip spaces
    console.log(char);
}
// Output: H e l l o W o r l d !


/** ---------------------------------------------------------
 *  3. Iterating Over an Array of Objects
 *  ---------------------------------------------------------
 */

const users = [
    { name: "Raza", age: 25 },
    { name: "Ali", age: 30 },
    { name: "John", age: 28 }
];

for (const user of users) {
    console.log(`${user.name} is ${user.age} years old`);
}


/** ---------------------------------------------------------
 *  4. Using Destructuring of Array, Inside for...of
 *  ---------------------------------------------------------
 */

const points = [
    [10, 20],
    [30, 40],
    [50, 60]
];

for (const [x, y] of points) {
    console.log(`X: ${x}, Y: ${y}`);
}


/** ---------------------------------------------------------
 *  5. for...of with Sets (No duplicates)
 *  ---------------------------------------------------------
 */

const mySet = new Set([1, 2, 3, 3, 4, 4]);

for (const value of mySet) {
    console.log(value);
}
// Output: 1, 2, 3, 4


/** ---------------------------------------------------------
 *  6. for...of with Maps (Key + Value)
 *  ---------------------------------------------------------
 */

const myMap = new Map();
myMap.set("PK", "Pakistan");
myMap.set("IN", "India");
myMap.set("AT", "Austria");
myMap.set("Fr", "France");

for (const [key, value] of myMap) {
    console.log(`${key} :-  ${value}`);
}


/** ---------------------------------------------------------
 *  7. Nested for...of Loops
 *  ---------------------------------------------------------
 */

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of matrix) {
    for (const col of row) {
        console.log(col);
    }
}


/** ---------------------------------------------------------
 *  8. for...of with break and continue
 *  ---------------------------------------------------------
 */

const nums = [1, 2, 3, 4, 5, 6];

for (const n of nums) {
    if (n === 4) {
        console.log("Stopping at 4");
        break;
    }
    console.log(n);
}

for (const n of nums) {
    if (n % 2 === 0) continue;  // skip even numbers
    console.log(n);
}


/** ---------------------------------------------------------
 *  9. Comparing for...of vs for...in
 *  ---------------------------------------------------------
 *
 *  for...of → values
 *  for...in → keys/indexes
 */

const sample = ["a", "b", "c"];

for (const value of sample) {
    console.log("for...of value:", value);
}

for (const index in sample) {
    console.log("for...in index:", index);
}


/** ---------------------------------------------------------
 *  10. Custom Iterables (Advanced)
 *  ---------------------------------------------------------
 *
 *  - Any object becomes iterable if it implements Symbol.iterator.
 */

const customIterable = {
    start: 1,
    end: 5,

    [Symbol.iterator]() {
        let current = this.start;
        const last = this.end;

        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

for (const num of customIterable) {
    console.log(num);
}
// Output: 1 2 3 4 5

