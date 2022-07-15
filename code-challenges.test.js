// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { isTypedArray } = require("util/types")
const { describe, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Pseudocode
// -First use the 'describe' method name the function 'colors'
// -Then use the 'it' method to describe the function: takes in an array, removes the first item from the array and shuffles the remaining content.
// - Then list the the variables to perform the test on 'const colors1 and colors2'
// - Then use the 'expect' method to call the function in the describe method 'colors' for each variable 'colors1 and colors2'
// - Then use the '.toEqual' method to list the expected output of test. Removed first item in each array
// - Create the function 'colors'
// - Create parameter (array) to pass any array
// - Use HOF .map to iterate through each array
// - Use 'shuffle method to return random order

describe("colors", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        expect(colors(colors1)).toEqual(shuffle["blue", "green", "yellow", "pink"])
        expect(colors(colors2)).toEqual(shuffle["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])

    })
    
}
)

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

const colors = (array) =>  {
    return array.map(value => value.shuffle)
}
//--------------------------------Notes question 1---------------------------------
//warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/.bin/jest
// console.warn
//   YError: Invalid second argument. Expected string but received function.
//       at c (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/yargs/build/index.cjs:1:2289)
//       at /Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/yargs/build/index.cjs:1:2141
//       at Array.forEach (<anonymous>)
//       at h (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/yargs/build/index.cjs:1:2038)
//       at Xt.describe (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/yargs/build/index.cjs:1:34403)
//       at Object.describe (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/code-challenges.test.js:32:1)
//       at Runtime._execModule (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/jest-runtime/build/index.js:1714:24)
//       at Runtime._loadModule (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/jest-runtime/build/index.js:1223:12)
//       at Runtime.requireModule (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/jest-runtime/build/index.js:1047:12)
//       at jestAdapter (/Users/learnacademy/Desktop/week-4-assessment-VenessaSP/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:89:13)

//     30 | // - Use HOF .map to iterate through each array
//     31 |
//   > 32 | describe ("colors", () => {
//        | ^
//     33 |     it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//     34 |         const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     35 |         const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

//     at h (node_modules/yargs/build/index.cjs:1:2179)
//     at Xt.describe (node_modules/yargs/build/index.cjs:1:34403)
//     at Object.describe (code-challenges.test.js:32:1)

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//     at node_modules/@jest/core/build/TestScheduler.js:300:17
//     at node_modules/emittery/index.js:311:13
//         at Array.map (<anonymous>)
//     at Emittery.emit (node_modules/emittery/index.js:309:23)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.192 s
// Ran all test suites.
// error Command failed with exit code 1.
//------------------------------------------ I don't understand what I did wrong there



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//Pseudocode
// -First use the 'describe' method name the function 'numsOrder'
// -Then use the 'it' method to describe the function: takes an array of numbers and returns an array of the minimum and maximum numbers in that order
// - Then list the the variables to perform the test on 'const nums1 and nums2'
// - Then use the 'expect' method to call the function in the describe method 'numsOrder' for each variable 'nums1 and nums2'
// - Then use the '.toEqual' method to list the expected output of test. I hard coded the expected output
// - Create the function 'numsOrder'
// - Create parameter (array) to pass any array
// - Use HOF .filter to return only the values asked for
// - Use the Math.min and Math.max method to return the minimum and maximum numbers in each array

// a) Create a test with expect statements for each of the variables provided. 

describe("numsOrder", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
        expect(numsOrder(nums1)).toEqual([-8, 90])
        expect(numsOrder(nums2)).toEqual([5, 109])

    })
    
}
)

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

const numsOrder = (array) => {
    return array.filter(value => Math.min, Math.max)
}

//--------------------------------Notes question 2---------------------------------
// I'm getting the same error as question 1, Must contain atleast one test: what does that mean?





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//Pseudocode
// -First use the 'describe' method name the function 'testArray'
// -Then use the 'it' method to describe the function: that takes in two arrays as arguments and returns one array with no duplicate values"
// - Then list the the variables to perform the test on 'const testArray1 and testArray2'
// - Then use the 'expect' method to call the function in the describe method 'testArray' for each variable 'testArray1 and testArray2'
// - Then use the '.toEqual' method to list the expected output of test. I hard coded the expected output
// - Create the function 'testArray'
// - Create parameter (array) to pass any array
// - Use HOF .concat and .filter to add and return only the values asked for
// Note: unsure 

// a) Create a test with an expect statement using the variables provided.

describe("testArray", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        expect(testArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    
    })
    
}
)

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

const testArray = (array) => {
    array.concat
}