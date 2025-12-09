/*** Objects */

// object literals       // don't create singleton

const JsUser = {
    "full name": "Muhammad Raza Ali",
    location: "Austria",
    user: "RazaJatt",
    email: "razajatt@gmail.com",
    age: 27,
    isLoggedIn: false,
    lastLogin: ["monday", "tuesday", "saturday"]
};

//  2 ways to call object
console.log(JsUser.location);           // Austria  --dot notation
console.log(JsUser["location"]);        // Austria  --square notation


// Prepare object["key"]
console.log(JsUser["full name"]);       // Muhammad Raza Ali --JsUser.full name can;t be used


// Using symbols in Objects

const  mySymbol = Symbol("keySymbol");  // defining symbol

const SymbolUser = {
    name : "Raza",
    [mySymbol]: "key1",          // always use symbol key with []
    age: 27,
    email: "email@google.com"
};

console.log(SymbolUser);         // {name: 'Raza', age: 27, email: 'email@google.com', [Symbol(keySymbol)]: 'key1' }

SymbolUser.name = "Ali";                     // changing value    --dot notation
SymbolUser[mySymbol] = "changeSymbolKey";    // changing value    --square notation

console.log(SymbolUser);         // {name: 'Ali', age: 27, email: 'email@google.com', [Symbol(keySymbol)]: 'changeSymbolKey' }

Object.freeze(SymbolUser);       //  Freeze Object  --Can;t modify

SymbolUser.name = "RazaAli";     //  Trying to modify freez object, but it will not modify
console.log(SymbolUser);         // {name: 'Ali', age: 27, email: 'email@google.com', [Symbol(keySymbol)]: 'changeSymbolKey' }


// Adding Functions --type 1 Citizen
JsUser.greeting = function () {
    console.log("Hello JS User!");
};

console.log(JsUser.greeting);    // [Function (anonymous)]  --This means you are referring to the function itself, not running it.
JsUser.greeting();               // Hello JS User!          --The () means you are calling (executing) the function.

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.user}`);
}

JsUser.greeting();      // Hello JS User!
JsUser.greetingTwo();   // Hello JS User, RazaJatt