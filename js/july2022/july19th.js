const today = new Date
console.log(today)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };


//   function multiplyNumeric(obj) {
//     if(obj) {
//         for(let prop in obj) {
//             if(typeof obj[prop] === 'number') {
//                 obj[prop] *= 2
//             }
//         }
//     }
//     return obj
//   }

//   multiplyNumeric(menu)

//   console.log(menu)

// Array.from('variableName').forEach(ele => ele.addEventListener('click', (e) => {
//     //code
// }))

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()

//     })

// }).listen(8000)

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data.message)
// }

// getPhoto()

// let sum = 1
// for(let i = 0; i < 10; i++) {
//     console.log(sum * i)

// }

// let arr = [1, 15, 2]

// console.log(arr.sort((a, b) => a - b))

// function isEmpty(obj) {
//     if(!isEmpty) {
//         console.log('empty')
//     } else {
//         console.log('not empty')
//     }
// }

// isEmpty('obj')

// for(let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('########')
// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// let num = 1
// for(let i = 0; i < 10; i++) {
//     console.log(num *= 2)
// }

// const MongoClient = require('mongodb').MongoClient
// const entry = persons.find(entry => entry.id == id)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with friend',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentists Appointment',
//         isCompleted: false
//     }
// ]

// const searchIt = arr => arr.filter(ele => ele.isCompleted == true)

// console.log(searchIt(todos))

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
//     if (err) throw err
//     console.log('file written to...')
// })


// function swapOut(arr) {
//     const pairs = {'e' : 's', 'v':'h', 'a': 'a', 'n':'w'}
//     return arr.split('').map( v => { return pairs[v]})
// }

// console.log(swapOut('evan'))

// const allEqual = str => str.every(el => el === str[0])

// console.log(allEqual([1, 1, 1, 1]))