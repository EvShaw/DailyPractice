const today = new Date
console.log(today)

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('########')

// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const toTheTenth = n => Math.pow(n, 10)

// console.log(toTheTenth(2))

// const colors = ['blue', 'orange', 'purple', 'red']

// for (let i = 0; i < colors.length; i++) {
//     colors[i] = colors[i][0].toUpperCase() + colors[i].slice(1)
// }

// console.log(colors)

// quotesCollection.findOneAndUpdate(query, update, options)
//     .then(result => {
//         //here
//     })
//     .catch(error => console.log(error))

// document.querySelector('#idHere').input.replaceAll('-', ' ').replaceAll('.', '').toLowerCase()

// console.log(Math.round((20.223344)*100) /100)
// myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`))

// const removeAdjDupes = n => [...n].filter((a, i) => a !== n[i-1])
// console.log(removeAdjDupes('AAAABBBCCDAABBB'))
// const removeDupes = str => [...str].filter((a, i) => a !== str[i-1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const app = express()
// const cors = requrie('cors')
// const PORT = process.env.PORT || 8000

// app.use(cors())

// function CoffeeMachine(brand, model, color) {
//     this.brand = brand
//     this.model = model
//     this.color = color
//     this.steam = function() {
//         console.log('steaaaaaaaaammmmmin')
//     }
//     this.turnOn = function() {
//         console.log('on')
//     }
// }

// const myCoffeeMachine = new CoffeeMachine('generic', 'lowend', 'red')
// console.log(myCoffeeMachine.steam())

// class NewCoffeeMachine{
//     constructor(brand, model, color) {
//         this._brand = brand
//         this._model = model
//         this._color = color
//     }
//     get brand() {
//         return this._brand
//     }
//     get model() {
//         return this._model
//     }
//     get color() {
//         return this._color
//     }
//     turnOn() {
//         console.log(on)
//     }
//     steam() {
//         console.log('steaaaaaaaaammmmmin')
//     }
// }

// const coffee2 = new NewCoffeeMachine('generic', 'lowend', 'red')
// console.log(coffee2.brand)


// class EspressoMachine{
//     constructor(color, make, model, price) {
//         this.color = color
//         this.make = make
//         this.model = model
//         this.price = price
//     }
//     turnOn(){
//         console.log('power turned on')
//     }
//     steam(){
//         console.log('steaming')
//     }
//     brew(){
//         console.log('brewing')
//     }

// }

// const gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 450)  
// console.log(gaggia)

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let sum = 0;

// for (let amount in salaries) [
//     sum += salaries[amount]
// ]
// console.log(sum)

// function fetchIt() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => console.log(err))
// }
// const MongoClient = require('mongodb').MongoClient
// MongoClient(.conect('mongodb-connection-string', (err, client) => {

// }))
