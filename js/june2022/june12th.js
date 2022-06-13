const today = new Date

console.log(today)

// function checkVar(v) {
//     if (!v) {
//         console.log('no value')
//     }
// }

// checkVar('ss')

// const nums = [1, 9, 20, 10, 4, 6]

// console.log(nums.reduce((acc, c) => acc + +c, 0))

// const express = require('express')
// const app = express()
// const port = porcess.env.port || 3000

// app.listen(3000, () => {
//     console.log('running on port ${port}')
// })

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIso(str) {
//     let string = str.toLowerCase().split('').sort()
//     console.log(string)

//     for (let i = 0; i < str.length; i++) {

//         if (string[i] === string[i + 1]) {
//             return 'not iso'
//         } else {
//            return 'iso'
//         }
        
//    }
// }

// console.log(isIso('Dermatoglyphics'))

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }