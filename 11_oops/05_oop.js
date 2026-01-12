/** =========================================================
 *  OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT
 *  =========================================================
 *
 *  OOP is a way to structure code using:
 *   - Objects
 *   - Classes
 *   - Reusability
 *   - Real-world modeling
 *
 *  JavaScript is:
 *   ❌ NOT class-based like Java/C++
 *   ✅ Prototype-based (classes are syntactic sugar)
 *
 *  Core OOP Pillars:
 *   1) Encapsulation
 *   2) Abstraction
 *   3) Inheritance
 *   4) Polymorphism
 */


/** =========================================================
 *  1) OBJECT — The foundation of OOP
 *  =========================================================
 *
 *  Object = collection of properties + methods
 */

const user = {
    username: "Ali",
    loginCount: 5,
    signedIn: true,

    getDetails: function () {
        return `${this.username} logged in ${this.loginCount} times`;
    }
};

console.log(user.username);        // Ali
console.log(user.getDetails());    // Ali logged in 5 times

/*
Real-life:
user = object
username, loginCount = properties
getDetails = method
*/


/** =========================================================
 *  2) FUNCTION CONSTRUCTOR (OLD WAY)
 *  =========================================================
 *
 *  Before ES6 classes, JS used constructor functions.
 */

function User(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;

    this.getDetails = function () {
        return `${this.username} logged in ${this.loginCount} times`;
    };
}

const user1 = new User("Ali", 5);
const user2 = new User("Ahmed", 10);

console.log(user1.getDetails());
console.log(user2.getDetails());

/*
new keyword does:
1) Creates empty object {}
2) Sets this = that object
3) Returns the object
*/


/** =========================================================
 *  3) PROTOTYPE (Memory-efficient methods)
 *  =========================================================
 *
 *  Problem above:
 *   - getDetails is copied for every object (waste of memory)
 *
 *  Solution:
 *   - Put methods on prototype
 */

function UserProto(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;
}

UserProto.prototype.getDetails = function () {
    return `${this.username} logged in ${this.loginCount} times`;
};

const u1 = new UserProto("Ali", 5);
const u2 = new UserProto("Ahmed", 10);

console.log(u1.getDetails());
console.log(u2.getDetails());

/*
Prototype:
- Shared by all instances
- Core of JS OOP
*/


/** =========================================================
 *  4) CLASS (Modern syntax — preferred)
 *  =========================================================
 *
 *  Class is just cleaner syntax over prototypes
 */

class UserClass {
    constructor(username, loginCount) {
        this.username = username;
        this.loginCount = loginCount;
    }

    getDetails() {
        return `${this.username} logged in ${this.loginCount} times`;
    }
}

const uc1 = new UserClass("Ali", 5);
console.log(uc1.getDetails());


/** =========================================================
 *  5) ENCAPSULATION
 *  =========================================================
 *
 *  Encapsulation = keeping data + methods together
 *  + restricting direct access
 */

class BankAccount {
    #balance; // private field (ES2020+)

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Ali", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500

// acc.#balance ❌ ERROR (private)

/*
Real life:
- ATM does not allow direct balance change
- You must use methods
*/


/** =========================================================
 *  6) ABSTRACTION
 *  =========================================================
 *
 *  Abstraction = show WHAT, hide HOW
 */

class Car {
    start() {
        this.#igniteEngine();
        console.log("Car started");
    }

    #igniteEngine() {
        console.log("Engine ignited internally");
    }
}

const car = new Car();
car.start();
// car.#igniteEngine() ❌ not allowed

/*
User only knows:
car.start()
Internal complexity is hidden
*/


/** =========================================================
 *  7) INHERITANCE
 *  =========================================================
 *
 *  Inheritance = one class gets features of another
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks

/*
Dog:
- inherits name
- overrides speak()
*/


/** =========================================================
 *  8) POLYMORPHISM
 *  =========================================================
 *
 *  Polymorphism = same method name, different behavior
 */

class Shape {
    area() {
        return 0;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes = [
    new Square(5),
    new Circle(3)
];

shapes.forEach(shape => {
    console.log(shape.area());
});

/*
Same method: area()
Different results
*/


/** =========================================================
 *  9) STATIC METHODS
 *  =========================================================
 *
 *  Static methods belong to class, not object
 */

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(2, 3)); // 5
// new MathUtils().add ❌

/*
Example:
Math.random()
Array.isArray()
*/


/** =========================================================
 *  10) instanceof (Type checking)
 *  =========================================================
 */

console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(dog instanceof Object);  // true


/** =========================================================
 *  11) OOP vs Functional (Interview Insight)
 *  =========================================================
 *
 *  OOP:
 *   - State + behavior together
 *   - Better for large systems
 *
 *  Functional:
 *   - Pure functions
 *   - Less side effects
 *
 *  JS supports BOTH
 */


/** =========================================================
 *  12) Interview Quick Summary (MEMORIZE)
 *  =========================================================
 *
 *  - JS is prototype-based
 *  - Classes are syntax sugar
 *  - new creates instance
 *  - this refers to current object
 *  - private fields use #
 *  - extends = inheritance
 *  - override methods = polymorphism
 */


/** =========================================================
 *  13) Real-World OOP Use Cases
 *  =========================================================
 *
 *  - User authentication system
 *  - UI components (React components are classes/functions)
 *  - Game objects (Player, Enemy, Weapon)
 *  - Banking systems
 *  - E-commerce products
 */
