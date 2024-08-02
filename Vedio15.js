const Web_Courses = ["HTML", "CSS", "JavaScript"]
const Computer_Science_Courses = ["AI", "Web_Engineering", "InterOFThings"]

// Web_Courses.push(Computer_Science_Courses)

// console.log(Web_Courses);
// console.log(Web_Courses[3][1]);

// const allcourses = Web_Courses.concat(Computer_Science_Courses)
// console.log(allcourses);

const all_new_courses = [...Web_Courses, ...Computer_Science_Courses] // Spread Values

// console.log(all_new_courses);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Kiran")) // Not Array
console.log(Array.from("Kiran")) // Make it array
console.log(Array.from({name: "Kiran"})) // interesting

let grade1 = 100
let grade2 = 200
let grade3 = 300

console.log(Array.of(grade1, grade2, grade3));