// array

/***
 *  Summary:
 * - Arrays are reference types → equality checks compare memory, not values.
 * - Use push/pop for end, unshift/shift for start.
 * - includes/indexOf help search values.
 * - join converts array to string.
 * - slice → non-destructive copy.
 * - splice → destructive modification.
 */

const myArr = [1, 2, 3, 4, 5, 6];           // Arrays can hold numbers, strings, booleans, objects, or even other arrays.
const hero = ["ironman", "hulk", "antman"];  // Arrays are reference types (non-primitive).

const secondArr = myArr;

console.log(myArr === secondArr);                   // true → both point to same memory
console.log(myArr === [0, 1, 2, 3, 4, 5, 6]);       // false → different array objects

console.log(myArr[0]);                             // 1
console.log(hero[0]);                              // "ironman"



// Common Array Methods

myArr.push(7);                                     // push(value) → adds value at the end
console.log(myArr);                                // [1, 2, 3, 4, 5, 6, 7];

myArr.pop();                                       // pop() → removes last value
console.log(myArr);                                // [1, 2, 3, 4, 5, 6];

myArr.unshift(99);                           // unshift(value) → adds value at the start
console.log(myArr);                                // [99, 1, 2, 3, 4, 5, 6];

myArr.shift();                                     // shift() → removes first value
console.log(myArr);                                // [1, 2, 3, 4, 5, 6];

console.log(myArr.includes(8));                    // false --includes(value) → checks if value exists

// --indexOf(value) → returns index of value, -1 if not found
console.log(myArr.indexOf(5));                     // 4
console.log(myArr.indexOf(15));                    // -1



const newArr = myArr.join();                // join() → converts array to string (comma-separated by default)

console.log(myArr);                                // [1, 2, 3, 4, 5, 6];
console.log(newArr);                               // "1,2,3,4,5,6"
console.log(typeof newArr);                        // string


// Slice vs Splice
//    - slice(start, end)
//      → Returns a new array (does NOT change original).
//      → End index is not included.

const sliced = myArr.slice(1, 4);         // myArr is [1, 2, 3, 4, 5, 6];
console.log(sliced);                               // [2, 3, 4]
console.log(myArr);                                // [1, 2, 3, 4, 5, 6] (unchanged)

/*** Important */
//    - array.splice(start, deleteCount, item1, item2, item3, ...)
//      → Changes the original array.
//      → Can remove, replace, or add elements.

/***
 * Syntax:
 *   array.splice(start, deleteCount, item1, item2, item3, ...)
 *
 * Parameters:
 * 1. start
 *    - Index where changes begin.
 *    - If negative → counts from the end of the array.
 *
 * 2. deleteCount
 *    - Number of elements to remove.
 *    - If 0 → no elements are removed (only insertion happens).
 *    - If omitted → removes all elements from start to end.
 *
 * 3. item1, item2, ...
 *    - Optional values to insert at the start index.
 *
 * Return Value:
 * - Returns an array of the removed elements.
 * - Modifies the original array (⚠ destructive).
 *
 * ---------------------------------------------------
 * Key Points:
 *
 * - splice() changes the original array.
 * - slice() does NOT change the original array (returns a copy).
 * - splice() can remove, insert, or replace elements.
 * - Return value is always the array of removed elements.
 *
 * ---------------------------------------------------
 * Comparison Table: slice vs splice
 *
 * | Feature        | slice()                          | splice()                          |
 * |----------------|----------------------------------|-----------------------------------|
 * | Original array | Not modified                     | Modified                          |
 * | Return value   | New array (copied elements)      | Removed elements                  |
 * | Usage          | Copy part of array               | Add/remove/replace elements       |
 *
 */


//      1. Removing elements:
console.log("1. Removing elements:");
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2);
console.log(removed);                                                   // [3, 4]      --return removed values
console.log(arr);                                                       // [1, 2, 5]   --modified in original array


//      2. Inserting elements:
console.log("2. Inserting elements:");
arr = [1, 2, 3, 4, 5];
removed = arr.splice(2, 0, 99, 100, 101, 102);
console.log(removed);                                                   // []          --return removed values
console.log(arr);                                                       // [1, 2, 99, 100, 101, 102, 3, 4, 5 ]


//      3. Replacing elements:
console.log("3. Replacing elements:");
arr = [1, 2, 3, 4, 5];
removed = arr.splice(1, 2, "a", "b");
console.log(removed);                                                   // [2, 3]      --return removed values
console.log(arr);                                                       // [1, "a", "b", 4, 5]


//      4. Using negative index:
console.log("4. Using negative index:");
arr = [10, 20, 30, 40, 50];
removed = arr.splice(-2, 1, 99);                  // -2 means start from 2nd last element (40).
console.log(removed);                                                   // [ 40 ]      --return removed values
console.log(arr);                                                       // [ 10, 20, 30, 99, 50 ]


//      5. DeleteCount omitted:
console.log("5. DeleteCount omitted:");
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = arr.splice(3);                                           // Removes everything from index 3 onwards.
console.log(removed);                                                   // [ 4, 5, 6, 7, 8, 9, 10 ]  --return removed values
console.log(arr);                                                       // [ 1, 2, 3 ]