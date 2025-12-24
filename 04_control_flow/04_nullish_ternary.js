/** ---------------------------------------------------------
 *  Nullish Coalescing Operator (??)
 *  ---------------------------------------------------------
 *
 *  The nullish coalescing operator returns the **right-hand value**
 *  ONLY when the left-hand value is:
 *
 *      null
 *      undefined
 *
 *  It does NOT treat 0, "", false, or NaN as nullish.
 *
 *  Syntax:
 *      value = left ?? right;
 *
 *  Meaning:
 *      If left is null or undefined → return right
 *      Otherwise → return left
 *
 *  -------------------------
 *  Case 1: Normal value
 *  -------------------------
 */

let value;
value = 5 ?? 10;     // 5 is NOT null/undefined → return 5
console.log(value);  // Output: 5


/** -------------------------
 *  Case 2: null
 *  -------------------------
 */

value = null ?? 10;  // null → return 10
console.log(value);  // Output: 10


/** -------------------------
 *  Case 3: undefined
 *  -------------------------
 */

value = undefined ?? 15;  // undefined → return 15
console.log(value);       // Output: 15


/** -------------------------
 *  Case 4: Chaining ??
 *  -------------------------
 */

value = null ?? 20 ?? 25; // null → skip → 20 → return 20
console.log(value);       // Output: 20



/** ---------------------------------------------------------
 *  Ternary Operator (Conditional Operator)
 *  ---------------------------------------------------------
 *
 *  A short way to write simple if–else statements.
 *
 *  Syntax:
 *      condition ? True : False
 *
 *  Useful for quick decisions.
 */

const iceTeePrice = 70;
const budget = 100;

// If price <= budget → "Buy it", else → "Don't Buy"

iceTeePrice <= budget ? console.log("Buy it") : console.log("Don't Buy");