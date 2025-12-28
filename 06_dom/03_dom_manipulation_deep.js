/** =========================================================
 *  DOM DEEP DIVE — Extended Notes (Based on Your Console Tests)
 *  =========================================================
 *
 *  These notes explain EXACTLY what you tested in DevTools,
 *  why you saw that output, and what interviewers expect
 *  you to understand from it.
 *
 *  Focus areas:
 *   ✅ NodeList vs HTMLCollection
 *   ✅ forEach behavior (undefined return)
 *   ✅ innerHTML effects
 *   ✅ Array.from() WHY and WHEN
 *   ✅ Reading DevTools console output correctly
 */


/** ---------------------------------------------------------
 *  1) listItems → NodeList
 *  ---------------------------------------------------------
 */

const listItems = document.querySelectorAll("li");
console.log(listItems);

/*
Console:
NodeList(3) [li, li, li]

IMPORTANT:
- querySelectorAll() ALWAYS returns a NodeList
- NodeList is NOT a real array
- But NodeList supports:
    ✔ forEach()
    ✔ index access (listItems[0])
    ❌ map(), filter(), reduce() (array-only)
*/


/** ---------------------------------------------------------
 *  2) Accessing NodeList items by index
 *  ---------------------------------------------------------
 */

listItems[1].style.backgroundColor = "blue";

/*
Console output:
"blue"

WHY?
- style.backgroundColor = "blue" is an assignment expression
- Assignment returns the assigned value
- That is why console prints "blue"
*/


/** ---------------------------------------------------------
 *  3) NodeList.forEach() return value
 *  ---------------------------------------------------------
 */

listItems.forEach((value) => value.style.backgroundColor = "yellow");

/*
Console output:
undefined

WHY?
- forEach() ALWAYS returns undefined
- It is meant for side effects (doing something),
  not for producing values
- Same reason:
*/

listItems.forEach((value) => value.style.backgroundColor = "red"); // undefined


/** ---------------------------------------------------------
 *  4) innerHTML replacement (CRITICAL CONCEPT)
 *  ---------------------------------------------------------
 */

title.innerHTML = `DOM Learning <span style="color:orange">UPDATED</span>`;

/*
Console output:
"DOM Learning <span style="color:orange">UPDATED</span>"

KEY POINTS:
- innerHTML REPLACES everything inside the element
- Old child nodes are DESTROYED
- New DOM nodes are CREATED

Interview warning:
❌ Using innerHTML removes old event listeners
*/


/** ---------------------------------------------------------
 *  5) NodeList is STATIC (important difference)
 *  ---------------------------------------------------------
 */

console.log(listItems); // NodeList(3)

/*
Even if DOM changes later:
- NodeList from querySelectorAll() is STATIC
- It does NOT auto-update
*/


/** ---------------------------------------------------------
 *  6) getElementsByClassName() → HTMLCollection
 *  ---------------------------------------------------------
 */

document.getElementsByClassName("heading");

/*
Console:
HTMLCollection [h1#title.heading]

KEY DIFFERENCE:
- HTMLCollection is LIVE
- It auto-updates when DOM changes
- It does NOT support forEach()
*/


/** ---------------------------------------------------------
 *  7) Why Array.from() is needed
 *  ---------------------------------------------------------
 */

Array.from(document.getElementsByClassName("heading"));

/*
Console:
[h1#title.heading]

WHAT HAPPENED:
- HTMLCollection → converted into a REAL Array
- Now you can use:
    ✔ forEach
    ✔ map
    ✔ filter
    ✔ reduce
*/


/** ---------------------------------------------------------
 *  8) Huge object in console — how to read it (INTERVIEW TIP)
 *  ---------------------------------------------------------
 *
 *  You saw this giant object:
 *   - innerHTML
 *   - innerText
 *   - textContent
 *   - classList
 *   - children
 *   - parentElement
 *   - style
 *
 *  Interviewers DO NOT expect you to memorize it.
 *  They expect you to know WHERE to look.
 */

const heading = document.getElementById("title");

console.log(heading.innerHTML);   // includes span
console.log(heading.innerText);   // visible text only
console.log(heading.textContent);// raw text
console.log(heading.children);   // HTMLCollection of children
console.log(heading.parentElement); // div
console.log(heading.nextElementSibling); // h2


/** ---------------------------------------------------------
 *  9) outerHTML vs innerHTML (often confused)
 *  ---------------------------------------------------------
 */

console.log(heading.innerHTML);
/*
DOM Learning <span style="color:orange">UPDATED</span>
*/

console.log(heading.outerHTML);
/*
<h1 id="title" class="heading">
  DOM Learning <span style="color:orange">UPDATED</span>
</h1>
*/


/** ---------------------------------------------------------
 *  10) Creating Array manually for reuse
 *  ---------------------------------------------------------
 */

const myArr = Array.from(document.getElementsByClassName("heading"));
console.log(myArr);

/*
Console:
[h1#title.heading]

BEST PRACTICE:
- Convert ONCE
- Reuse the array
*/


/** ---------------------------------------------------------
 *  11) forEach on real Array
 *  ---------------------------------------------------------
 */

myArr.forEach((item) => item.style.backgroundColor = "green");

/*
Console:
undefined

WHY?
- forEach still returns undefined
- Behavior is SAME for arrays and NodeLists
*/


/** ---------------------------------------------------------
 *  12) NodeList vs HTMLCollection — FINAL COMPARISON
 *  ---------------------------------------------------------
 *
 *  querySelectorAll()
 *   → NodeList
 *   → static
 *   → supports forEach
 *
 *  getElementsByClassName()
 *   → HTMLCollection
 *   → live
 *   → NO forEach
 *
 *  Array.from()
 *   → converts both into real arrays
 */


/** ---------------------------------------------------------
 *  13) Common Interview Traps (Based on your test)
 *  ---------------------------------------------------------
 *
 *  ❌ Expecting forEach to return something
 *     ✅ forEach always returns undefined
 *
 *  ❌ Treating NodeList as array
 *     ✅ Convert using Array.from()
 *
 *  ❌ Using innerHTML casually
 *     ✅ Prefer textContent or DOM methods
 *
 *  ❌ Forgetting NodeList is static
 *     ✅ Re-query if DOM changes
 */


/** =========================================================
 *  Mini Practice (Exactly your concepts)
 *  =========================================================
 */

// 1) Convert all <li> to array and make text uppercase
Array.from(document.querySelectorAll("li"))
    .forEach((li) => li.innerText = li.innerText.toUpperCase());

// 2) Change heading text without destroying span
const span = document.querySelector("#title span");
span.style.color = "red";

// 3) Add new li and observe NodeList vs HTMLCollection difference
const newLi = document.createElement("li");
newLi.innerText = "four";
document.querySelector("ul").appendChild(newLi);

// listItems stays same (static)
// getElementsByTagName("li") updates automatically (live)
