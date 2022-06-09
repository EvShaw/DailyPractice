console.log('June 9th, 2022')

// for (let i= "#"; i.length < 8; i+="#") {
//     console.log(i)
// }

// console.log('########')

// for (let i = "#######"; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const http = require('http')
// const fs =require('fs')

// http.createServer((request, response) => {
//     fs.readFile('demofile.html', (err, data) => {
//         response.writeHead(200, {'Content-Type':'text/html'})
//         response.write(data)
//         response.end()

//     })
// }).listen(8000)

//async way to use fetch
// async function getDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getDogPhoto()

// //promise way to use fetch: 
// function getPhoto(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })


// }

// getPhoto()

// user.find(item => item.id == 2)

// let newObj = Object.assisn({}, [arg1,argn])

// let randomObject = {'Name': 'Pete the Cat', 'Age':3, 'Color':'Black'}

// console.log(randomObject)

// let clone = Object.assign({}, randomObject)

// console.log(clone)

// let anotherClone = {}

// for (let prop in randomObject) {
//     anotherClone[prop] = randomObject[prop]
// }

// console.log(anotherClone)

// const squared = n => Math.sqrt(n) % 1 === 0 ? 'yes' : 'no'

// console.log(squared(26))

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb-connection-string', (err, client) => {

// })