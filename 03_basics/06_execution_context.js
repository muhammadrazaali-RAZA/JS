// Idea fetched from ChaiAurCode
// https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25

/******************************************************************
 * JavaScript Execution Context
 *
 * Execution Context = Environment where JavaScript code is evaluated
 * and executed.
 *
 * JavaScript runs code in THREE types of execution contexts:
 *
 * 1) Global Execution Context (GEC)
 * 2) Function Execution Context (FEC)
 * 3) Eval Execution Context (rare, avoid using eval)
 *
 * Each Execution Context has TWO phases:
 *  ➤ Memory Creation Phase (Hoisting phase)
 *  ➤ Execution Phase
 ******************************************************************/

/******************************************************************
 * 1) Global Execution Context (GEC)
 *
 * - Created when the JS file starts executing
 * - Only ONE Global Execution Context exists
 * - In browsers:
 *      this === window
 * - In Node.js:
 *      this === module.exports
 ******************************************************************/

// -------------------- Example Code --------------------

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/******************************************************************
 * MEMORY CREATION PHASE (Global Context)
 *
 * JavaScript scans the code and allocates memory.
 * No values are executed yet.
 *
 * Variables declared with `let` and `const` are hoisted
 * BUT remain in Temporal Dead Zone (TDZ).
 *
 * Memory looks like:
 *
 * val1      -> uninitialized (TDZ)
 * val2      -> uninitialized (TDZ)
 * addNum    -> function definition
 * result1   -> uninitialized (TDZ)
 * result2   -> uninitialized (TDZ)
 ******************************************************************/

/******************************************************************
 * EXECUTION PHASE (Global Context)
 *
 * Code executes line by line.
 *
 * val1      <- 10
 * val2      <- 5
 *
 * addNum(val1, val2) is called   -- line A
 * → creates a NEW Function Execution Context
 * → → new variable environment + execution thread
 ******************************************************************/

/******************************************************************
 * 2) Function Execution Context (FEC)
 *
 * → → paused [ EXECUTION PHASE (Global Context) ]
 *     → → working on → addNum(val1, val2) is called
 *
 * - Created every time a function is called
 * - Has its own:
 *      • Memory Phase
 *      • Execution Phase
 ******************************************************************/

/******************************************************************
 * MEMORY CREATION PHASE (Function Context: addNum)
 *
 * num1   -> 10
 * num2   -> 5
 * total  -> uninitialized
 ******************************************************************/

/******************************************************************
 * EXECUTION PHASE (Function Context: addNum)
 *
 * total <- num1 + num2
 * total <- 15
 *
 * return total
 *
 * Function Execution Context is DESTROYED after return
 ******************************************************************/

/******************************************************************
 * result1 <- 15        -- back to line A where we paused GEC
 *
 * addNum(10, 2) is called again
 * → NEW Function Execution Context is created
 *
 * result2 <- 12
 ******************************************************************/

/******************************************************************
 * 3) Eval Execution Context
 *
 * - Created when eval() is used
 * - Executes code dynamically
 * - Dangerous and slow
 * - Can cause scope conflicts
 * - NOT recommended in real-world applications
 *
 * Example (Avoid this):
 *
 * eval("let x = 10");
 ******************************************************************/

/******************************************************************
 * KEY INTERVIEW TAKEAWAYS
 *
 * ✔ JavaScript is single-threaded
 * ✔ Execution Context controls variable access
 * ✔ Each function call creates a new Execution Context
 * ✔ Hoisting happens in Memory Creation Phase
 * ✔ let/const are hoisted but NOT initialized
 * ✔ eval creates its own execution context (avoid it)
 ******************************************************************/
