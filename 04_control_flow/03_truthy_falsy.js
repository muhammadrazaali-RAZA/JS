/** ---------------------------------------------------------
 *  Truthy & Falsy Values in JavaScript — Detailed Notes
 *  ---------------------------------------------------------
 *
 *  In JavaScript, every value is either:
 *      ✔ truthy  → treated as TRUE in conditions
 *      ✘ falsy   → treated as FALSE in conditions
 *
 *  This affects how if/else statements behave.
 *
 *  ---------------------------------------------------------
 *  1. Basic Truthy Check
 *  ---------------------------------------------------------
 */

let userEmail = "raza@gmail.com";   // non-empty string → truthy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Got user email


/** ---------------------------------------------------------
 *  2. Empty String ("") → Falsy
 *  ---------------------------------------------------------
 */

userEmail = "";   // empty string → falsy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Don't have user email


/** ---------------------------------------------------------
 *  3. BigInt 0n → Falsy
 *  ---------------------------------------------------------
 */

userEmail = 0n;   // BigInt zero → falsy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Don't have user email


/** ---------------------------------------------------------
 *  4. Empty Array [] → Truthy
 *  ---------------------------------------------------------
 *
 *  - Arrays are objects → always truthy
 *  - But an empty array has length 0
 */

userEmail = [];   // empty array → truthy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Got user email

// Checking if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// Output: Array is empty


/** ---------------------------------------------------------
 *  5. Empty Object {} → Truthy
 *  ---------------------------------------------------------
 *
 *  - Objects are always truthy
 *  - But to check if empty, count its keys
 */

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Output: Object is empty


/** ---------------------------------------------------------
 *  6. Falsy Values in JavaScript
 *  ---------------------------------------------------------
 *
 *  These values behave like FALSE in conditions:
 *
 *      false
 *      0
 *      ""
 *      -0
 *      0n          (BigInt zero)
 *      null
 *      undefined
 *      NaN
 */


/** ---------------------------------------------------------
 *  7. Truthy Values in JavaScript
 *  ---------------------------------------------------------
 *
 *  Everything else is truthy, including:
 *
 *      "0"         (string)
 *      "false"     (string)
 *      " "         (space string)
 *      []          (empty array)
 *      {}          (empty object)
 *      function() {}
 */


/** ---------------------------------------------------------
 *  8. Loose Equality (==) Weird Behavior
 *  ---------------------------------------------------------
 *
 *  JavaScript tries to convert values before comparing.
 *  This leads to surprising results:
 */

false == 0      // true
false == ''     // true
0 == ''         // true

// Always prefer === (strict equality) to avoid these issues.
