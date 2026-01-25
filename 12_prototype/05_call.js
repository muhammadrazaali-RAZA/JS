function SetName(username) {
    // complex DB calls
    this.username = username;
    console.log("Called")
}

function UserCreate(username,email,password) {

    // SetUsername(username);  will not set value

    SetName.call(this, username);

    this.email = email;
    this.password = password;
}

const tea = new UserCreate("chai", "chai@google.com", "123");
console.log(tea);


/************************************************************
 *  JAVASCRIPT NOTES — .call(), this, and Constructor Functions
 *  Author: Muhammad Raza Ali
 *  Purpose: Learn how .call() helps control "this" in functions
 ************************************************************/


/************************************************************
 * 1. BASIC FUNCTION (SetUsername)
 *
 * This function simulates a heavy/complex operation such as:
 * - Database calls
 * - API requests
 * - Validation logic
 *
 * It sets a "username" property on whatever object "this" refers to.
 ************************************************************/

function SetUsername(username) {
    // Imagine complex DB logic here...
    this.username = username;
    console.log("Called SetUsername()");
}



/************************************************************
 * 2. createUser FUNCTION (acts like a constructor)
 *
 * When we use "new createUser()", JavaScript:
 *  - Creates a new empty object
 *  - Sets "this" to that new object
 *  - Returns the object automatically
 *
 * Inside createUser(), we want to reuse SetUsername() to set
 * the username on the SAME new object.
 ************************************************************/

function createUser(username, email, password) {

    /********************************************************
     * ❌ WRONG WAY:
     * SetUsername(username);
     *
     * Why wrong?
     * - Calling SetUsername() normally means "this" inside
     *   SetUsername() does NOT refer to the new user object.
     * - It refers to the global object (or undefined in strict mode).
     * - So username will NOT be set on the new user.
     ********************************************************/

    /********************************************************
     * ✅ CORRECT WAY: Use .call()
     *
     * SetUsername.call(this, username);
     *
     * Meaning:
     * - Run SetUsername()
     * - But FORCE "this" to be the new object created by
     *   new createUser()
     *
     * This ensures:
     *   this.username = username
     * is added to the correct object.
     ********************************************************/
    SetUsername.call(this, username);

    // Now set the remaining properties normally
    this.email = email;
    this.password = password;
}



/************************************************************
 * 3. CREATING A NEW USER
 *
 * Using "new" keyword:
 * const chai = new createUser("chai", "chai@google.com", "123");
 *
 * Steps behind the scenes:
 * 1. A new empty object is created: {}
 * 2. "this" inside createUser refers to that new object
 * 3. SetUsername.call(this, username) attaches username
 * 4. email and password are added
 * 5. The final object is returned
 ************************************************************/

const chai = new createUser("chai", "chai@google.com", "123");

console.log(chai);

/************************************************************
 * OUTPUT:
 *
 * Called SetUsername()
 * {
 *   username: "chai",
 *   email: "chai@google.com",
 *   password: "123"
 * }
 *
 ************************************************************/



/************************************************************
 * 4. WHY .call() IS IMPORTANT (Beginner → Advanced)
 *
 * ✔ .call() lets you manually control what "this" refers to.
 * ✔ Useful when reusing functions inside constructors.
 * ✔ Helps avoid repeating code.
 * ✔ Allows function borrowing (one object using another's method).
 *
 * Syntax:
 *   functionName.call(thisValue, arg1, arg2, ...)
 *
 * Example:
 *   SetUsername.call(this, username);
 *
 ************************************************************/



/************************************************************
 * 5. ADVANCED NOTES
 *
 * - .call() is part of Function.prototype
 * - .apply() is similar but takes arguments as an array
 * - .bind() returns a new function with "this" permanently set
 *
 * Example:
 *   SetUsername.apply(this, [username]);
 *   const fn = SetUsername.bind(this, username);
 *
 * These are core tools for mastering JavaScript OOP.
 ************************************************************/
