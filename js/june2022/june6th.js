console.log('june 6th, 2022')

//lets go! 

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('########')

// for (let i = '########'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const nums = [1, 2, 31, 9, -2, 1001]

// console.log(Math.max(2, 3, 31))

// console.log('lol '.repeat(2))

// async function getPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }

// getPhoto()

// async function getPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }

// getPhoto()

// const http = require('http')
// const fs = require('fs')

// http.createServer((request, response) => {
//     fs.readFile('demofile.html', (err, data) => {
//         response.writeHead(200, {'Content-Type':'text/html'})
//         response.write(data)
//         response.end()

//     }).listen(8000)
// })

// const cors = require('cors')
// const { appendFile } = require('fs')

// appendFile.use(cors())

// ClassNameFirst.prototype.propertyNameHere = 'valueHere'

// function CarMaker(brand, model, style, color) {
//     this.brand = brand
//     this.model = model
//     this.style = style
//     this.color = color
//     this.horn = function() {
//         console.log('BEEEEEEP')
//     }
// }

// const myCar = new CarMaker('Nissan', 'GTR', 'X', 'Black')

// console.log(myCar.horn())

// class CarFactory{
//     constructor(brand, model, style, color){
//         this._brand = brand
//         this._model = model
//         this._style = style
//         this._color = color
//     }
//     get brand(){
//         return this._brand
//     }
//     horn(){
//         console.log('BEEP')
//     }
// }

// const myTruck = new CarFactory('ford', 'f150', 'xl', 'blue')
// console.log(myTruck.horn())

// const http = require('http')
// const fs = require('fs')

// http.createServer((request, respons) => {
//     fs.readFile('demoFile.html', (err, data) => {
//         response.writeHead(200, {'Content-Type':'text/html'})
//         response.write(data)
//         response.end()
//     })
// }).listen(8000)

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let sum = 0

// for (val in salaries) {
//     sum += salaries[val]
// }

// console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// for (let prop in menu) {
//     if (typeof menu[prop] === 'number') {
//         menu[prop]*= 2
//     }
// }

// console.log(menu)

// const users = [
//     {id: 1, name: 'Jonny'},
//     {
//         id: 2, 
//         name: 'Andy',

//     },
//     {id: 3, name: 'Mary'}
// ]

// let user = users.find(item => item.id == 3)

// console.log(user)


// callBack: 

// function houseOne(){
//     setTimeout(() => {
//         console.log('Phase One Completed')
//             setTimeout(() => {
//                 console.log('Phase Two Completes')
//                     setTimeout(() => {
//                         console.log('Phase three completes')
//                     }, 3000)
//             }, 2000)
//     }, 1000)
// }

// houseOne()

// app.listen(3000, () => {
//     console.log('Lisetening on 3000')
// })

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb-connection-string', (err, client) => {
//     //code here
// })

// app.post('/quotes', (request, responst) => {
//     quotes.collection.insertOne(request.body)
//         .then(result => {
//             console.log(result)
//         })
//         .cath(err => console.error(err))
// })

// app.post('/quotes', (request, response) => {
//     quotesCollection.insertOne(req.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => console.error(error))
// })

// const MongoClient = require('mongodb').MongoClient

// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World', err=> {
//     if(err) throw err
//     console.log('file written to...')
// })
//myUrl.searchParams.append('abc', '123')