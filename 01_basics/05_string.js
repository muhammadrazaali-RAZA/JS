const name = "Raza";
const repoCount = 65;

// console.log(name + repoCount + "Value");  // Not recommended to Use.


console.log(`Hello, my name is ${name} and I have ${repoCount} repos on github`);


const gameName = new String("RazaAli");
let gameName2 = gameName;

console.log(gameName[0]);                     // R
console.log(gameName.__proto__);              // {}

gameName2 = gameName2.toUpperCase();

console.log(gameName.length);    // 7
console.log(gameName2);          // RAZA
console.log(gameName);           // [String: 'Raza']

console.log(gameName.charAt(2))       // z
console.log(gameName.indexOf('a'));   // 1

const newString = gameName.substring(0,2);
console.log(newString);          // Ra

const anotherString = gameName.slice(-6,3);
console.log(anotherString);      // az

const newStringOne = "     RaZa  Ali     ";
console.log(newStringOne);          // '     RaZa  Ali     '
console.log(newStringOne.trim());   // 'RaZa  Ali'

const url = "https://raza.com/ali%20raza%20choudhary";

console.log(url.replaceAll('%20', '-'));  // https://raza.com/ali-raza-choudhary

console.log(url.includes('ali'));   // true

console.log(url.includes('a'));


