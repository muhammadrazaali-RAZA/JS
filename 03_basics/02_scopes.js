/** ---------------------------------------------------------
 *  JavaScript Scope — Detailed Notes with Simple Examples
 *  ---------------------------------------------------------
 *
 *  Scope defines **where a variable is accessible** in your code.
 *  JavaScript has the following main types of scope:
 *
 *  1. Global Scope
 *  2. Function Scope
 *  3. Block Scope
 *  4. Lexical (Inner) Scope
 *
 *  Understanding scope helps avoid bugs and makes code predictable.
 */


/** ---------------------------------------------------------
 *  1. GLOBAL SCOPE
 *  ---------------------------------------------------------
 *  - Variables declared outside any function or block.
 *  - Accessible from anywhere in the file.
 */

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);   // Accessible here
}

showGlobal();                 // Output: I am global
console.log(globalVar);       // Accessible here too


/** ---------------------------------------------------------
 *  2. FUNCTION SCOPE
 *  ---------------------------------------------------------
 *  - Variables declared inside a function using var/let/const
 *    are only accessible inside that function.
 */

function myFunction() {
    let functionVar = "Inside function";
    console.log(functionVar);   // Works
}

myFunction();
// console.log(functionVar);    // ❌ Error: functionVar is not defined


/** ---------------------------------------------------------
 *  3. BLOCK SCOPE (let & const)
 *  ---------------------------------------------------------
 *  - Variables declared inside {} using let or const
 *    are only accessible inside that block.
 */

{
    let blockVar = "Inside block";
    const blockConst = "Also inside block";
    console.log(blockVar);      // Works
}

// console.log(blockVar);       // ❌ Error
// console.log(blockConst);     // ❌ Error


/** ---------------------------------------------------------
 *  4. LEXICAL SCOPE (Inner Scope)
 *  ---------------------------------------------------------
 *  - Inner functions can access variables from outer functions.
 *  - Outer functions CANNOT access inner variables.
 */

function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar);   // Inner can access outer
        console.log(innerVar);   // Inner can access itself
    }

    innerFunction();

    // console.log(innerVar);    // ❌ Error: outer cannot access inner
}

outerFunction();


/** ---------------------------------------------------------
 *  SCOPE CHAIN
 *  ---------------------------------------------------------
 *  - When JavaScript cannot find a variable in the current scope,
 *    it moves outward step-by-step until it finds it.
 */

let x = 10;

function levelOne() {
    let y = 20;

    function levelTwo() {
        let z = 30;
        console.log(x, y, z);   // 10 20 30 (all accessible)
    }

    // console.log("Calling z: ", z);   // can't access

    levelTwo();
}

levelOne();


/** ---------------------------------------------------------
 *  VAR vs LET/CONST (Important Scope Difference)
 *  ---------------------------------------------------------
 *  - var is function-scoped (NOT block-scoped)
 *  - let and const are block-scoped
 */

if (true) {
    var a = 100;   // function-scoped
    let b = 200;   // block-scoped
}

console.log(a);    // Works (var escapes the block)
// console.log(b); // ❌ Error (let stays inside block)


/** ---------------------------------------------------------
 *  SUMMARY
 *  ---------------------------------------------------------
 *  - Global Scope: Accessible everywhere.
 *  - Function Scope: Only inside the function.
 *  - Block Scope: let/const inside {}.
 *  - Lexical Scope: Inner functions can access outer variables.
 *  - Scope Chain: JS searches outward for missing variables.
 */
