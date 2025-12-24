/** ---------------------------------------------------------
 *  FOR LOOPS — Detailed Notes with Simple Examples
 *  ---------------------------------------------------------
 *
 *  A for-loop is used to repeat a block of code a specific
 *  number of times. It has three main parts:
 *
 *      for (initialization; condition; increment) {
 *          // code to run
 *      }
 *
 *  - initialization → runs once at the start
 *  - condition → loop continues while this is TRUE
 *  - increment → runs after each iteration
 */


/** ---------------------------------------------------------
 *  1. Basic For Loop
 *  ---------------------------------------------------------
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Output: 0 to 9


/** ---------------------------------------------------------
 *  2. For Loop with Condition Inside
 *  ---------------------------------------------------------
 *
 *  - You can add conditions inside the loop.
 *  - Useful for detecting specific values.
 */

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        console.log("5 is printing first");
    }

    console.log(i);
}
// Output:
// 0,1,2,3,4
// "5 is printing first"
// 5,6,7,8,9


/** ---------------------------------------------------------
 *  3. Nested For Loops
 *  ---------------------------------------------------------
 *
 *  - A loop inside another loop.
 *  - Commonly used for matrices, tables, grids, etc.
 */

for (let i = 0; i <= 2; i++) {

    console.log(`Outer Loop value: ${i}`);

    for (let j = 0; j <= 3; j++) {
        console.log(`Inner Loop value: ${j} with outer value of ${i}`);
    }
}


/** ---------------------------------------------------------
 *  4. Multiplication Table Example
 *  ---------------------------------------------------------
 */

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X 9 = ${i * 9}`);
}


/** ---------------------------------------------------------
 *  5. Looping Through an Array
 *  ---------------------------------------------------------
 *
 *  - Arrays have a length property.
 *  - Use index < array.length to avoid errors.
 */

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}
// myArray[3] → undefined (index out of range)


/** ---------------------------------------------------------
 *  6. break and continue
 *  ---------------------------------------------------------
 *
 *  break:
 *      - Immediately stops the loop.
 *
 *  continue:
 *      - Skips the current iteration and moves to the next one.
 */


/** -------------------------
 *  break Example
 *  -------------------------
 */

for (let index = 1; index <= 8; index++) {
    if (index === 5) {
        console.log("Detected value:", index);
        break;   // stops the loop completely
    }
    console.log(`Value: ${index}`);
}
// Output stops at 5


console.log("-----------------------------");


/** -------------------------
 *  continue Example
 *  -------------------------
 *
 *  - Skips printing 5 but continues the loop.
 */

for (let index = 1; index <= 8; index++) {
    if (index === 5) {
        console.log("Detected value:", index);
        continue;   // skip this iteration only
    }
    console.log(`Value: ${index}`);
}
// Output prints all except 5
