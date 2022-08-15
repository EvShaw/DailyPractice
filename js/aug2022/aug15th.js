const today = new Date
console.log(today)

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const fruits = ['apples', ' oranges', 'pears'];

// console.log(fruits.indexOf('apples'))

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// ObjectNameHere.prototype.propertyNameHere = valueHere

// app.use(express.json())

// .find(item => item.propertyName == valueHere)

// const isEven = n => n % 2 == 0 ? 'Even' : 'Odd'
// console.log(isEven(23))

// app.set('view engine', 'ejs')

// res.json()
// app.get('api/persons/:id', (req, res) => {
//      cosnt request = req.params.id
// })

// res.json()

// const express = require('express') 
// const bodyParser= require('body-parser') 
// const app = express() 
// // Make sure you place body-parser before your CRUD handlers! 
// app.use(bodyParser.urlencoded({ extended: true })) // All your handlers here... 
// app.get('/', (req, res) => {/*...*/}) app.post('/quotes', (req, res) => {/*...*/})

// const doubleUp = str => {
//     let string = str.split('')
//     const arr = []
//     string.forEach(letter => {
//         arr.push(letter)
//         arr.push(letter)
//     })
//     return arr.join('')
// }

// console.log(doubleUp('String'))

//refactor: 

const doubleUp = str => str.split('').map(c => c + c).join('')

console.log(doubleUp('String'))