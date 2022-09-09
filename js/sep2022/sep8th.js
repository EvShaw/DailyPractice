// const MongoClient = require('mongodb')

// const str = 'Its a great day!'
// console.log(str.replace(/!/g, '!??'))

// const removeExtras = (arr, n) => {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtras([2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 3, 3, 3, 4, 5, 6], 1))

// const swapIt = str => {
//     const swap = { 'a': 'z', 'b': 'y', 'c': 'x' }

//     return str.split('').map(el => {
//         return swap[el]
//     }).join('')
// }
// console.log(swapIt('abc'))

// const persistence = num => {
//     let times = 0
//     num = num.toString()
//     while (num.length > 1) {
//         times++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// const removeDupes = str => [...str].filter((a, i) => a != str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBBAC'))

// const fizzBuzz = (num = 100) => {
//    for(let i = 0; i < num; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if( i % 3 == 0) {
//         console.log('Fizz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else console.log(i)
//    }
// }

// fizzBuzz(15 + 1)

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// for(let prop in menu) {
//     if(typeof menu[prop] === 'number') {
//         menu[prop] *= 2
//     }
// }
// console.log(menu)

// const str = 'The world goes around and around'
// const strSliced = str.slice(4, 9)
// console.log(str)
// console.log(strSliced)