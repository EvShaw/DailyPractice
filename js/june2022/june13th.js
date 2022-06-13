const todaysDate = new Date
console.log(todaysDate)

// let user1 = ['Andy']
// let user2 = ['Brandy']
// let user3 = ['Candy']

// function testParams(first, ...allTheParams) {
//     console.log(first)
//     console.log(allTheParams)
// }

// testParams(user1, user2, user3)

// const http = require('http')
// const fs = require('fs')

// http.createServer((request, response) =>  {
//     fs.readFile('demofile.htmllll', (err, data) => {
//         response.writeHead(200, {'Content-Type':'text/html'})
//         response.write(data)
//         response.end()
//     })
// }).listen(8000)

// async function testAsync() {
//     const res = await fetch('urlHere')
//     const data = await res.json()
//     console.log(data)
// }

// path.parse(__filename)
// path.parse(__filename).base)

// app.get('/', (request, response) => {
//     response.send('Hello World!')
// })

// app.post('/quotes', (request, response) => {
//     quoresCollection.insertOne(request.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => console.log(err))
// })

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodv-connection-string', (err, client) => {
//     ...
// })

// const allEqual = n => n.every(val => val === n[0])
// const allEqual = arr => arr.every(val => val === arr[0])

// console.log(allEqual([1, 1, 1, 1]))

// console.log(allEqual([1, 2, 3, 4, 5, 6]))

// npm install nodemon --save-dev
// npm install mongodb --save

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

function repeatAll(word) {
    const arr = word.split('')
    const doubled = []

    arr.forEach(letter => {
        doubled.push(letter, letter)
    })
    return doubled.join('')
}

console.log(repeatAll('yes'))