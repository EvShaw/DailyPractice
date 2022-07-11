const today = new Date
console.log(today)

// let numbers = 22

// console.log(Number.isInteger(numbers))

// app.get('/', (request, response) =>  {
//     response.sendFil(__dirname + '/index.html')
// })

// const fruits = ['apple', 'pear', 'lemon', 'watermelon', 'orange']


// for (let i = 0; i < fruits.length; i++) {
//     fruits[i] = fruits[i][0].toUpperCase() + fruits[i].slice(1)
// }

// console.log(fruits)
// path.join(__dirname, 'test', 'hello.html')

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// const todoCompleted = todos.filter( todo => {
//     return todo.isCompleted === true
// })

// const express = require('express')
// const app = express()

// app.listen(3000, () => {
//     console.log('listening on 3000')
// })

// arr.filter(function(item, index, arry {
//     //code here
// });

// Object.assign({}, [obj1, obj2, ...objn])

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj) {
//     for(let prop in obj) {
//         if(typeof obj[prop] === 'number') {
//             obj[prop] *= 2
//         }
//     }
// }

// console.log(multiplyNumeric(menu))

// console.log(menu)

// app.use(bodyParser.urlencoded({extended:true}))

// function deleteNth(arr, n) {
//     const count = {}
//     const ans = []

//     for (let element of arr) {
//         if (count[element]) count[element] = count[element] + 1
//         else count[element] = 1
//         if(count[element] <= n) ans.push[element]
//     }
//     return ans
// }

// function deleteNth(arr, x) {
//     let cache = {}
//     return arr.filter(n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= x;
//     })
// }

// const getMid = n => n.slice((n.length-1)/2, n.length/2+1)
// console.log(getMid('testing'))
// const user = {
//     name: 'evan', 
//     color: 'purple', 
//     awesome: true
// }

// const clone = {}

// console.log(user)
// console.log(clone)

// for(let prop in user) {
//     clone[prop] = user[prop]
// }

// console.log(clone)
// let salaries = { John: 100, Ann: 160, Pete: 130 }

// const sumAll = n => {
//     let sum = 0
//     for(let prop in n) {
//         sum += n[prop]
//     }
//     return sum
// }

// console.log(sumAll(salaries))

// function isEmpty(obj) {
//     if(obj) {
//         return false
//     } return true

// }
// let schedule = {};

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb-connection-string', (err, client) => {
//     //code here
// })

async function getPhoto() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data.message)
}