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


/** ---------------------------------------------------------
 *  ⭐ ADVANCED forEach() CONCEPTS (Important for Interviews)
 *  ---------------------------------------------------------
 */

// 1. forEach() cannot be stopped
// coding.forEach((value) => {
//     if (value === "cpp") break;   // ❌ SyntaxError
// });
// Use for...of or for loop if you need break.

// 2. forEach() does NOT return anything
// const result = coding.forEach(v => v.toUpperCase());
// console.log(result);             // undefined
// If you want a transformed array → use map().

// 3. Mutating the original array
// You can modify the array inside forEach:
coding.forEach((value, index, array) => {
    array[index] = value.toUpperCase();
});
console.log(coding);


// 4. Asynchronous behavior warning
// await inside forEach does NOT pause the loop.
// coding.forEach(async (value) => {
//     await fetch(...);   // ❌ does NOT wait
// });
//  Use:for...of or Promise.all()



// 5. forEach() vs for...of vs map()

//            	Feature            	     	forEach            	for...of            	map
//            	Break/Continue  	     	❌ No	              ✔ Yes	            	❌ No
//            	Returns new array	     	❌ No                 ❌ No            	✔ Yes
//            	Best for	             	Side effects	      Looping values	    Transforming data