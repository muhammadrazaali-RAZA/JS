/** =====================================================================
 *  JAVASCRIPT "constructor" — DETAILED NOTES (SIMPLE → ADVANCED)
 *  =====================================================================
 *
 *  In JS, a "constructor" means:
 *   1) In a CLASS: the special method named `constructor(...)`
 *   2) In the OLD STYLE: a function used with `new` (constructor function)
 *
 *  Purpose:
 *   - Create + initialize a new object (set initial state)
 *   - Attach properties to the instance (`this`)
 *
 *  Key rule:
 *   - A constructor runs automatically when you do `new Something(...)`
 */


/** =====================================================================
 *  0) QUICK MENTAL MODEL
 *  =====================================================================
 *
 *  Think: "constructor = setup function for new objects"
 *
 *  Example:
 *   new User("Ali")  --> constructor runs --> sets this.name = "Ali"
 */


/** =====================================================================
 *  1) CLASS CONSTRUCTOR (MODERN WAY)
 *  =====================================================================
 */

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} is ${this.age}`;
    }
}

const u1 = new User("Ali", 22);
console.log(u1.info()); // Ali is 22

/*
What happened:
- new User("Ali", 22) created an object
- constructor ran automatically
- this referred to that new object
*/


/** =====================================================================
 *  2) DEFAULT CONSTRUCTOR (WHEN YOU DON'T WRITE ONE)
 *  =====================================================================
 *
 *  If you don't write a constructor, JS makes an empty one.
 */

class Empty {
    // constructor() {}  // (implicitly exists)
}

const e = new Empty();
console.log(e instanceof Empty); // true


/** =====================================================================
 *  3) CONSTRUCTOR FUNCTION (OLD WAY, STILL IMPORTANT)
 *  =====================================================================
 *
 *  Before classes, people used functions with `new`.
 */

function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

Car.prototype.getInfo = function () {
    return `${this.brand} (${this.year})`;
};

const c1 = new Car("Toyota", 2020);
console.log(c1.getInfo()); // Toyota (2020)

/*
Same idea as class:
- `Car` is called with `new`
- `this` becomes the new object
*/


/** =====================================================================
 *  4) WHAT EXACTLY DOES `new` DO? (VERY IMPORTANT)
 *  =====================================================================
 *
 *  new Fn(args...) does roughly:
 *   1) Create empty object: {}
 *   2) Link its prototype: obj.[[Prototype]] = Fn.prototype
 *   3) Call Fn with this = obj: Fn.call(obj, args...)
 *   4) If Fn returns an object -> use it, else use obj
 */

function TestNew(x) {
    this.x = x;
    // return { x: 999 }; // if you return an object explicitly, it replaces `this`
}
const t = new TestNew(5);
console.log(t.x); // 5


/** =====================================================================
 *  5) CONSTRUCTOR MUST BE CALLED WITH `new` (FOR CLASSES)
 *  =====================================================================
 */

class A {
    constructor() {
        this.v = 1;
    }
}

const a1 = new A(); // ✅
// A(); // ❌ TypeError: Class constructor A cannot be invoked without 'new'

/*
Class constructors are special:
- You cannot call them like normal functions.
*/


/** =====================================================================
 *  6) RETURN VALUE BEHAVIOR IN CONSTRUCTORS
 *  =====================================================================
 *
 *  - If you return a PRIMITIVE (number/string/boolean/null/undefined),
 *    it is ignored and `this` is returned.
 *  - If you return an OBJECT, that object becomes the result of `new`.
 */

function R1() {
    this.a = 1;
    return 123; // ignored
}
console.log(new R1().a); // 1

function R2() {
    this.a = 1;
    return { a: 999, extra: true }; // replaces instance
}
console.log(new R2()); // { a: 999, extra: true }


/** =====================================================================
 *  7) VALIDATION + ERRORS (GOOD PRACTICE)
 *  =====================================================================
 */

class BankAccount {
    constructor(owner, initialBalance = 0) {
        if (typeof owner !== "string" || owner.trim() === "") {
            throw new Error("owner must be a non-empty string");
        }
        if (typeof initialBalance !== "number" || initialBalance < 0) {
            throw new Error("initialBalance must be a non-negative number");
        }

        this.owner = owner;
        this.balance = initialBalance;
    }
}

const acc = new BankAccount("Ali", 100);
console.log(acc.balance); // 100


/** =====================================================================
 *  8) CONSTRUCTOR OVERLOADING? (JS DOES NOT SUPPORT IT)
 *  =====================================================================
 *
 *  In Java/C++ you can have multiple constructors with different params.
 *  In JS class: only ONE `constructor` allowed.
 *
 *  Solution: optional params, default params, or static factory methods.
 */

class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static fromArray(arr) {
        return new Point(arr[0] ?? 0, arr[1] ?? 0);
    }

    static fromObject(obj) {
        return new Point(obj.x ?? 0, obj.y ?? 0);
    }
}

console.log(new Point(5, 6));             // Point {x:5,y:6}
console.log(Point.fromArray([9, 2]));     // Point {x:9,y:2}
console.log(Point.fromObject({ x: 7 }));  // Point {x:7,y:0}


/** =====================================================================
 *  9) CONSTRUCTOR + PROTOTYPE METHODS (MEMORY EFFICIENT)
 *  =====================================================================
 *
 *  Bad pattern: defining methods inside constructor (creates new function per instance)
 */

function BadUser(name) {
    this.name = name;
    this.sayHi = function () {
        return `Hi ${this.name}`;
    };
}

const b1 = new BadUser("Ali");
const b2 = new BadUser("Ahmed");
console.log(b1.sayHi === b2.sayHi); // false  (wasteful)

/*
Better: put methods on prototype (shared)
*/

function GoodUser(name) {
    this.name = name;
}
GoodUser.prototype.sayHi = function () {
    return `Hi ${this.name}`;
};

const g1 = new GoodUser("Ali");
const g2 = new GoodUser("Ahmed");
console.log(g1.sayHi === g2.sayHi); // true


/** =====================================================================
 *  10) INHERITANCE: constructor + super()
 *  =====================================================================
 *
 *  In derived classes (extends), you MUST call super() before using this.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "some sound";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);         // ✅ sets up `this` using Animal's constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks`;
    }
}

