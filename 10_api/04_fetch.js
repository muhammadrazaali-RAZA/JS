/** =========================================================
 *  fetch() — Detailed Notes (Easy → Advanced)
 *  =========================================================
 *
 *  fetch() is used to make HTTP requests (API calls).
 *  It is the modern replacement for XMLHttpRequest (XHR).
 *
 *  fetch() is:
 *   - Asynchronous
 *   - Promise-based
 *   - Non-blocking
 *
 *  Syntax:
 *    fetch(url, options)
 *      .then(response => response.json())
 *      .then(data => ...)
 *      .catch(error => ...)
 */


/** =========================================================
 *  1) Basic fetch() — GET request
 *  =========================================================
 */

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // response is NOT the actual data
        // it is a Response object (metadata + body stream)
        return response.json(); // converts body to JS object
    })
    .then((data) => {
        console.log("User data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

/*
Flow:
1) fetch() sends request
2) Browser handles network (Web API)
3) Promise resolves with Response
4) response.json() returns another Promise
5) Data is available
*/


/** =========================================================
 *  2) Important: fetch() does NOT reject on HTTP errors
 *  =========================================================
 *
 *  fetch() only rejects if:
 *   - Network error
 *   - CORS error
 *
 *  HTTP errors like 404 / 500 are still "successful fetches"
 */

fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then((response) => {
        console.log(response.ok);     // false
        console.log(response.status); // 404

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        return response.json();
    })
    .catch((err) => {
        console.log("Caught error:", err.message);
    });


/** =========================================================
 *  3) fetch() with async / await (Recommended)
 *  =========================================================
 */

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();
        console.log("Users:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();

/*
Why async/await is better:
- Cleaner
- Easier error handling
- Reads like synchronous code
*/


/** =========================================================
 *  4) POST request using fetch()
 *  =========================================================
 */

async function createUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Ali",
                email: "ali@example.com"
            })
        }
    );

    const data = await response.json();
    console.log("Created user:", data);
}

createUser();

/*
Key options:
- method
- headers
- body (stringified JSON)
*/


/** =========================================================
 *  5) Common HTTP Methods with fetch()
 *  =========================================================
 *
 *  GET    → fetch data
 *  POST   → create data
 *  PUT    → replace data
 *  PATCH  → update part of data
 *  DELETE → remove data
 */


/** =========================================================
 *  6) Sending headers (Auth tokens)
 *  =========================================================
 */

fetch("https://api.example.com/profile", {
    headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE",
        "Content-Type": "application/json"
    }
});


/** =========================================================
 *  7) Handling JSON vs text vs blob
 *  =========================================================
 */

fetch("https://api.example.com/data")
    .then((res) => res.json()); // JSON

fetch("https://example.com/readme.txt")
    .then((res) => res.text()); // Plain text

fetch("https://example.com/image.png")
    .then((res) => res.blob()); // Binary data (image, file)


/** =========================================================
 *  8) fetch() + Promise chaining
 *  =========================================================
 */

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return processData(data); // return forwards promise
    })
    .then((processed) => {
        console.log(processed);
    })
    .catch(console.error);


/** =========================================================
 *  9) Abort fetch() (cancel request)
 *  =========================================================
 */

const controller = new AbortController();

fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then(console.log)
    .catch((err) => {
        if (err.name === "AbortError") {
            console.log("Fetch aborted");
        }
    });

// Cancel request
controller.abort();


/** =========================================================
 *  10) fetch() vs Axios (Interview comparison)
 *  =========================================================
 *
 *  fetch():
 *   - Native
 *   - No auto JSON parsing
 *   - No auto error handling
 *
 *  Axios:
 *   - Third-party
 *   - Auto JSON
 *   - Rejects on HTTP errors
 */


/** =========================================================
 *  11) Real-life fetch() use cases
 *  =========================================================
 *
 *  - Login / Signup
 *  - Fetch dashboard data
 *  - Load products in e-commerce
 *  - Submit forms
 *  - Upload / download files
 */


/** =========================================================
 *  12) Common fetch() mistakes (VERY IMPORTANT)
 *  =========================================================
 *
 *  ❌ Forgetting await response.json()
 *  ❌ Assuming fetch rejects on 404
 *  ❌ Not setting Content-Type for POST
 *  ❌ Not using try/catch with await
 */


/** =========================================================
 *  13) Interview One-Liners (MEMORIZE)
 *  =========================================================
 *
 *  Q: What does fetch return?
 *  → A Promise that resolves to a Response object
 *
 *  Q: Does fetch reject on 404?
 *  → No
 *
 *  Q: How to parse JSON?
 *  → response.json()
 *
 *  Q: Is fetch blocking?
 *  → No, it is async
 */


/** =========================================================
 *  14) Final Mental Model 🧠
 *  =========================================================
 *
 *  fetch() → Promise<Response>
 *  Response → body stream
 *  response.json() → Promise<Data>
 *
 *  Always think in TWO promises.
 */
