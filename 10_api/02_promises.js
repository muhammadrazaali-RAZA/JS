// promises are object

/** ---------------------------------------------------------
 *  Promise Basics (Simple)
 *  ---------------------------------------------------------
 *
 *  new Promise((resolve, reject) => { ... })
 *
 *  - resolve(...) means: "task succeeded"
 *  - reject(...)  means: "task failed"
 *
 *  ⚠ Common mistake:
 *  People sometimes write:
 *      new Promise(function(reject, resolve) { ... })
 *  That is WRONG ORDER.
 *
 *  ✅ Correct order:
 *      new Promise(function(resolve, reject) { ... })
 */


//  Example 1 Creating Promise
const promiseCreation = new Promise(function(resolve,reject){
    // Do an async task
    // Database calls, cryptography, network

    setTimeout(function(){
        console.log("Async Task is completed.");
        resolve();
    },2000);
});

// consumption of promise  - resolve have connection with .then
promiseCreation.then(function(){
    console.log("Promise consumed");
});

//  Example 2 Creating and resolve promise with simple way
new Promise(function(resolve,reject){
   setTimeout(function(){
       console.log("Async Task - 2");
       resolve();
   }, 1000)
}).then(function(){
    console.log("Async Task -2 resolved");
});


//  Example 3 passing Data
const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
       resolve({username: "Muhammad Raza Ali", email: "muhammadrazaali.raza@gmail.com"});
   },3000);
});

promiseThree.then(function(data){
    console.log(data.username);
    console.log(data.email);
});


//  Example 4
//  - promise.then().then().catch().finally()
//  - can be written: new Promise(function(reject, resolve){}
const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = false;

        if(!error){
            resolve({username:"ALI",code:786});
        }else{
            reject("Some error occurred");
        }
    },4000);

});

/**
 *  Chain explanation:
 *
 *  promiseFour
 *    .then(step1)
 *    .then(step2)
 *    .catch(handleError)
 *    .finally(alwaysRuns)
 *
 *  RULES:
 *  - If step1 returns something -> step2 receives it
 *  - If step1 throws error -> goes to catch
 *  - If promise rejects -> directly goes to catch (skips thens)
 *  - finally runs always (resolve or reject)
 */

promiseFour
    .then(function (data) {
        console.log("Step1: data from resolve:", data);

        // Whatever you return here becomes input for the next .then()
        return data.username;
    })
    .then(function (username) {
        console.log("Step2: username from previous return:", username);
    })
    .catch(function (err) {
        console.log("Catch: error received:", err);
    })
    .finally(function () {
        console.log("Finally: promise finished (resolved OR rejected)");
    });

/*
If error = false, output after ~4s:
Step1: data from resolve: { username: 'ALI', code: 786 }
Step2: username from previous return: ALI
Finally: promise finished (resolved OR rejected)

If error = true, output after ~4s:
Catch: error received: Some error occurred
Finally: promise finished (resolved OR rejected)
*/

/** =========================================================
 *  PROMISE CHAINING + .then().catch().finally()
 *  AND async/await (with and without try/catch)
 *  =========================================================
 *
 *  Goal:
 *   - Understand how Promise chaining works:
 *       promise.then(...).then(...).catch(...).finally(...)
 *   - Understand resolve vs reject
 *   - Understand why returning from .then() matters
 *   - Understand async/await as a cleaner syntax for Promises
 *   - Understand error handling with try/catch
 *
 *  Interview Focus:
 *   ✅ Promise states: pending -> fulfilled / rejected
 *   ✅ resolve(value) goes to .then()
 *   ✅ reject(reason) goes to .catch()
 *   ✅ .finally() runs in BOTH cases (success or error)
 *   ✅ return in .then() forwards value to the next .then()
 *   ✅ async/await needs try/catch for rejected promises
 */