const d = new Dog("Buddy", "Labrador");
console.log(d.speak()); // Buddy barks

/*
Rule:
- extends => must call super(...) first
- otherwise TypeError (cannot access this before super)
*/


/** =====================================================================
 *  11) PRIVATE FIELDS (#) COMMONLY INITIALIZED IN CONSTRUCTOR
 *  =====================================================================
 */

class SecureAccount {
    #balance;

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("amount must be > 0");
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const s = new SecureAccount("Ali", 50);
s.deposit(30);
console.log(s.getBalance()); // 80
// s.#balance; // ❌ error


/** =====================================================================
 *  12) "this" IN CONSTRUCTOR: COMMON CONFUSION
 *  =====================================================================
 *
 *  In a constructor called with `new`, `this` is the new instance.
 */

class Counter {
    constructor() {
        this.count = 0;
    }
    inc() {
        this.count++;
    }
}

const c = new Counter();
c.inc();
console.log(c.count); // 1

/*
If you lose `this` (e.g., pass method as callback), you may need bind/arrow.
(Not constructor-specific, but happens often in class usage.)
*/


/** =====================================================================
 *  13) ADVANCED: INSTANCE CREATION WITHOUT `new` (FACTORY FUNCTION)
 *  =====================================================================
 *
 *  Sometimes you don't want `new`. Use a factory:
 */

function createUser(name, age) {
    return {
        name,
        age,
        info() {
            return `${name} (${age})`;
        },
    };
}

const fu = createUser("Ali", 22);
console.log(fu.info()); // Ali (22)

/*
Pros:
- no `new`, simpler
Cons:
- prototype sharing is not automatic unless you do it manually
*/


/** =====================================================================
 *  14) ADVANCED: new.target (CHECK IF CALLED WITH new)
 *  =====================================================================
 *
 *  Useful in constructor functions to enforce `new`.
 */

function EnforcedUser(name) {
    if (!new.target) {
        throw new Error("Use `new EnforcedUser(...)`");
    }
    this.name = name;
}

const eu = new EnforcedUser("Ali");
// EnforcedUser("Ali"); // ❌ error


/** =====================================================================
 *  15) ADVANCED: PROTOTYPE CHAIN + constructor property
 *  =====================================================================
 *
 *  Instances link to prototype which has a `constructor` reference.
 */

function ProtoDemo() {}
const pd = new ProtoDemo();

console.log(Object.getPrototypeOf(pd) === ProtoDemo.prototype); // true
console.log(pd.constructor === ProtoDemo); // true (usually)

/*
Note:
- `constructor` is just a property; it can be changed if you overwrite prototype.
*/


/** =====================================================================
 *  16) COMMON PITFALLS (MEMORIZE)
 *  =====================================================================
 *
 *  1) Forgetting `new` (constructor functions):
 *     - this becomes global/undefined (strict mode) -> bug
 *
 *  2) Putting methods inside constructor:
 *     - duplicates functions -> memory waste
 *
 *  3) In derived class:
 *     - using this before super() -> crash
 *
 *  4) Returning object from constructor:
 *     - replaces instance (can surprise you)
 */


/** =====================================================================
 *  17) INTERVIEW QUICK SUMMARY (ONE PAGE)
 *  =====================================================================
 *
 *  - constructor initializes object state.
 *  - Runs automatically with `new`.
 *  - `new` creates object, links prototype, binds this, returns object.
 *  - Class constructors cannot be called without `new`.
 *  - In `extends`, call `super()` before `this`.
 *  - Prefer prototype/class methods over per-instance methods for efficiency.
 *  - Returning an object from constructor replaces the instance.
 */
