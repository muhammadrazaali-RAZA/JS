// ---------------------------------------------
// De-Structuring in JavaScript
// ---------------------------------------------
//
// Destructuring allows us to extract values from objects
// and store them in variables in a clean and readable way.
//

const course = {
    courseName: "Learn JavaScript",
    price: 1000,
    courseInstructions: "JavaScript code"
};

// Accessing a property normally using dot notation
console.log(course.courseInstructions);         // JavaScript code


// Destructuring: extracting 'courseInstructions' directly
const {courseInstructions} = course;
console.log(courseInstructions);                // JavaScript code


// Renaming a destructured variable:
// Here, 'courseInstructions' is stored in a new variable called 'instructor'
const { courseInstructions: instructor } = course;
console.log(instructor);                        // JavaScript code


// ---------------------------------------------
// JSON Object Example
// ---------------------------------------------
//
// JSON (JavaScript Object Notation) is a format used to store and
// exchange data. It looks similar to a JavaScript object but uses
// double quotes for keys and values.
//
// Example JSON:
//
// {
//     "name": "Raza Ali",
//     "course": "javascript",
//     "price": 1000
// }
//
//
// Test: https://randomuser.me/api/                         // copy data
// Json beautify: https://jsonformatter.org/                // past and visualize
//
// ---------------------------------------------