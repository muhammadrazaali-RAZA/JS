/** ----------------------------------------------------
 *  Functions in JavaScript — Simple & Informative Notes
 *  ----------------------------------------------------
 *
 *  A function is a reusable block of code that performs
 *  a specific task. You define it once and call it
 *  whenever needed.
 */

/** Basic Function */
function sayHello() {
    console.log("Hello World!");
}

// sayHello     => Function reference (no execution)
// sayHello()   => Function call (executes the code)

sayHello();   // Output: Hello World!


/** Function with Parameters + Type Checking */
function addTwoNumbers(num1, num2) {
    // Check if both inputs are numbers before adding
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return null;   // Return null if invalid input
    }
}

let returnNumber = addTwoNumbers(5, 69);
console.log("returnNumber:", returnNumber);   // Output: 74


/** Function with Input Validation */
function loginUserMessage(username) {
    // If username is empty, undefined, or null
    if (!username) {
        return "Username is required";
    }
    return `${username} is just logged in`;
}

console.log(loginUserMessage());                      // Output: Username is required
console.log(loginUserMessage("Raza Ali"));   // Output: Raza Ali is just logged in


/** Function with Default Parameter */
function loginUser(username = "user") {
    // If no username is passed, "user" will be used
    return `${username} is just logged in`;
}

console.log(loginUser());   // Output: user is just logged in


// ************************* Advance *************************
console.log("************************* Advance *************************");

/** ---------------------------------------------------------
 *  Rest Parameters, Objects, and Array Handling — Notes
 *  ---------------------------------------------------------
 *
 *  Rest Parameter (...price):
 *  - Collects all remaining arguments into an array.
 *  - Useful when the number of inputs is unknown.
 */

function calculateCartPrice(val1, val2, ... price){             // Rest

    console.log("val1 & val2 : ", val1, " " , val2);                    // val1 & val2 :  A   B
    console.log("price : ", price);                      // [ 200, 500, 400, 3000, 8000, 15000 ]

    let count = 0
    price.forEach((i) => {                                        // --price is array
        count += i;
    });

    return count;
}

console.log(calculateCartPrice("A","B",2,5,4,3,8,15))   // 37


/** ---------------------------------------------------------
 *  Passing Objects to Functions
 *  ---------------------------------------------------------
 *
 *  - Functions can accept entire objects as parameters.
 *  - This is useful when multiple related values need to be passed.
 */

const user = {
    username: "Raza Ali",
    price: 1000
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}

handleObject(user);          //  Username is Raza Ali and price is 1000.
handleObject({     //   Username is Sam and price is 399.
    username: "Sam",
    price: 399
});



/** ---------------------------------------------------------
 *  Returning a Specific Value from an Array
 *  ---------------------------------------------------------
 *
 *  - Always check if the array exists and has enough elements.
 *  - array[1] returns the second element.
 */

const myNewArray = [200, 400, 100, 300];

function returnSecondValue(array) {
    if (array && array.length >= 1 ) {
        return array[1];
    }else {
        return null;
    }
}

console.log(returnSecondValue(myNewArray));       // 400
console.log(returnSecondValue());                 // null