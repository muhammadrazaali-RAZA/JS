/** ---------------------------------------------------------
 *  filter() vs forEach() — Detailed Notes + Advanced Examples
 *  ---------------------------------------------------------
 *
 *  filter():
 *      - Creates a NEW array.
 *      - Only includes elements where the callback returns TRUE.
 *      - Does NOT modify the original array.
 *      - Perfect for selecting items based on conditions.
 *
 *  forEach():
 *      - Used for looping.
 *      - Does NOT return a new array.
 *      - Used for side effects (push, console.log, etc.)
 *      - Cannot break or return early.
 */


/** ---------------------------------------------------------
 *  1. Filtering Odd and Even Numbers
 *  ---------------------------------------------------------
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Odd numbers → implicit return
const oddNumbers = numbers.filter((num) => num % 2 === 1);

// Even numbers → explicit return (because of {})
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;   // MUST use return when using {}
});

console.log(oddNumbers);   // [1, 3, 5, 7, 9]
console.log(evenNumbers);  // [2, 4, 6, 8, 10]


/** ---------------------------------------------------------
 *  2. Doing the Same Thing with forEach()
 *  ---------------------------------------------------------
 *
 *  - forEach() does NOT return a new array.
 *  - You must manually push values into arrays.
 */

const newOdd = [];
const newEven = [];

numbers.forEach((number) => {
    if (number % 2 === 0) {
        newEven.push(number);
    } else {
        newOdd.push(number);
    }
});

console.log(newOdd);   // [1, 3, 5, 7, 9]
console.log(newEven);  // [2, 4, 6, 8, 10]


/** ---------------------------------------------------------
 *  3. Filtering Objects in an Array
 *  ---------------------------------------------------------
 *
 *  - filter() is extremely powerful for searching and selecting
 *    objects based on multiple conditions.
 */

const books = [
    { title: 'Book One', genre: 'Fiction',     publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History',   publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science',    publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction',     publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History',   publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science',   publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


/** ---------------------------------------------------------
 *  3A. Filter by Genre
 *  ---------------------------------------------------------
 */

const historyBooks = books.filter((book) => book.genre === 'History');

console.log(historyBooks);
// [
//   { title: 'Book Three', ... },
//   { title: 'Book Seven', ... }
// ]


/** ---------------------------------------------------------
 *  3B. Filter by Multiple Conditions
 *  ---------------------------------------------------------
 *
 *  Example:
 *      - Published after 1990
 *      - Genre is Non-Fiction
 */

const publishBooks = books.filter(
    (book) => book.publish > 1990 && book.genre === 'Non-Fiction'
);

console.log(publishBooks);
// [
//   { title: 'Book Two', publish: 1992, ... }
// ]


/** ---------------------------------------------------------
 *  4. Why filter() is Better Than forEach() for Selection
 *  ---------------------------------------------------------
 *
 *  filter():
 *      ✔ returns a new array
 *      ✔ clean and readable
 *      ✔ no need to manually push values
 *
 *  forEach():
 *      ✘ does not return anything
 *      ✘ requires manual push
 *      ✘ cannot break early
 *
 *  Use filter() whenever you want to SELECT items.
 */
