/** ---------------------------------------------------------
 *  Function Declarations vs Function Expressions
 *  ---------------------------------------------------------
 *
 *  JavaScript provides two main ways to create functions:
 *
 *  1. Function Declaration
 *  2. Function Expression
 *
 *  The key difference between them is **hoisting**.
 *
 *  HOISTING:
 *  - JavaScript moves function declarations to the top of the file
 *    during the compilation phase.
 *  - This means you can call a function declaration BEFORE it is defined.
 *  - Function expressions are NOT hoisted in the same way.
 */


/** ---------------------------------------------------------
 *  1. FUNCTION DECLARATION (Hoisted)
 *  ---------------------------------------------------------
 *
 *  - Fully hoisted.
 *  - You can call the function before its definition.
 */

console.log(addOne(1));   // Works because addOne is hoisted

function addOne(num) {
    return num + 1;
}

addOne(5);   // Also works normally


/** ---------------------------------------------------------
 *  2. FUNCTION EXPRESSION (NOT Hoisted)
 *  ---------------------------------------------------------
 *
 *  - Assigned to a variable.
 *  - The variable is hoisted, but NOT the function value.
 *  - You CANNOT call it before the line where it is defined.
 */

// console.log(addTwo(5));   // ❌ ERROR: Cannot access 'addTwo' before initialization

// Function Expression (stored in a variable)
const addTwo = function(num) {
    return num + 2;
};

addTwo(5);   // Works because the function is now defined


/** ---------------------------------------------------------
 *  WHY FUNCTION EXPRESSIONS ARE NOT HOISTED?
 *  ---------------------------------------------------------
 *
 *  - Only the variable name (addTwo) is hoisted, not the function body.
 *  - Before the assignment line runs, addTwo is in a "temporal dead zone".
 *  - Calling it early results in an error.
 */


/** ---------------------------------------------------------
 *  SUMMARY
 *  ---------------------------------------------------------
 *
 *  Function Declaration:
 *      function addOne() {}
 *      ✔ Hoisted
 *      ✔ Can be called before definition
 *
 *  Function Expression:
 *      const addTwo = function() {}
 *      ✘ Not hoisted (only variable name is)
 *      ✘ Cannot be called before definition
 *
 *  Use function declarations when:
 *      - You want hoisting
 *      - You want cleaner, top-level functions
 *
 *  Use function expressions when:
 *      - You want functions stored in variables
 *      - You want more control (e.g., closures, callbacks)
 */
