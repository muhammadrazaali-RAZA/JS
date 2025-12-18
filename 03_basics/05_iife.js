/** ---------------------------------------------------------
 *  Immediately Invoked Function Expressions (IIFE)
 *  ---------------------------------------------------------
 *
 *  IIFE = A function that runs immediately after it is created.
 *
 *  Why use IIFE?
 *  - To avoid polluting the global scope.
 *  - To create a private scope (variables inside IIFE cannot be accessed outside).
 *  - Useful in older JS patterns, modules, and initialization code.
 *
 *  Structure of an IIFE:
 *
 *      (function() {
 *          // code
 *      })();
 *
 *  Breakdown:
 *      (function() {})   → Function expression
 *      ()                → Immediately invoked
 *
 *  Without parentheses, JS treats `function` as a declaration,
 *  so we wrap it in () to turn it into an expression.
 */


// Normal Function
// function functionIIFE() {
//     console.log(`Database Connected`);
// }
//
// functionIIFE();
//   |         |;
//   v         V
//  ( )        ();
//  ()();
//  (put whole function here)();


/** ---------------------------------------------------------
 *  1. Named IIFE
 *  ---------------------------------------------------------
 *
 *  - Has a function name (optional).
 *  - Still cannot be called again because it is not stored anywhere.
 */

(function namedFunctionIIFE() {
    console.log(`Database Connected`);
})();   // ← The final () executes the function immediately

// NOTE: Always end an IIFE with a semicolon if another IIFE follows.
// Otherwise, JS may try to merge them and cause errors (Don't know when to stop).


/** ---------------------------------------------------------
 *  2. Arrow / Unnamed / Anonymous IIFE with Parameters
 *  ---------------------------------------------------------
 *
 *  - You can pass arguments to an IIFE just like a normal function.
 *  - Useful for initialization with configuration values.
 */

((dbName) => {
    console.log(`${dbName}, Database Connected`);
})("MongoDB");   // Passing argument to the IIFE