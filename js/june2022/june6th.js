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