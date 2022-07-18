const today = new Date
console.log(today)

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//   fs.readFile('demofile.html', (err, data) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(data)
//     res.end()
//   })
// }).listen(8000)

// const entry = persons.find(entry => entry.id == id)
// const sqRT = Math.sqrt(n) % 2 === 0 ? 'yes' : 'no'
// const allEqual = arr => arr.every(num=>num===arr[0])

// const allEqual = arr => arr.every(num => num === arr[0])

// const allEvens = arr => arr.every(num => num % 2 === 0)

// const nums = [0, 2, 4, 6, 9]
// const nums2 = [2, 2, 2, 2, 2]


// console.log(allEvens(nums))
// console.log(allEqual(nums2))

// function deleteNth(arr, n) {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }
// function login(name) {

//     let username = name
//     let defaultName = username || "Stranger"
//     if (name === undefined) {
//         console.log(defaultName)
//     }

//     return defaultName 

// }
// console.log(login('jim'))

// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// const myArr = [1, 2, 3]

// myArr.forEach(num => console.log(num * 2))

// myNewArr = myArr.map( num => num *= 2)

// console.log(myNewArr)

// const express = require('express')
// const app = express()

// app.listen(300, () => {
//     console.log('running on 3000')
// })

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

// // gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

// function listOfLists(inner, outer) {
//     return outer.map(list => list.map(inner))
// }

// // console.log(listOfLists([2, 3, 4]))

// // function gridMap(fn, a) {
// //     return a.map(x => x.map(fn))
// // }

// const gridMap = ((fn, a) => a.map(x => x.map(fn)))

// console.log(gridMap([2, 3, 4]))

// console.log(btnArr)
// const keys = document.querySelector('.allButtons')

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

//     if (!target.matches('button')) {
//         return;
//     } else {
//         calculator.parseInput(value)
//         console.log(value)
//     }
//     console.log(event)
// // })

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')
// })