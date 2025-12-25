/** ---------------------------------------------------------
 *  WHILE & DO-WHILE LOOPS — Detailed Notes with Examples
 *  ---------------------------------------------------------
 *
 *  Loops allow you to repeat code until a condition becomes false.
 *
 *  JavaScript provides two main conditional loops:
 *
 *      1. while loop
 *      2. do-while loop
 *
 *  Both are useful when you don't know how many times
 *  the loop should run in advance.
 */


/** ---------------------------------------------------------
 *  1. WHILE LOOP
 *  ---------------------------------------------------------
 *
 *  Syntax:
 *      while (condition) {
 *          // code runs while condition is TRUE
 *      }
 *
 *  - Condition is checked BEFORE each iteration.
 *  - If the condition is false at the start, the loop never runs.
 */

let i = 0;

while (i < 5) {
    console.log(`Value of i: ${i}`);
    i++;   // important to avoid infinite loop
}
// Output: 0,1,2,3,4


/** ---------------------------------------------------------
 *  Example: Counting Down
 *  ---------------------------------------------------------
 */

let count = 5;

while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}
// Output: 5,4,3,2,1


/** ---------------------------------------------------------
 *  Example: Looping Through an Array
 *  ---------------------------------------------------------
 */

const heroes = ["flash", "batman", "superman"];
let index = 0;

while (index < heroes.length) {
    console.log(heroes[index]);
    index++;
}
// Output: flash, batman, superman


/** ---------------------------------------------------------
 *  2. DO-WHILE LOOP
 *  ---------------------------------------------------------
 *
 *  Syntax:
 *      do {
 *          // code runs at least once
 *      } while (condition);
 *
 *  - Condition is checked AFTER the loop body.
 *  - The loop ALWAYS runs at least once, even if condition is false.
 */

let score = 1;

do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 3);
// Output: 1,2,3


/** ---------------------------------------------------------
 *  Example: Condition False at Start
 *  ---------------------------------------------------------
 */

let num = 10;

do {
    console.log("This will run once even though condition is false");
} while (num < 5);
// Output: runs once


/** ---------------------------------------------------------
 *  3. while vs do-while (Key Differences)
 *  ---------------------------------------------------------
 *
 *  while loop:
 *      - Checks condition first
 *      - May run zero times
 *
 *  do-while loop:
 *      - Runs code first, checks condition later
 *      - Always runs at least once
 */


/** ---------------------------------------------------------
 *  4. Infinite Loop Warning
 *  ---------------------------------------------------------
 *
 *  Always update your loop variable.
 *  Otherwise, the loop will run forever.
 *
 *  Example of infinite loop (DON'T RUN):
 *
 *      while (true) {
 *          console.log("Infinite");
 *      }
 */


/** ---------------------------------------------------------
 *  5. Practical Example: User Input Simulation
 *  ---------------------------------------------------------
 */

let attempts = 0;
let maxAttempts = 3;

do {
    console.log(`Attempt ${attempts + 1}: Trying to log in...`);
    attempts++;
} while (attempts < maxAttempts);
// Output: Attempt 1, Attempt 2, Attempt 3
