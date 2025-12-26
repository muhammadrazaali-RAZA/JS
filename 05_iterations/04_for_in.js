/** ---------------------------------------------------------
 *  for...in LOOP — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 *  The `for...in` loop is used to iterate over the **enumerable
 *
 *  ✔ Enumerable = visible to loops
 *  ✘ Non‑enumerable = hidden from loops
 *  The property still exists — it’s just not shown.
 *
 *  properties (keys)** of an object.
 *
 *  It works best with:
 *      ✔ Plain objects
 *      ✔ Arrays (but not recommended)
 *      ✔ Custom objects with properties
 *
 *  It does NOT work with:
 *      ✘ Maps
 *      ✘ Sets
 *      ✘ Non-enumerable properties
 *
 *  Syntax:
 *      for (const key in object) {
 *          // key → property name
 *          // object[key] → value
 *      }
 */


/** ---------------------------------------------------------
 *  1. Basic Example with Object
 *  ---------------------------------------------------------
 */

const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby",
    swift: "Swift"
};

for (const key in myObject) {
    console.log(`${key} contains value ${myObject[key]}`);
}
// Output:
// js contains value javascript
// cpp contains value C++
// py contains value Python
// rb contains value Ruby
// swift contains value Swift


/** ---------------------------------------------------------
 *  2. for...in with Arrays (Not Recommended)
 *  ---------------------------------------------------------
 *
 *  - It loops over INDEXES, not values.
 *  - Order is NOT guaranteed.
 *  - Use for...of or forEach instead.
 */

const languages = ["JS", "C++", "Python"];

for (const index in languages) {
    console.log(`Index: ${index}, Value: ${languages[index]}`);
}
// Output:
// Index: 0, Value: JS
// Index: 1, Value: C++
// Index: 2, Value: Python


/** ---------------------------------------------------------
 *  3. for...in with Prototype Inheritance (Advanced)
 *  ---------------------------------------------------------
 *
 *  - for...in also loops over inherited properties.
 *  - Use hasOwnProperty() to filter them out.
 */

const parent = { country: "Austria" };
const child = Object.create(parent);
child.city = "Linz";

for (const key in child) {
    console.log(key, " :- " , child[key]);     // city  :-  Linz, country  :-  Austria  (inherited)
}

console.log("---- Filtering only own properties ----");

for (const key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key);  // city only
    }
}


/** ---------------------------------------------------------
 *  4. Why for...in DOES NOT work with Map
 *  ---------------------------------------------------------
 *
 *  Maps are iterable, but NOT enumerable.
 *  Meaning:
 *      - for...of works
 *      - for...in does NOT work
 */

const myMap = new Map();
myMap.set("PK", "Pakistan");
myMap.set("IN", "India");
myMap.set("AT", "Austria");
myMap.set("FR", "France");

for (const key in myMap) {
    console.log(key);   // NOTHING printed
}

/*
Why?
- Map stores entries internally, not as enumerable object keys.
- for...in only loops over object properties.
- Map is designed to be used with for...of.
*/


/** ---------------------------------------------------------
 *  5. Correct Way: Use for...of with Map
 *  ---------------------------------------------------------
 */

for (const [key, value] of myMap) {
    console.log(`${key} : ${value}`);
}
// Output:
// PK : Pakistan
// IN : India
// AT : Austria
// FR : France


/** ---------------------------------------------------------
 *  6. for...in on Strings (Advanced)
 *  ---------------------------------------------------------
 *
 *  - Loops over indexes of characters.
 */

const greeting = "Hi";

for (const index in greeting) {
    console.log(`Index: ${index}, Char: ${greeting[index]}`);
}
// Output:
// Index: 0, Char: H
// Index: 1, Char: i


/** ---------------------------------------------------------
 *  7. for...in on Custom Objects with Symbols (Advanced)
 *  ---------------------------------------------------------
 *
 *  - Symbol properties are NOT enumerable.
 */

const obj = {};
const secret = Symbol("secret");

obj.visible = "I am visible";
obj[secret] = "I am hidden";

for (const key in obj) {
    console.log(key);  // visible
}
// Symbol key is NOT shown


/** ---------------------------------------------------------
 *  8. Summary: When to Use for...in
 *  ---------------------------------------------------------
 *
 *  ✔ Use for...in:
 *      - Iterating over object keys
 *      - Inspecting object structure
 *      - Working with dynamic objects
 *
 *  ✘ Avoid for...in:
 *      - Arrays (use for...of or forEach)
 *      - Maps (use for...of)
 *      - Sets (use for...of)
 *      - When order matters
 */
