// basic conversion
console.log(2 >  1);     // true
console.log(2 >= 1);     // true
console.log(2 <  1);     // false
console.log(2 == 1);     // false
console.log(2 != 1);     // true

// better to avoid the confusion check
console.log("2" > 1);       // true
console.log("02" > 1);      // true

console.log(null > 0);      // false  ;(because 0 > 0 is false)
console.log(null == 0);     // false  ;(because null only equals undefined)
console.log(null >= 0);     // true   ;(because 0 >= 0 is true)

console.log("null == undefined : ", null == undefined);  // true

console.log(undefined == 0);// false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// strict check ===

console.log("2" === 2);   // false
