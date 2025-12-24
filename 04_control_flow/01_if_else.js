/** ---------------------------------------------------------
 *  Conditional Statements: if, else if, else
 *  ---------------------------------------------------------
 *
 *  Conditional statements allow your program to make decisions.
 *  They check conditions and run different code based on whether
 *  the condition is TRUE or FALSE.
 *
 *  Structure:
 *
 *      if (condition) {
 *          // runs when condition is true
 *      } else if (anotherCondition) {
 *          // runs if first condition is false AND this one is true
 *      } else {
 *          // runs when all above conditions are false
 *      }
 *
 *  Only ONE block will run in an if–else chain.
 */


/** ---------------------------------------------------------
 *  1. Basic if statement
 *  ---------------------------------------------------------
 */

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}
// Output: You are an adult


/** ---------------------------------------------------------
 *  2. if–else statement
 *  ---------------------------------------------------------
 */

let score = 45;

if (score >= 50) {
    console.log("You passed");
} else {
    console.log("You failed");
}
// Output: You failed


/** ---------------------------------------------------------
 *  3. if–else if–else chain
 *  ---------------------------------------------------------
 */

let temperature = 30;

if (temperature > 35) {
    console.log("It's very hot");
} else if (temperature > 25) {
    console.log("It's warm");
} else if (temperature > 15) {
    console.log("It's cool");
} else {
    console.log("It's cold");
}
// Output: It's warm


/** ---------------------------------------------------------
 *  4. Multiple conditions using logical operators
 *  ---------------------------------------------------------
 *
 *  &&  → AND (both conditions must be true)
 *  ||  → OR  (at least one condition must be true)
 */

let username = "Raza";
let isLoggedIn = true;

if (username && isLoggedIn) {
    console.log("Welcome back, " + username);
} else {
    console.log("Please log in");
}
// Output: Welcome back, Raza


/** ---------------------------------------------------------
 *  5. Truthy and Falsy values in if conditions
 *  ---------------------------------------------------------
 *
 *  Falsy values: false, 0, "", null, undefined, NaN
 *  Everything else is truthy.
 */

let value = "";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Output: Falsy
