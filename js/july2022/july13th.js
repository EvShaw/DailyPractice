const today = new Date
console.log(today)

// const isPailin = str => str.split('').reverse().join('') === str ? 'yes' : 'no'

// console.log(isPailin('racecar'))

// console.log(String('7').padStart(3, 0))

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// npm install mongodb --save
// const MongoClient = require('mongodb').MongoClient

// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

// Response.render('index.ejs', {info : data})

// function CarMaker(brand, model, style, color) {
//     this.brand = brand
//     this.model = model
//     this.style = style
//     this.color = color
//     this.horn = function() {
//         console.log('beep beep')
//     }
// }

// const myCar = new CarMaker('ford', 'fiesta', '2door', 'black')

// console.log(myCar.horn())

// class CarMaker {
//     constructor(brand, model, style, color) {
//         this._brand = brand
//         this._model = model
//         this._style = style
//         this._color = color
//     }
//     get brand() {
//         return this._brand
//     }
//     get model() {
//         return this._model
//     }
//     get style() {
//         return this._style
//     }
//     get color() {
//         return this._color
//     }
//     horn() {
//         console.log('beep Beep beep')
//     }
// }

// const myCar = new CarMaker('ford', 'fiesta', '2door', 'black')
// console.log(myCar)

// const express = require('express')
// const app = express()

// app.listen(3000, function() {
//     console.log('listening on 3000')
// })

// const user = users.find(item => item.id == 2)

// const users = [
//     {id: 1, name: 'Johnny', class: 'mid'},
//     {id: 1, name: 'Teddy', class: 'top'},
//     {id: 1, name: 'Mikey', class: 'bot'},
//     {id: 1, name: 'Jimmy', class: 'mid'},
// ]

// const user = users.find(item => item.class == 'mid' )
// const user2 = users.filter(item => item.class == 'mid' )
// console.log(user2)

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMid('testers'))

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {

// })

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if (myArray[i] === yourArray[j]) {
//             console.log('Both loops have the number: ' + yourArray[j])
//         }
//     }
// };

// const firstArr = ['a', 'b', 'c', 'z']
// const secondArr = ['z', 'y', 'c', 'd']

// for (let i = 0; i < firstArr.length; i++) {
    
//     for (let j = 0; j < secondArr.length; j++) {
//         if (firstArr[i] === secondArr[j]) {
//             console.log(`${firstArr[i]} from the first array and ${secondArr[j]} from the second array are the same`)
//         }
//     }

// }

// console.log('hi')

// const allEqual = n => n.every(item => item === n[0])

// console.log(allEqual([2, 2, 2, 2, 2]))