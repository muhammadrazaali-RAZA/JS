`fetch()` is basically a **high-level wrapper** over the browser’s networking stack. It returns a **Promise immediately**, while the real HTTP work happens **asynchronously** in the browser (or in Node’s HTTP stack if you’re in Node).

## What `fetch()` does behind the scenes (step-by-step)

### 1) You call `fetch(url, options)`

* Browser creates a **Request** object (URL, method, headers, body, mode, credentials, etc.).
* **It does not block** JavaScript.

### 2) The request goes through the browser pipeline

Common checkpoints:

* **Service Worker** (if registered) can intercept and respond.
* **HTTP cache** (may serve from cache or revalidate).
* **CORS rules** check if cross-origin.
* For some cross-origin requests, browser may do a **preflight OPTIONS** request.

### 3) Actual network happens (outside JS)

* DNS lookup → TCP connect → TLS handshake (HTTPS) → HTTP request sent.
* Browser handles redirects, connection pooling (keep-alive), compression, etc.

### 4) Response arrives

* As soon as headers arrive, `fetch` resolves to a **Response** object.
* Response body is typically a **stream** (you choose how to read it: `.json()`, `.text()`, `.blob()`, etc.).

### 5) Body reading is async

* `await res.json()` reads the stream, collects bytes, decodes, parses JSON.

### Important behavior

* `fetch()` **only rejects** on **network-level failures** (DNS fail, offline, blocked, aborted).
* HTTP errors like **404/500 do NOT reject** — you must check:

    * `res.ok` (true for 200–299)
    * `res.status`

---

## Diagram: end-to-end `fetch()` pipeline (browser)

```
JS Code
  |
  |  fetch(url, options)  --> returns Promise immediately
  v
[ Create Request object ]
  |
  v
+----------------------------------------------------------+
| Browser Fetch Pipeline                                    |
|                                                           |
| 1) Service Worker?  ---- intercept? ----> return Response |
|        | no                                           ^   |
|        v                                              |   |
| 2) HTTP Cache? ---- hit? ----> return cached Response |   |
|        | miss                                         |   |
|        v                                              |   |
| 3) CORS check / Preflight (OPTIONS) if needed         |   |
|        | allowed                                      |   |
|        v                                              |   |
| 4) Network stack: DNS -> TCP -> TLS -> HTTP           |   |
|        |                                              |   |
|        v                                              |   |
| 5) Receive headers -> create Response object ----------+  |
|        |                                                  |
|        v                                                  |
| 6) Body stream (ReadableStream)                           |
+----------------------------------------------------------+
  |
  v
Promise resolves to Response
  |
  |  await res.json() / res.text() / res.blob()
  v
Read stream -> decode -> parse -> return data
```

---

## Diagram: event loop view (why it’s non-blocking)

```
Call Stack:            Web APIs / Network:        Microtask Queue:
-----------            -------------------        ----------------
fetch(...)  ----->     start request              (empty)
return Promise
continue JS...

...later...            response arrives
                       -> settle Promise   --->   then/await
                                                  continuation
                                                  
                                                  runs ASAP 
                                                  after current 
                                                  JS execution
```

---

## Minimal code showing the “two async stages”

```js
// Stage 1: fetch resolves when headers are available (Response object)
const res = await fetch("https://api.example.com/users");

// Stage 2: body read (stream) + parse
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();
console.log(data);
```

---

## Advanced bits people mess up

### 1) `fetch` doesn’t throw on 404/500

```js
const res = await fetch("/not-found");
console.log(res.status); // 404
console.log(res.ok);     // false
// No exception unless you throw it yourself
```

### 2) Aborting a fetch (AbortController)

```js
const controller = new AbortController();

setTimeout(() => controller.abort(), 1000);

try {
  const res = await fetch("/slow", { signal: controller.signal });
} catch (e) {
  console.log("Aborted or network failed:", e.name);
}
```

### 3) Body can be read only once

```js
const res = await fetch("/data");
const t = await res.text();
// await res.json(); // ❌ fails because stream already consumed
```

## (1) **Browser vs Node.js** 
### (2) **CORS/Preflight + Streaming**.

---

## 1) Browser `fetch()` behind-the-scenes (full pipeline)

```text
JS Thread
  |
  | fetch(url, options)   -> returns Promise immediately
  v
[Build Request]  (URL, method, headers, body, mode, credentials, redirect, signal)
  |
  v
+--------------------------- Browser Fetch Pipeline ---------------------------+
|  (A) Service Worker?  ---- yes -> SW can respond or forward to network      |
|         | no                                                                |
|         v                                                                   |
|  (B) Mixed content / CSP / Permissions checks (may block)                   |
|         |                                                                   |
|         v                                                                   |
|  (C) CORS step (if cross-origin)                                            |
|         |                                                                   |
|         |-- may trigger PRE-FLIGHT (OPTIONS)                                |
|         v                                                                   |
|  (D) Cache (HTTP cache) / Revalidation (ETag, If-None-Match, etc.)          |
|         |                                                                   |
|         v                                                                   |
|  (E) Network stack: DNS -> TCP -> TLS -> HTTP/2|HTTP/3 -> send request      |
|         |                                                                   |
|         v                                                                   |
|  (F) Receive response headers -> construct Response object                  |
|         |                                                                   |
|         v                                                                   |
|  (G) Body is a stream (ReadableStream)                                      |
+----------------------------------------------------------------------------+
  |
  v
Promise resolves to Response (headers available)
  |
  | await res.text()/json()/blob()  -> consumes stream async
  v
Data in JS
```

