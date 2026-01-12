/** =====================================================================
 *  KEYWORD: `this` (JavaScript) — SIMPLE → ADVANCED NOTES
 *  =====================================================================
 *
 *  `this` means: "the current object for this call"
 *  BUT its value depends on the call-site (how the function is invoked).
 *
 *  Big rule:
 *   - `this` is NOT decided when you define a function
 *   - `this` IS decided when you CALL it
 */


/** =====================================================================
 *  1) SIMPLE: `this` inside an object method
 *  =====================================================================
 */

const user = {
    name: "Ali",
    greet() {
        return `Hi ${this.name}`;
    },
};

console.log(user.greet()); // Hi Ali
// Here: this === user


/** =====================================================================
 *  2) `this` in a constructor (with `new`)
 *  =====================================================================
 */

function Person(name) {
    this.name = name; // `this` is the new object created by `new`
}

const p = new Person("Ahmed");
console.log(p.name); // Ahmed


/** =====================================================================
 *  3) The 4 common `this` bindings (MOST IMPORTANT)
 *  =====================================================================
 *
 *  A) Method call: obj.fn()         => this = obj
 *  B) Function call: fn()           => this = global object (sloppy) OR undefined (strict)
 *  C) Constructor call: new Fn()    => this = new instance
 *  D) Explicit binding: fn.call(x)  => this = x
 */


/** =====================================================================
 *  4) Function call: strict vs non-strict
 *  =====================================================================
 */

function showThis() {
    return this;
}

console.log(showThis()); // (sloppy mode) -> global object (browser: window)

// Strict mode:
function showThisStrict() {
    "use strict";
    return this;
}
console.log(showThisStrict()); // undefined


/** =====================================================================
 *  5) Explicit binding: call / apply / bind
 *  =====================================================================
 */

function introduce(city) {
    return `${this.name} from ${city}`;
}

const obj = { name: "Ali" };

console.log(introduce.call(obj, "Vienna"));       // Ali from Vienna
console.log(introduce.apply(obj, ["Vienna"]));    // Ali from Vienna

const bound = introduce.bind(obj);
console.log(bound("Vienna")); // Ali from Vienna

/*
call:  pass args normally
apply: pass args as array
bind:  returns a new function with fixed `this`
*/


/** =====================================================================
 *  6) Common pitfall: losing `this`
 *  =====================================================================
 */

const counter = {
    count: 0,
    inc() {
        this.count++;
    },
};

counter.inc();
console.log(counter.count); // 1

const f = counter.inc;
// f(); // ❌ `this` lost (strict => this is undefined, will crash)
// In sloppy mode it might modify global object -> hidden bug

// Fix with bind:
const safe = counter.inc.bind(counter);
safe();
console.log(counter.count); // 2


/** =====================================================================
 *  7) Arrow functions: `this` is NOT dynamic (lexical this)
 *  =====================================================================
 *
 *  Arrow functions do NOT have their own `this`.
 *  They capture `this` from the surrounding scope.
 */

const team = {
    name: "Dev",
    members: ["A", "B"],
    show() {
        // arrow uses `this` from show() (which is team)
        return this.members.map(m => `${m} in ${this.name}`);
    },
};

console.log(team.show()); // [ 'A in Dev', 'B in Dev' ]

/*
If you used a normal function in map:
  this would become undefined (strict) unless you bind it.
*/


/** =====================================================================
 *  8) Arrow pitfall: don’t use arrow as object method (often wrong)
 *  =====================================================================
 */

const bad = {
    name: "Ali",
    greet: () => `Hi ${this.name}`, // `this` here is NOT `bad`
};

console.log(bad.greet()); // Usually "Hi undefined" (depends on environment)


/** =====================================================================
 *  9) Classes: `this` inside methods
 *  =====================================================================
 */

class Box {
    constructor(w) {
        this.w = w;
    }

    getW() {
        return this.w;
    }
}

const b = new Box(10);
console.log(b.getW()); // 10

// Losing this:
const g = b.getW;
// g(); // ❌ this lost

// Fix:
const g2 = b.getW.bind(b);
console.log(g2()); // 10


/** =====================================================================
 *  10) Advanced: `this` in event handlers (browser idea)
 *  =====================================================================
 *
 *  In DOM event handlers:
 *   - normal function: `this` is the element
 *   - arrow function: `this` is from outer scope
 *
 *  (Just conceptual, no DOM code needed here.)
 */


/** =====================================================================
 *  11) MEMORIZE (INTERVIEW LINE)
 *  =====================================================================
 *
 *  `this` is determined by call-site:
 *   - obj.fn()        -> obj
 *   - fn()            -> undefined (strict) / global (sloppy)
 *   - new Fn()        -> new instance
 *   - call/apply/bind -> explicitly set
 *   - arrow function  -> lexical `this` (no own this)
 */
