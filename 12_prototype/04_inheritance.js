/************************************************************
 *  JAVASCRIPT INHERITANCE & PROTOTYPES (Basic → Advanced)
 *  Author: Muhammad Raza Ali
 ************************************************************/


/************************************************************
 * 1. BASIC OBJECTS
 ************************************************************/

const User = {
    name: "Raza",
    email: "raza@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeacherSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,

    // Old way of setting prototype inside object literal
    __proto__: TeacherSupport
};


/************************************************************
 * 2. PROTOTYPE INHERITANCE (OLD STYLE)
 *
 * Teacher.__proto__ = User;
 *
 * Meaning:
 * - Teacher inherits from User
 * - Teacher → User → Object.prototype → null
 ************************************************************/

Teacher.__proto__ = User;

// Now Teacher can access User properties
console.log(Teacher.name);     // "Raza"
console.log(Teacher.email);    // "raza@gmail.com"



/************************************************************
 * 3. MODERN INHERITANCE (RECOMMENDED)
 *
 * Object.setPrototypeOf(child, parent)
 *
 * Example:
 * Object.setPrototypeOf(TASupport, Teacher);
 *
 * Meaning:
 * - TASupport inherits from Teacher
 * - TASupport → Teacher → User → Object.prototype → null
 ************************************************************/


Object.setPrototypeOf(TASupport, Teacher);

// Now TASupport can access Teacher and User properties
console.log(TASupport.makeVideo);   // true (from Teacher)
console.log(TASupport.name);        // "Raza" (from User)


/************************************************************
 * 4. PROTOTYPE CHAIN VISUALIZATION
 *
 * After all inheritance:
 *
 * User:
 *   { name, email }
 *
 * Teacher:
 *   { makeVideo } → inherits from User
 *
 * TeacherSupport:
 *   { isAvailable }
 *
 * TASupport:
 *   { makeAssignment, fullTime }
 *     → inherits from Teacher (modern syntax)
 *     → Teacher inherits from User
 *
 * Final chain:
 *   TASupport → Teacher → User → Object.prototype → null
 *
 ************************************************************/



/************************************************************
 * 5. WHY INHERITANCE IS USEFUL
 *
 * - Avoid repeating properties in multiple objects
 * - Share common behavior
 * - Build layered structures (User → Teacher → TA)
 * - Understand how JavaScript OOP works internally
 *
 ************************************************************/



/************************************************************
 * 6. IMPORTANT NOTES
 *
 * ✔ __proto__ works but is old and not recommended
 * ✔ Object.setPrototypeOf() is the modern, safe method
 * ✔ Inheritance is dynamic — changes in parent reflect in child
 * ✔ Avoid deep prototype chains in real apps (hard to debug)
 *
 ************************************************************/



/************************************************************
 * 7. TESTING THE CHAIN (UNCOMMENT TO TRY)
 ************************************************************/

// console.log(TASupport.email);       // from User
// console.log(TASupport.isAvailable); // from TeacherSupport (old proto)
// console.log(Teacher.makeVideo);     // true
// console.log(User.makeVideo);        // undefined


/************************************************************
 * END OF FILE
 ************************************************************/
