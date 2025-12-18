``/** ---------------------------------------------------------
 *  Understanding `this`, Function Types, and Arrow Functions
 *  ---------------------------------------------------------
 *
 *  JavaScript behaves differently depending on:
 *  - How a function is defined (method, regular function, arrow function)
 *  - Where it is called (object, global, browser, Node)
 *
 *  The keyword `this` is the most important concept here.
 */


/** ---------------------------------------------------------
 *  1. `this` INSIDE OBJECT METHODS
 *  ---------------------------------------------------------
 *
 *  - When a function is defined inside an object (method),
 *    `this` refers to the object itself.
 */

const user = {
    username: "John",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);   // refers to the user object
    }
};

user.welcomeMessage();   // John, welcome to website

user.username = "Sam";
user.welcomeMessage();   // Sam, welcome to website


/** ---------------------------------------------------------
 *  2. `this` IN GLOBAL CONTEXT
 *  ---------------------------------------------------------
 *
 *  - In Node.js: `this` is an empty object {}
 *  - In Browser: `this` refers to the Window object
 */

console.log(this);   // {} in Node, Window in browser


/** ---------------------------------------------------------
 *  3. `this` INSIDE REGULAR FUNCTIONS
 *  ---------------------------------------------------------
 *
 *  - Regular functions do NOT automatically bind `this`.
 *  - Inside a normal function, `this` depends on HOW the function is called.
 *  - When called normally (not as a method), `this` is:
 *      - undefined in strict mode
 *      - global object in non‑strict mode
 */

function one() {
    let username = "Raza Ali";
    console.log(this.username);       // undefined
    // console.log(this);             // information and other functions
}
one();

const two = function () {
    let username = "Raza Ali";
    console.log(this.username);       // undefined
    // console.log(this);             // information and other functions
};
two();


/** ---------------------------------------------------------
 *  4. `this` INSIDE ARROW FUNCTIONS
 *  ---------------------------------------------------------
 *
 *  - Arrow functions DO NOT have their own `this`.
 *  - They use `this` from their surrounding (parent) scope.
 *  - In global scope (Node), parent scope = module → {}
 */

const arrowFunction = () => {
    let username = "Raza Ali";
    console.log(this.username);   // undefined
    console.log(this);            // {} in Node, Window in browser
};
arrowFunction();


/** ---------------------------------------------------------
 *  5. Arrow Function Syntax
 *  ---------------------------------------------------------
 *
 *  A) Explicit return (must use `return`)
 */

const addTwo = (num1 = 3, num2 = 2) => {
    return num1 + num2;
};

console.log("addTwo:", addTwo(3, 4));   // 7
console.log("addTwo:", addTwo());                   // 5


/** ---------------------------------------------------------
 *  B) Implicit return (no `return` keyword needed)
 *  ---------------------------------------------------------
 *
 *  - Works only when using a single expression.
 *  - Remove curly braces to enable implicit return.
 */

const addThree = (num1, num2, num3) => num1 + num2 + num3;

console.log("addThree:", addThree(1, 2, 3));   // 6


/** ---------------------------------------------------------
 *  6. Arrow Function Returning an Object
 *  ---------------------------------------------------------
 *
 *  - Common mistake: using {} without parentheses.
 *  - JS thinks {} is a function block, NOT an object.
 */

let arrowError = () => { username: "Raza Ali"; };

console.log(arrowError());   // undefined (because nothing is returned)


/** Correct way: wrap object in parentheses */
arrowError = () => ({ username: "Raza Ali" });

console.log(arrowError());   // { username: "Raza Ali" }
