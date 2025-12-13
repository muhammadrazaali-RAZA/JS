const score = 300;
console.log(score);         // 300

const balance = new Number(100);
console.log(balance);       // [Number: 100] --taking as only number

console.log(balance.toString().length);          // 3
console.log(balance.toFixed(2));     // 100.00


const otherNumber = 123.8;
console.log(otherNumber.toPrecision(3)); // 124 --precise till define number then it will round up

const hundreds = 1000000;

console.log(hundreds.toLocaleString());                  // 1.000.000
console.log(hundreds.toLocaleString('en-IN'));    // 10,00,000


// +++++++++++++++++++++++  MATHS  +++++++++++++++++++++++
console.log("+++++++++++++++++++++++  MATHS  +++++++++++++++++++++++");

console.log(Math.PI);                         // Pre defined values
console.log(Math.abs(-4));                 // 4

console.log(Math.round(4.6));              // 5
console.log(Math.round(4.2));              // 4

console.log(Math.ceil(4.2));               // 5
console.log(Math.floor(4.9));              // 4

console.log(Math.min(1,2,3,4,5));      // 1
console.log(Math.max(1,2,3,4,5));      // 5

console.log("_______________");
console.log(Math.ceil(Math.random()*10));  // 6            --Values always stay between 1 - 10
console.log((Math.random()*10 )+ 1);          // 4.045079397  --Values always stay between 1 - 10


console.log("# from 1 to 10 generate random number ...");
for (let i = 0; i < 10; i++) {
    let x = (Math.ceil(Math.random()*10));
    x = x.toString();
    // if (x[0] == 0){
    console.log(x);
    // }
}