**Important:** In browsers, the **Promise resolves when headers are available**, not when the whole body is downloaded.

---

## 2) CORS + Preflight (what it is + sequence diagram)

### When does preflight happen?

For **cross-origin** requests that are **not “simple requests”**.

**Simple request** (usually NO preflight) means:

* Method is **GET**, **HEAD**, or **POST**
* AND headers are only “simple headers” (like `Accept`, `Content-Type` limited values, etc.)
* AND `Content-Type` is one of:

  * `application/x-www-form-urlencoded`
  * `multipart/form-data`
  * `text/plain`

If you do things like:

* `PUT`, `DELETE`, `PATCH`
* `Authorization` header
* `Content-Type: application/json`
* custom headers like `X-Token: ...`

➡️ Browser typically sends **OPTIONS preflight** first.

### Sequence diagram (browser cross-origin `POST` with JSON + token)

```text
Browser                           Server (api.example.com)
  |                                      |
  | 1) OPTIONS /resource                 |
  |    Origin: https://app.example.com   |
  |    Access-Control-Request-Method:POST|
  |    Access-Control-Request-Headers:   |
  |       content-type, authorization    |
  |------------------------------------->|
  |                                      |
  | 2) 204/200 Preflight response        |
  |    Access-Control-Allow-Origin: https://app.example.com
  |    Access-Control-Allow-Methods: POST
  |    Access-Control-Allow-Headers: content-type, authorization
  |    Access-Control-Allow-Credentials: true   (if cookies used)
  |<-------------------------------------|
  |                                      |
  | 3) Actual POST /resource             |
  |    Origin: https://app.example.com   |
  |    Content-Type: application/json    |
  |    Authorization: Bearer ...         |
  |------------------------------------->|
  |                                      |
  | 4) Response + CORS headers           |
  |    Access-Control-Allow-Origin: https://app.example.com
  |<-------------------------------------|
```

### CORS “gotchas” (the ones professors like)

* If server does **not** send `Access-Control-Allow-Origin` (matching your origin), the browser **blocks JS from reading** the response.
* With cookies (`credentials: "include"`), server must **not** use `*` for `Allow-Origin` and must include `Access-Control-Allow-Credentials: true`.
* Even if the network request succeeds, JS may see a **CORS error** (browser security layer).

---

## 3) Streaming response body (ReadableStream) with diagrams

### What “streaming” means in `fetch`

* Response body arrives in **chunks**
* JS can read chunks **as they arrive** (useful for large files, SSE-like flows, progress UI)
* Backpressure: reader pulls chunks as it’s ready

### Timeline diagram

```text
Network:   [headers]----[chunk1]----[chunk2]----[chunk3]----...
JS:        fetch resolves
           |
           | res.body.getReader()
           v
           read() -> chunk1
           read() -> chunk2
           read() -> chunk3
```

### Browser streaming example (manual reader)

```js
const res = await fetch("https://example.com/large.txt");
if (!res.ok) throw new Error(res.status);

const reader = res.body.getReader();
const decoder = new TextDecoder();

let full = "";
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  full += decoder.decode(value, { stream: true });
}
full += decoder.decode(); // flush
console.log(full);
```

### Key streaming rule

* **Body can be consumed once**. If you need to read it twice, do:

```js
const res2 = res.clone();
```

---

## 4) Node.js `fetch()` behind-the-scenes (and how it differs)

Modern Node (v18+) includes `fetch` (WHATWG-style). Under the hood it uses Node’s HTTP client stack (commonly **undici**).

### Node pipeline diagram

```text
Node JS
  |
  | fetch(url, options) -> Promise
  v
[Build Request]
  |
  v
+---------------------- Node Fetch Pipeline ----------------------+
| No browser CORS enforcement (no preflight by default)           |
| No Service Worker                                               |
| No built-in HTTP cache like browsers                            |
| Connection pooling / keep-alive handled by HTTP client          |
| DNS -> TCP -> TLS -> HTTP request                               |
| Response -> headers -> Response object                          |
| Body is a stream (Web ReadableStream in Node fetch)             |
+---------------------------------------------------------------+
```

### Node vs Browser differences (high-value points)

* **CORS is a browser security policy**.
  In **Node**, you can request any origin; you won’t get blocked by CORS (server may still reject auth).
* **No automatic preflight** in Node (unless you manually code an OPTIONS check).
* **No SW/cache layer** like browsers.

### Node streaming example (same idea)

```js
const res = await fetch("https://example.com/big");
if (!res.ok) throw new Error(res.status);

const reader = res.body.getReader();
let bytes = 0;

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  bytes += value.byteLength;
}
console.log("Downloaded bytes:", bytes);
```

---

## 5) One-minute “memorize” summary

* `fetch()` returns a **Promise immediately**.
* Promise resolves to a **Response when headers arrive**.
* Body is a **stream**; `.json()`/`.text()` consume it **async**.
* Browser adds security layers: **CORS + preflight** + SW + cache.
* Node has **no CORS enforcement** and usually no preflight; it’s “direct HTTP”.



