/*** Objects */

// const tinderUser = new Object();       //  singleton Object
// console.log(tinderUser);                      //  {}

const tinderUser = {};                   //  Non singleton Object
console.log(tinderUser);                     //  {}

tinderUser.id = "123abc";
tinderUser["name"] = "Muhammad Raza Ali";
tinderUser.isLoggedIn = false;

// console.table(tinderUser);
console.log(tinderUser);                    // { id: '123abc', name: 'Muhammad Raza Ali', isLoggedIn: false }


const regularUser = {
    email: "raza@gmail.com",
    fullName: {
        name: {
            firstName: "Muhammad Raza",
            lastName:  "Ali"
        }
    },
    password: "password123"
};

console.log(regularUser.fullName.name.firstName);                    //  Muhammad Raza
console.log(regularUser["fullName"]["name"]["lastName"]);            //  Ali


const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

// Case 1:  as done in Array
const obj3 = {...obj1, ...obj2};

// console.table(obj3);
console.log(obj3);                        // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/**
 *  Importance of Case 2
 *  const target = {a:1, b:2}
 *  const source1 = {c:3, d:4}
 *
 *  @ returnTarget = object.assign(target, source1, source2, ...)
 *  console.log(returnTarget === target);     // true
 *
 */

const obj5 = Object.assign({}, obj1, obj2);
console.log("Obj5 : ", obj5);                // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj5 === obj1);                  // false



const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
    {
        id: 4,
        email: "4@gmail.com"
    }
];

console.log(users[0]["email"]);               //  1@gmail.com
console.log(users[1].email);                  //  2@gmail.com


console.log(tinderUser);                      // { id: '123abc', name: 'Muhammad Raza Ali', isLoggedIn: false }

console.log(Object.keys(tinderUser));         // [ 'id', 'name', 'isLoggedIn' ]             --Array
console.log(Object.values(tinderUser));       // [ '123abc', 'Muhammad Raza Ali', false ]   --Array

                                              //  --nested array
console.log(Object.entries(tinderUser));      // [ [ 'id', '123abc' ], [ 'name', 'Muhammad Raza Ali' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("email"));   // false
console.log(tinderUser.hasOwnProperty("name"));    // true


