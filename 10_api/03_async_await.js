
/** ---------------------------------------------------------
 *  async/await (Promise consumption)
 *  ---------------------------------------------------------
 *
 *  async function always returns a Promise.
 *  await pauses ONLY the async function, not the whole JS program.
 *
 *  ⚠ If the awaited promise rejects and you don't handle it,
 *    it becomes an "unhandled promise rejection".
 */

const promiseCreate = new Promise((resolve, reject) => {
    setTimeout(() => {

        let error = true;

        if(!error){
            resolve({username:"JS",pass:"123"});
        }else{
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

/** ---------------------------------------------------------
 *  async/await WITHOUT try/catch (NOT safe)
 *  ---------------------------------------------------------
 *
 *  If promiseCreate rejects, this function will throw.
 *  If nobody catches it -> console shows unhandled rejection.
 */
async function consumePromise() {
    const response = await promiseCreate;
    console.log("consumePromise response:", response);
}

// consumePromise(); // unsafe if promise rejects



/** ---------------------------------------------------------
 *  async/await WITH try/catch (SAFE + recommended)
 *  ---------------------------------------------------------
 *
 *  This is the correct pattern for async/await.
 */
async function consumePromiseTryCatch() {
    try {
        const response = await promiseCreate;
        console.log("consumePromiseTryCatch response:", response);
    } catch (err) {
        console.log("consumePromiseTryCatch error:", err);
    } finally {
        console.log("consumePromiseTryCatch finally: done");
    }
}

consumePromiseTryCatch();  // safe


/** ---------------------------------------------------------
 *  async/await equivalent of .then().catch()
 *  ---------------------------------------------------------
 *
 *  These two are logically the same:
 *
 *  A) promise.then(...).catch(...)
 *  B) try { await promise } catch(e) { ... }
 */

// A)
promiseCreate
    .then((data) => console.log("THEN:", data))
    .catch((e) => console.log("CATCH:", e));

// B)
(async () => {
    try {
        const data = await promiseCreate;
        console.log("AWAIT:", data);
    } catch (e) {
        console.log("TRY/CATCH:", e);
    }
})();


/** ---------------------------------------------------------
 *  Real-life example: try-catch vs then().catch()
 *  ---------------------------------------------------------
 */

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log("LENGTH: ", data.length);
        console.log("Object value : ", data[82]);
    }catch (error){
        console.log("ERROR: ", error);
    }
}
getAllUsers();

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json() )
    .then((data) => console.log("LENGTH: ", data.length))
    .catch(error => console.log(error));



/** ---------------------------------------------------------
 *  Interview Notes (Short + Important)
 *  ---------------------------------------------------------
 *
 *  ✅ .then() returns a NEW promise
 *     - This is why chaining works.
 *
 *  ✅ .catch() catches:
 *     - reject(...)
 *     - thrown errors inside .then()
 *
 *  ✅ .finally() does not receive the resolved value.
 *     - It's used for cleanup: stop loading spinner, close modal, etc.
 *
 *  ✅ Prefer async/await + try/catch for readable code,
 *     especially when you have multiple awaits.
 */
