// console.log('May, 15th 2022')


// function isSquared(n) {
//     Math.sqrt(n) % 1 === 0 ? console.log('yes') : console.log('no')
// }

// isSquared(25)

// const isSQ = n => Math.sqrt(n) % 1 === 0 ? console.log('yes') : console.log('no')

// isSQ(26)

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// let arr = [1, 2, 3]

// let newArr = arr.map( num => num *= 2)
// console.log(newArr)

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.
// The usage will be quite simple, like:
// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// Array.prototype.filter = function(ruleCondition){
//     const arr = []
//     this.forEach(function(currentValue) {
//         if(ruleCondition(currentValue)) {
//             arr.push(currentValue)
//         }
//         return arr;
//     })
// }

// Array.prototype.filter = function(fn) {
//     return this.reduce((s, a) => fn(a) ? (s.push(a), s) : s, [])
// }

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function gooseFilter(birds){
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//     return birds.filter(b => !geese.includes(b))
// }

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// Write a function which maps a function over the lists in a list:
// function gridMap(fn,xss) { return [[]]; }
// Example 1:
// const xss = [ [1,2,3]
//             , [4,5,6]
//             ];

// gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
// gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
// Example 2
// const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

// gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

// function gridMap(fn, a) {
//     return a.map(x => x.map(fn))
// }

// const gridMap = ((fn, a) => a.map(x=> x.map(fn)))

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(nums.reduce((acc, c) => acc + c, 0))