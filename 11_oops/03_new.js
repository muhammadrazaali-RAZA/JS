/** =========================================================
 *  KEYWORD: `new` (JavaScript)
 *  =========================================================
 *
 *  `new` is used to create an object instance from:
 *   - a constructor function (old style)
 *   - a class (modern style)
 *
 *  Core idea:
 *   new Something(...)  -> creates a fresh object + runs constructor
 */


/** =========================================================
 *  1) SIMPLE EXAMPLE
 *  =========================================================
 */

class User {
    constructor(name) {
        this.name = name;
    }
}

const u = new User("Ali");
console.log(u.name); // Ali


/** =========================================================
 *  2) SAME THING WITH CONSTRUCTOR FUNCTION (OLD STYLE)
 *  =========================================================
 */

function Car(brand) {
    this.brand = brand;
}

const c = new Car("Toyota");
console.log(c.brand); // Toyota


/** =========================================================
 *  3) WHAT EXACTLY DOES `new` DO? (THE 4 STEPS)
 *  =========================================================
 *
 *  new Fn(a, b) basically does:
 *
 *  Step 1: Create a new empty object
 *      obj = {}
 *
 *  Step 2: Link prototype
 *      obj.__proto__ = Fn.prototype
 *
 *  Step 3: Call the function with `this = obj`
 *      Fn.call(obj, a, b)
 *
 *  Step 4: Return the object
 *      - If Fn returns an object => return that object
 *      - Otherwise => return obj
 */


/** =========================================================
 *  4) DEMO: prototype linking (VERY IMPORTANT)
 *  =========================================================
 */

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    return `Hi, I am ${this.name}`;
};

const p1 = new Person("Ahmed");

console.log(p1.sayHi()); // Hi, I am Ahmed
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true


/** =========================================================
 *  5) PITFALL: forgetting `new` (constructor functions)
 *  =========================================================
 *
 *  In strict mode -> `this` is undefined => crash
 *  In sloppy mode -> `this` becomes global object => bug
 */

"use strict";

function BadUser(name) {
    this.name = name; // ❌ will crash if called without `new` in strict mode
}

// BadUser("Ali"); // ❌ TypeError: Cannot set properties of undefined
const good = new BadUser("Ali"); // ✅ works


/** =========================================================
 *  6) Classes: cannot call without `new`
 *  =========================================================
 */

class A {}
// A(); // ❌ TypeError: Class constructor A cannot be invoked without 'new'
new A(); // ✅


/** =========================================================
 *  7) ADVANCED: return behavior
 *  =========================================================
 *
 *  - return primitive => ignored, `this` returned
 *  - return object => object replaces `this`
 */

function X() {
    this.a = 1;
    return 123; // ignored
}
console.log(new X().a); // 1

function Y() {
    this.a = 1;
    return { a: 999 };
}
console.log(new Y().a); // 999


/** =========================================================
 *  8) ADVANCED: enforce `new` using new.target
 *  =========================================================
 */

function MustUseNew(name) {
    if (!new.target) throw new Error("Use `new MustUseNew(...)`");
    this.name = name;
}

const m = new MustUseNew("Ali"); // ✅
// MustUseNew("Ali"); // ❌ error
