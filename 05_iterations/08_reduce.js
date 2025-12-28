/** ---------------------------------------------------------
 *  reduce() — Simple, Clear, and Detailed Explanation
 *  ---------------------------------------------------------
 *
 *  What does reduce() do?
 *
 *  reduce() takes an array and “reduces” it into a single value.
 *  That single value can be:
 *      - a number (sum, product, average)
 *      - an array (building a new array)
 *      - an object (grouping data)
 *      - anything you want
 *
 *  How does reduce() work?
 *
 *  reduce(callback, initialValue)
 *
 *  The callback runs for every element and receives:
 *      accumulator → the running total (or result so far)
 *      currentValue → the current element in the array
 *
 *  The accumulator starts with the initialValue you provide.
 *
 *  On each step:
 *      accumulator = callback(accumulator, currentValue)
 *
 *  After the last element, reduce() returns the final accumulator.
 */


/** ---------------------------------------------------------
 *  1. Basic Example: Sum of Numbers
 *  ---------------------------------------------------------
 */

const prices = [1, 2, 3, 4, 5];

let total = prices.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);   // initial value = 0

console.log(total);
// Output:
// accumulator: 0 and currentValue: 1
// accumulator: 1 and currentValue: 2
// accumulator: 3 and currentValue: 3
// accumulator: 6 and currentValue: 4
// accumulator: 10 and currentValue: 5
// Final total = 15


/** ---------------------------------------------------------
 *  2. Same Example Using Arrow Function
 *  ---------------------------------------------------------
 */

total = prices.reduce((acc, cur) => acc + cur - 1, 0);
// Explanation:
// Each step does: acc + cur - 1
// This is just a custom formula to show reduce() flexibility.

console.log(total);
// Output:
// Final total = 10


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(totalAmount);
// Output: 22996
