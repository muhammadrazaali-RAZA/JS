/************************************************************
 *  JAVASCRIPT NOTES — STRINGS, OBJECTS, ARRAYS & PROTOTYPES
 *  Author: Muhammad Raza Ali
 *  Purpose: Learn JS from Basic → Advanced with examples
 ************************************************************/


/************************************************************
 * 1. STRING LENGTH & TRUE LENGTH
 ************************************************************/

let myName = "Raza     ";

// Basic length (counts spaces)
console.log(myName.length);
// Output: 9  → because spaces are included

// Custom method to find real length (without spaces)
String.prototype.trueLength = function () {
    console.log(`True length of '${this}' is ${this.trim().length}`);
};

// Using the custom method
myName.trueLength();
"    iceTea     ".trueLength();



/************************************************************
 * 2. ARRAYS & OBJECTS BASICS
 ************************************************************/

let heros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Calling object method
heroPower.getSpiderPower();



/************************************************************
 * 3. PROTOTYPES — THE HEART OF JAVASCRIPT
 *
 * Every object in JS has a hidden property called [[Prototype]]
 * This is how inheritance works in JavaScript.
 ************************************************************/

// Adding a method to Object prototype
Object.prototype.raza = function(){
    console.log("Raza is present in all Object");
};

// Adding a method to Array prototype
Array.prototype.heyRaza = function(){
    console.log("Raza says hello");
};

// These work because everything inherits from Object
heroPower.raza();
myName.raza();
heros.raza();

// Only arrays can use heyRaza()
heros.heyRaza();
// heroPower.heyRaza();  // ❌ Error (not an array)
// myName.heyRaza();     // ❌ Error (not an array)



/************************************************************
 * 4. PROTOTYPE CHAIN VISUALIZATION
 *
 * For an array:
 *   heros → Array.prototype → Object.prototype → null
 *
 * For a string:
 *   myName → String.prototype → Object.prototype → null
 *
 * For an object:
 *   heroPower → Object.prototype → null
 *
 * null = end of the chain
 ************************************************************/



/************************************************************
 * 5. WHY MODIFYING PROTOTYPES IS POWERFUL (BUT DANGEROUS)
 *
 * ✔ Pros:
 *   - Add new features to built‑in types
 *   - Extend language behavior
 *   - Useful for polyfills
 *
 * ⚠ Cons:
 *   - Affects ALL objects/arrays/strings globally
 *   - Can break libraries
 *   - Not recommended in production
 *
 * Use it for learning — not for real apps.
 ************************************************************/



/************************************************************
 * 6. EXTRA PRACTICE (UNCOMMENT TO TRY)
 ************************************************************/

// console.log("Hello World".trueLength());
// console.log(["a", "b", "c"].heyRaza());
// heroPower.raza();


/************************************************************
 * END OF FILE
 ************************************************************/
