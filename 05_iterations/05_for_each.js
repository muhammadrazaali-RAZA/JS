/** ---------------------------------------------------------
 *  forEach() — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 *  forEach() is an array method used to iterate over each
 *  element of an array. It executes a callback function once
 *  for every item.
 *
 *  Syntax:
 *      array.forEach(function(value, index, array) {
 *          // logic
 *      });
 *
 *  Callback parameters:
 *      value → current element
 *      index → current index
 *      array → the entire array
 *
 *  IMPORTANT:
 *  - forEach() does NOT return a new array (unlike map()).
 *  - forEach() always returns undefined.
 *  - break / continue to do NOT work inside forEach().
 *  - You cannot stop a forEach loop early.
 *  - Use for...of or a normal for-loop if you need to break.
 */


/** ---------------------------------------------------------
 *  1. Basic Example: value + index
 *  ---------------------------------------------------------
 */

const coding = ["js", "py", "cpp", "java", "ruby"];

coding.forEach(function (value, index) {
    console.log(`${index} :- ${value}`);
});


console.log("++++++++++++++++++++++++++++++++");


/** ---------------------------------------------------------
 *  2. Arrow Function Version
 *  ---------------------------------------------------------
 */

coding.forEach((value) => {
    console.log(value);
});


console.log("++++++++++++++++++++++++++++++++");


/** ---------------------------------------------------------
 *  3. Passing a Named Function
 *  ---------------------------------------------------------
 */

function print(value, index) {
    console.log(`${index} :- ${value}`);
}

coding.forEach(print);
// forEach passes (value, index, array) automatically


console.log("++++++++++++++++++++++++++++++++");


/** ---------------------------------------------------------
 *  4. Using All Three Parameters (value, index, array)
 *  ---------------------------------------------------------
 */

coding.forEach((value, index, array) => {
    console.log(value, index, array);
});


console.log("++++++++++++++++++++++++++++++++");


/** ---------------------------------------------------------
 *  5. forEach() with Array of Objects
 *  ---------------------------------------------------------
 */

const myCoding = [
    { languageName: "JavaScript", languageFileName: ".js" },
    { languageName: "TypeScript", languageFileName: ".ts" },
    { languageName: "Python", languageFileName: ".py" },
    { languageName: "Java", languageFileName: ".java" },
    { languageName: "C++", languageFileName: ".cpp" }
];


/** ---------------------------------------------------------
 *  5A. Looping through each object + inner loop for keys
 *  ---------------------------------------------------------
 */

myCoding.forEach((valueObj) => {
    for (const key in valueObj) {
        console.log(`${key} :- ${valueObj[key]}`);
    }
});


console.log("++++++++++++++++++++++++++++++++");


/** ---------------------------------------------------------
 *  5B. Accessing specific properties
 *  ---------------------------------------------------------
 */

myCoding.forEach((value) => {
    console.log(value.languageName);
});
