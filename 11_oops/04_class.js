/** =====================================================================
 *  KEYWORD: `class` (JavaScript) — SIMPLE → ADVANCED NOTES
 *  =====================================================================
 *
 *  `class` is modern syntax to create objects using prototypes.
 *  Important truth:
 *   ✅ JS is prototype-based
 *   ✅ `class` is "syntax sugar" over prototypes (cleaner, more readable)
 *
 *  Why use classes?
 *   - Create many similar objects (instances)
 *   - Organize data + methods together
 *   - Support inheritance with `extends`
 */


/** =====================================================================
 *  1) SIMPLE CLASS (properties + method)
 *  =====================================================================
 */

class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi ${this.name}`;
    }
}

const u1 = new User("Ali");
console.log(u1.greet()); // Hi Ali


/** =====================================================================
 *  2) CLASS WITHOUT constructor
 *  =====================================================================
 *  If you don't define a constructor, JS provides an empty one.
 */

class Empty {}
console.log(new Empty() instanceof Empty); // true


/** =====================================================================
 *  3) INSTANCE vs PROTOTYPE METHODS
 *  =====================================================================
 *  Methods written in class body go to the prototype (shared, memory efficient).
 */

class Counter {
    constructor() {
        this.count = 0; // instance property (unique per object)
    }

    inc() {           // prototype method (shared)
        this.count++;
    }
}

const c1 = new Counter();
const c2 = new Counter();
console.log(c1.inc === c2.inc); // true (shared method)


/** =====================================================================
 *  4) STATIC METHODS (belong to class, not instance)
 *  =====================================================================
 */

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(2, 3)); // 5
// new MathUtils().add(2,3) // ❌ not on instance


/** =====================================================================
 *  5) STATIC FIELDS + INSTANCE FIELDS
 *  =====================================================================
 */

class App {
    static version = "1.0.0"; // static field (class-level)
    name = "MyApp";          // instance field (per object)

    show() {
        return `${this.name} v${App.version}`;
    }
}

const app = new App();
console.log(app.show());     // MyApp v1.0.0
console.log(App.version);    // 1.0.0


/** =====================================================================
 *  6) PRIVATE FIELDS + PRIVATE METHODS (#)  (ES2020+)
 *  =====================================================================
 */

class BankAccount {
    #balance = 0; // private field

    constructor(owner, initial = 0) {
        this.owner = owner;
        this.#balance = initial;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("amount must be > 0");
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }

    #secretLog() {
        // private method
    }
}

const acc = new BankAccount("Ali", 100);
acc.deposit(50);
console.log(acc.getBalance()); // 150
// acc.#balance // ❌ SyntaxError (private)


/** =====================================================================
 *  7) GETTERS / SETTERS (control access like properties)
 *  =====================================================================
 */

class Temperature {
    constructor(celsius) {
        this._c = celsius; // convention: "_" means "internal"
    }

    get celsius() {
        return this._c;
    }

    set celsius(value) {
        if (typeof value !== "number") throw new Error("must be number");
        this._c = value;
    }

    get fahrenheit() {
        return (this._c * 9) / 5 + 32;
    }
}

const t = new Temperature(25);
console.log(t.fahrenheit); // 77
t.celsius = 30;
console.log(t.fahrenheit); // 86


/** =====================================================================
 *  8) INHERITANCE: extends + super
 *  =====================================================================
 *
 *  - `extends` makes one class inherit from another
 *  - In derived class constructor, you MUST call super() before this
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
        super(name);        // ✅ sets up `this` via parent constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks`;
    }
}

const d = new Dog("Buddy", "Labrador");
console.log(d.speak()); // Buddy barks


/** =====================================================================
 *  9) super for parent methods (not just constructor)
 *  =====================================================================
 */

class Base {
    hello() {
        return "Hello from Base";
    }
}

class Child extends Base {
    hello() {
        return super.hello() + " + Child";
    }
}

console.log(new Child().hello()); // Hello from Base + Child


/** =====================================================================
 *  10) IMPORTANT: class is NOT hoisted like function
 *  =====================================================================
 */

// const x = new A(); // ❌ ReferenceError (cannot use before declaration)
class A {}
const x = new A(); // ✅


/** =====================================================================
 *  11) CLASS EXPRESSION (named or anonymous)
 *  =====================================================================
 */

const Service = class {
    ping() {
        return "pong";
    }
};

console.log(new Service().ping()); // pong

const Named = class InternalName {
    who() {
        return InternalName.name;
    }
};

console.log(new Named().who()); // InternalName


/** =====================================================================
 *  12) instanceof (type checking via prototype chain)
 *  =====================================================================
 */

console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true
console.log(d instanceof Object);  // true


/** =====================================================================
 *  13) "class vs function constructor" (what’s the difference?)
 *  =====================================================================
 *
 *  Similarities:
 *   - Both create instances
 *   - Both use prototypes under the hood
 *
 *  Key differences:
 *   - class must be called with `new`
 *   - class body is strict mode by default
 *   - class syntax is cleaner for inheritance + private fields
 */


/** =====================================================================
 *  14) COMMON PITFALL: losing `this` in methods
 *  =====================================================================
 */

class Button {
    constructor(label) {
        this.label = label;
    }

    click() {
        return `Clicked ${this.label}`;
    }
}

const b = new Button("Save");
const handler = b.click;
// handler(); // ❌ this lost (in strict mode, this is undefined)

// fix:
const safeHandler = b.click.bind(b);
console.log(safeHandler()); // Clicked Save


/** =====================================================================
 *  15) MEMORIZE (INTERVIEW QUICK SUMMARY)
 *  =====================================================================
 *
 *  - JS is prototype-based; `class` is syntax sugar
 *  - constructor runs on `new`
 *  - methods in class body go to prototype (shared)
 *  - static members belong to class, not instance
 *  - extends + super for inheritance (super() before this)
 *  - private fields/methods use #
 *  - classes are not hoisted like function declarations
 */
