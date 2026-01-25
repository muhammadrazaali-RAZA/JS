/**
 * Objects — Prototypes (Easy Notes + Examples)
 *
 * Goal: Understand what "prototype" means in JavaScript and how "new" works.
 *
 * ✅ Key idea:
 * JavaScript uses *prototype chains* for inheritance.
 * When you access a property, JS searches:
 *   object -> its prototype -> prototype’s prototype -> ... -> null
 */

/* -----------------------------------------------------------
   1) Primitives vs Objects
----------------------------------------------------------- */

/**
 * Primitives (NOT objects):
 *  - string, number, boolean, null, undefined, bigint, symbol
 *
 * Objects:
 *  - plain objects {}, arrays [], functions, dates, regex, etc.
 */

// ⚠️ Common confusion:
console.log(typeof null);
// "object"  <-- historical bug in JS. null is a primitive value, not a real object.

/**
 * ✅ Internal rule:
 * Every *object* has an internal link called [[Prototype]] (can be null).
 * That link points to another object (the prototype).
 *
 * null is special: it is the *end* of many prototype chains.
 */

/* -----------------------------------------------------------
   2) Arrays are Objects
----------------------------------------------------------- */

const arr = [1, 2, 3];
console.log(typeof arr);                       // "object"
console.log(Array.isArray(arr));               // true
console.log(arr.__proto__ === Array.prototype); // true (legacy way to check)

/**
 * Arrays inherit methods from Array.prototype, like:
 * push, pop, map, filter, forEach ...
 */
console.log(arr.map(x => x * 2)); // [2, 4, 6]

/* -----------------------------------------------------------
   3) Functions are "callable objects"
----------------------------------------------------------- */

function multiplyBy5(num) {
    return num * 5;
}

// Functions can have properties (because they are objects too)
multiplyBy5.power = 3;

console.log(multiplyBy5(5));            // 25
console.log(multiplyBy5.power);         // 3

/**
 * ✅ Important:
 * A function has a `.prototype` property (usually) that is used ONLY when you do `new FunctionName()`.
 */
console.log(multiplyBy5.prototype);     // { }  (an object)

// ⚠️ Arrow functions DO NOT have a prototype property for "new"
const arrowFn = (x) => x * 2;
console.log(arrowFn.prototype);         // undefined

/* -----------------------------------------------------------
   4) What "prototype" actually means (2 different things)
----------------------------------------------------------- */

/**
 * There are TWO related prototype concepts:
 *
 * (A) obj.__proto__  (or Object.getPrototypeOf(obj))
 *     -> the prototype *of an object instance*
 *
 * (B) Func.prototype
 *     -> the object that will become the prototype of instances created by: new Func()
 */

/* -----------------------------------------------------------
   5) Constructor function + prototype methods (your example, polished)
----------------------------------------------------------- */

function CreateUser(username, price) {
    // In strict mode, 'this' is undefined if you forget 'new'
    // So ALWAYS call it with new: new CreateUser(...)
    this.username = username;
    this.price = price;
}

// Put methods on prototype so all instances share ONE function in memory
CreateUser.prototype.increment = function () {
    this.price++;
};

CreateUser.prototype.print = function () {
    console.log(`Price of ${this.username} is ${this.price}`);
};

const chai = new CreateUser("chai", 100);
const tea  = new CreateUser("tea", 150);

chai.print();       // Price of chai is 100
chai.increment();
chai.print();       // Price of chai is 101

/**
 * ✅ Proof that both objects share the same prototype methods:
 */
console.log(chai.increment === tea.increment); // true

/**
 * ✅ Prototype checks (recommended way):
 */
console.log(Object.getPrototypeOf(chai) === CreateUser.prototype); // true
console.log(chai.__proto__ === CreateUser.prototype);              // true (legacy)
console.log(CreateUser.prototype.__proto__ === Object.prototype);  // true
console.log(Object.prototype.__proto__);                           // null (end of chain)

/* -----------------------------------------------------------
   6) What happens behind the scenes with "new"
----------------------------------------------------------- */

/**
 * new CreateUser("chai", 100) does roughly this:
 *
 * 1) Create an empty object:
 *    const obj = {}
 *
 * 2) Link its [[Prototype]] to CreateUser.prototype:
 *    obj.__proto__ = CreateUser.prototype
 *
 * 3) Call constructor with this = obj:
 *    CreateUser.call(obj, "chai", 100)
 *
 * 4) Return obj (unless constructor returns a NON-primitive object)
 */

function DemoNew(name) {
    this.name = name;
    // If we return an object explicitly, it replaces the created one:
    // return { hacked: true };
}
const d = new DemoNew("test");
console.log(d); // DemoNew { name: 'test' }

/* -----------------------------------------------------------
   7) Property lookup: how prototype chain works
----------------------------------------------------------- */

const base = {
    greet() {
        return "hello from base";
    }
};

const child = Object.create(base); // child.[[Prototype]] = base
child.name = "child";

console.log(child.name);    // found on child
console.log(child.greet()); // not on child -> found on base

/**
 * Lookup process:
 * child.greet?
 *  - not found on child
 *  - go to prototype (base)
 *  - found -> use it
 */

/* -----------------------------------------------------------
   8) Object.create(null): object with NO prototype
----------------------------------------------------------- */

const dict = Object.create(null);
dict.key = "value";

console.log(dict.key); // "value"
// dict.toString would be undefined because there is no Object.prototype in the chain
console.log(dict.toString); // undefined

/**
 * Use case:
 * Pure dictionaries where you don't want inherited keys like "toString".
 */

/* -----------------------------------------------------------
   9) Quick summary (memorize these)
----------------------------------------------------------- */

/**
 * ✅ Arrays are objects.
 * ✅ Functions are callable objects; they can have properties.
 * ✅ Every object has a prototype (internal [[Prototype]]) or null.
 * ✅ Function.prototype is used as the prototype for objects created via new.
 * ✅ Property access searches through the prototype chain.
 * ✅ Object.prototype is near the top; its prototype is null.
 */

/* -----------------------------------------------------------
   10) Mini practice (do yourself)
----------------------------------------------------------- */

/**
 * Q1: What prints and why?
 *
 * const a = {x: 1};
 * const b = Object.create(a);
 * console.log(b.x);
 *
 * Q2: Check if method is shared:
 * console.log(chai.print === tea.print);
 *
 * Q3: Make a constructor "Car" with methods on prototype:
 * Car(name, speed), accelerate() increases speed, show() prints info.
 */