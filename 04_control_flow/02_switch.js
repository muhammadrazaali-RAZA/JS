/** ---------------------------------------------------------
 *  SWITCH STATEMENT — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 * The switch statement is used when you want to compare
 *  the same value against multiple possible cases.
 *
 *  It is cleaner than writing many if–else if–else conditions.
 *
 *  Syntax:
 *
 *      switch (value) {
 *          case option1:
 *              // code
 *              break;
 *
 *          case option2:
 *              // code
 *              break;
 *
 *          default:
 *              // code if no case matches
 *      }
 *
 *  IMPORTANT:
 *  - `break` stops the switch from continuing to the next case.
 *  - Without `break`, JavaScript will run ALL cases below it
 *    (this is called "fall-through").
 *
 *
 *  ---------------------------------------------------------
 *  1. Basic Example
 *  ---------------------------------------------------------
 */

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
// Output: Wednesday

/** ---------------------------------------------------------
 *  Switch vs If–Else
 *  ---------------------------------------------------------
 *
 *  Use switch when:
 *      - You are checking ONE value against many options.
 *
 *  Use if–else when:
 *      - You need complex conditions (>, <, &&, ||, etc.)
 *      - You are comparing different variables
 *
 *
 *
 *  ---------------------------------------------------------
 *  2. Switch with Strings
 *  ---------------------------------------------------------
 */

let color = "green";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Slow down");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Unknown color");
}
// Output: Go


/** ---------------------------------------------------------
 *  3. Multiple Cases Sharing the Same Output
 *  ---------------------------------------------------------
 */

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "mango":
    case "banana":
        console.log("This is a fruit");
        break;

    default:
        console.log("Not a fruit");
}
// Output: This is a fruit


/** ---------------------------------------------------------
 *  ADVANCED SWITCH EXAMPLES
 *  ---------------------------------------------------------
 */


/** ---------------------------------------------------------
 *  4. Switch with Fall-Through Logic (Intentional)
 *  ---------------------------------------------------------
 *
 *  - Useful when multiple cases should run the same code.
 *  - Or when you want to run a sequence of actions.
 */

let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
    // no break → fall-through

    case "B":
        console.log("Very Good");
    // no break → fall-through

    case "C":
        console.log("Good");
        break;

    default:
        console.log("Invalid grade");
}
// Output:
// Very Good
// Good


/** ---------------------------------------------------------
 *  5. Switch with Expressions (switch(true))
 *  ---------------------------------------------------------
 *
 *  - Allows using conditions inside switch.
 *  - Works like if–else but cleaner for ranges.
 */

let marks = 78;

switch (true) {
    case (marks >= 90):
        console.log("Grade: A");
        break;

    case (marks >= 75):
        console.log("Grade: B");
        break;

    case (marks >= 50):
        console.log("Grade: C");
        break;

    default:
        console.log("Grade: F");
}
// Output: Grade: B


/** ---------------------------------------------------------
 *  6. Switch with typeof (Type Checking)
 *  ---------------------------------------------------------
 */

let value = 42;

switch (typeof value) {
    case "string":
        console.log("Value is a string");
        break;

    case "number":
        console.log("Value is a number");
        break;

    case "boolean":
        console.log("Value is a boolean");
        break;

    default:
        console.log("Unknown type");
}
// Output: Value is a number


/** ---------------------------------------------------------
 *  7. Switch with Function Calls
 *  ---------------------------------------------------------
 */

function getRole() {
    return "admin";
}

switch (getRole()) {
    case "admin":
        console.log("Full access granted");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("No access");
}
// Output: Full access granted


/** ---------------------------------------------------------
 *  8. Switch with Nested Switch (Advanced)
 *  ---------------------------------------------------------
 */

let country = "Pakistan";
let city = "Lahore";

switch (country) {
    case "Pakistan":
        switch (city) {
            case "Lahore":
                console.log("You selected Lahore, Pakistan");
                break;

            case "Karachi":
                console.log("You selected Karachi, Pakistan");
                break;

            default:
                console.log("Unknown city in Pakistan");
        }
        break;

    default:
        console.log("Unknown country");
}
// Output: You selected Lahore, Pakistan
