const today = new Date
console.log(today)


// const user = {
//     name: 'evan',
//     id: 1,
//     isAwesome: true
// }

// console.log(user)
// const clone = {}

// for (let prop in user) {
//     clone[prop] = user[prop]
// }

// console.log(clone)

// const day = document.querySelector('#idHere').value


// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted);

// function RoundBy5(n, x = 5) { //create the function called roundBy5. Excepting two arguments, n and x. N will never have a defult where as if no number is provided to x, it defulats to 5. 
//     while(n % x !== 0) n++ //opens a while loop that will continue to loop untill n is divisible by x (5). With each iteration, n increases by one. 
//     return n //return n which will be the number provided rounded to the closest iteration of 5. 132 -> 136 
// }

// console.log(RoundBy5(132))

// console.log([2,2,2,2,2].fill('!', 3))

// const str = 'the river ran through!'

// console.log(str.replaceAll(/ran/g, 'flowed'))

// function persistence(num) { //create a function that accepts an input called num. 
//     let time = 0 // create a variable that contains a value of zero
//     num = num.toString(); // reasign the num arguemnt passed to be a string. 
//     while(num.length > 1) { //create a while loop that runs as long as the length of  the num variable above it is greater than 1. 
//         time++ //increment one time per iteration
//         num = num.split('').map(Number).reduce((a, b) => a*b).toString() //take the num (as a string from the reassignment) and split it into indidividual characters with the split method. Then map over it, creating a new array and converting those values to numbers. Then use the reduce method to reduce the values down to a single value. convert back to string and if the length of that value is more than one digit, repeat the while loop
//     } //close out the loop
//     return time //return the number of times the while loop, looped. 
// } //close out the function

// console.log(persistence(39))

// const removeExtras = (arr, n) => {
//     const count = {}
//     const ans = []

//     for(let el of count) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// //filter version: 

// function deleteNth(arr, x) {
//     let cache = {}
//     return arr.filter( n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= x
//     })
// }

// app.listen(3000, _ => {
//     console.log('listening on 3000')
// })

// const MongoClient = require('mongodb').MongoClient

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
        
//     }
//     board += '\n'
// }
// console.log(board)