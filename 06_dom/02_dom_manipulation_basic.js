
/** =========================================================
 *  DOM BASICS — Detailed Notes (Simple Words + Examples)
 *  =========================================================
 *
 *  DOM = Document Object Model
 *  JS can read/change HTML using the DOM.
 *
 *  Common interview focus:
 *   ✅ Selecting elements (querySelector / getElementById)
 *   ✅ Reading text (textContent / innerText / innerHTML)
 *   ✅ Changing styles (style.backgroundColor, style.padding)
 *   ✅ Working with classes (classList)
 *   ✅ Handling lists (NodeList, HTMLCollection)
 *
 *  In browser, you practice in DevTools Console.
 *
 *  Your HTML (reference):
 *   <h1 id="title" class="heading">DOM Learning ... <span style="display:none">test text</span></h1>
 *   <h2>...</h2> x3
 *   <p>...</p>
 *   <input type="password" />
 *   <ul><li>one</li><li>two</li><li>three</li></ul>
 */


/** ---------------------------------------------------------
 *  0) Quick Rules
 *  ---------------------------------------------------------
 *  - querySelector() returns the FIRST match.
 *  - querySelectorAll() returns a NodeList (looks like array).
 *  - getElementById() returns a single element (fast and common).
 *  - textContent includes hidden text.
 *  - innerText shows what the user sees (respects CSS like display:none).
 *  - innerHTML includes HTML tags inside.
 */


/** ---------------------------------------------------------
 *  1) SELECTING ELEMENTS (Most used)
 *  ---------------------------------------------------------
 */

// By id (very common)
const title = document.getElementById("title");

// CSS selector style
const title2 = document.querySelector("#title");      // same target
const firstH2 = document.querySelector("h2");         // first <h2>
const allH2 = document.querySelectorAll("h2");        // NodeList of all <h2>
const listItems = document.querySelectorAll("ul li"); // NodeList of all <li>

// Console check
console.log(title);
console.log(firstH2);
console.log(allH2);


/** ---------------------------------------------------------
 *  2) textContent vs innerText vs innerHTML (INTERVIEW FAV)
 *  ---------------------------------------------------------
 */

console.log("textContent:", title.textContent);
console.log("innerText:", title.innerText);
console.log("innerHTML:", title.innerHTML);

/*
Expected idea with your HTML:
- title.textContent -> includes "test text" even if display:none
- title.innerText   -> does NOT include hidden span text
- title.innerHTML   -> includes <span style="display: none">...</span>
*/


/** ---------------------------------------------------------
 *  3) CHANGING TEXT (Common tasks)
 *  ---------------------------------------------------------
 */

// Change visible text only
title.innerText = "New Heading from JS";

// Change raw content (includes hidden span if it exists)
title.textContent = "Heading via textContent";

// Insert HTML (be careful: can inject HTML)
title.innerHTML = `DOM Learning <span style="color:orange">UPDATED</span>`;


/** ---------------------------------------------------------
 *  4) STYLING ELEMENTS (Inline styles)
 *  ---------------------------------------------------------
 *  JS style uses camelCase:
 *    background-color  -> backgroundColor
 *    padding-left      -> paddingLeft
 */

title.style.backgroundColor = "green";
title.style.padding = "12px";
title.style.borderRadius = "8px";

const body = document.querySelector("body");
body.style.backgroundColor = "#111"; // overwrites CSS background if present
body.style.padding = "20px";


/** ---------------------------------------------------------
 *  5) classList (Better than style in many cases)
 *  ---------------------------------------------------------
 */

title.classList.add("bg-black");       // adds class
title.classList.remove("heading");     // removes class
title.classList.toggle("bg-black");    // toggles on/off
console.log(title.classList.contains("bg-black")); // true/false


/** ---------------------------------------------------------
 *  6) querySelectorAll() NodeList (looping)
 *  ---------------------------------------------------------
 *  NodeList supports forEach, and also for...of.
 */

// Example: style all h2
allH2.forEach((h) => {
    h.style.backgroundColor = "green";
    h.style.padding = "6px";
});

// Same using for...of
for (const h of allH2) {
    h.style.border = "1px solid #333";
}


/** ---------------------------------------------------------
 *  7) getElementsByClassName / getElementsByTagName
 *  ---------------------------------------------------------
 *  These return HTMLCollection (live collection).
 *  Often you convert to array to use array methods.
 */

const h2Collection = document.getElementsByTagName("h2"); // HTMLCollection
console.log(h2Collection);

// Convert to array if needed
const h2Array = Array.from(h2Collection);
h2Array.forEach((h) => (h.style.padding = "10px"));


/** ---------------------------------------------------------
 *  8) Attributes (id, type, href, etc.)
 *  ---------------------------------------------------------
 */

const input = document.querySelector("input");

// Read attribute
console.log(input.getAttribute("type")); // "password"

// Set attribute
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type here...");

// Quick properties (often used)
console.log(input.value); // current input value
input.value = "Hello";


/** ---------------------------------------------------------
 *  9) Creating + Inserting Elements (Very common)
 *  ---------------------------------------------------------
 */

const ul = document.querySelector("ul");

// Create new li
const newLi = document.createElement("li");
newLi.innerText = "four";

// Add it at end
ul.appendChild(newLi);

// Insert at start
const firstLi = document.querySelector("ul li");
const newFirst = document.createElement("li");
newFirst.textContent = "zero";
ul.insertBefore(newFirst, firstLi);


/** ---------------------------------------------------------
 *  10) Removing Elements
 *  ---------------------------------------------------------
 */

// Remove the last li
const lastLi = ul.lastElementChild;
lastLi.remove();

// Remove specific: find and remove "two"
const liTwo = Array.from(document.querySelectorAll("ul li"))
    .find((li) => li.innerText.toLowerCase() === "two");

if (liTwo) liTwo.remove();


/** ---------------------------------------------------------
 *  11) Traversing (Parent / Children / Siblings)
 *  ---------------------------------------------------------
 */

const someLi = document.querySelector("ul li");

console.log("parent:", someLi.parentElement);
console.log("children of ul:", ul.children); // HTMLCollection
console.log("first child:", ul.firstElementChild);
console.log("next sibling:", someLi.nextElementSibling);


/** ---------------------------------------------------------
 *  12) Events (Click / Input) — Minimal but important
 *  ---------------------------------------------------------
 */

title.addEventListener("click", () => {
    title.style.backgroundColor = "green";
    title.style.padding = "20px";
    console.log("Title clicked!");
});

input.addEventListener("input", (e) => {
    console.log("Current input value:", e.target.value);
});


/** ---------------------------------------------------------
 *  13) Common mistakes (Interview traps)
 *  ---------------------------------------------------------
 *
 *  ❌ document.getElementByID("title")
 *     ✅ document.getElementById("title")   (Id has lowercase d)
 *
 *  ❌ innerContent
 *     ✅ textContent / innerText / innerHTML
 *
 *  ❌ querySelector("title")   // looks for <title> tag
 *     ✅ querySelector("#title")  // # for id
 *
 *  ❌ NodeList is not a real array (but has forEach)
 *     ✅ Array.from(nodeList) when needed
 */


/** =========================================================
 *  Mini Practice Tasks (Do in console)
 *  =========================================================
 *
 *  1) Select #title and make background green + padding 10px.
 *  2) Select all <li> and add "✅ " in front of their text.
 *  3) Create a new <li> "four" and append to the <ul>.
 *  4) Change input type to "text" and set a placeholder.
 */

// 1)
document.querySelector("#title").style.backgroundColor = "green";
document.querySelector("#title").style.padding = "10px";

// 2)
document.querySelectorAll("ul li").forEach((li) => {
    li.innerText = "✅ " + li.innerText;
});

// 3)
const li = document.createElement("li");
li.innerText = "four";
document.querySelector("ul").appendChild(li);

// 4)
const inp = document.querySelector("input");
inp.setAttribute("type", "text");
inp.setAttribute("placeholder", "Type here...");
