console.log('May 23rd, 2022')

// let exists;

// if(exists) {
//     //code
// }

// let num = 1
// let base = 1
// while (num <= 10) {
//     console.log(base *= 2)
//     num++
// }

// localStorage.getItem('propertyHere', 'valueHere')
// localStorage.setItem('propertyHere', 'valueHere')
// localStorage.removeItem('propertyHere', 'valueHere')
// localStorage.clear() //clear all

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3))
// console.log(arr.indexOf('s'))


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj){
//     for(let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop]*=2
//         }
//     }

// }
// multiplyNumeric(menu)
// console.log(menu)

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm ('Did parents allow this?');

// }

// age > 18 ? true : confirm('approved?')
// age ? 18 || confirm ('approved')

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function doubleUp(obj) {
//     for (let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop] *= 2
//         }
//     }
// }
// doubleUp(menu)
// console.log(menu)

// function sqaured(n) {
//     return Math.sqrt(n) % 1 === 0
// }

// const isSq = n => Math.sqrt(n) % 1 === 0


// const alphaKey = 'a'.charCodeAt()

// function grid(n) {
//     if (n < 0) return null
//     const grid = []
//     for (let row = 0; row < n; row++) {
//         const cells = []
//         for (let cell = 0; cell < n; cell++) {
//             cells.push(String.fromCharCode(alphaKey + (row + cell) % 26))
//         }
//         grid.push(cells.join(''))
//     }
//     return grid.join('\n')
// }

// console.log(grid(15))