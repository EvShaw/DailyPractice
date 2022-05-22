console.log('May 22nd, 2022')

const myTeam = ['Charizard', 'Gengar', 'Dragapult', 'Greninja', 'Golem', 'Eevee']

// console.log(myTeam.includes('Greninja'))

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demonfile.html', (err, data) => {
//         res.writableHighWaterMark(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// function CarMaker(brand, model, style, color) {
//     this.brand = brand
//     this.model = model
//     this.style = style
//     this.color = color
//     this.horn = function () {
//         console.log('Beep Beep')
//     }
// }

// const myCar = new CarMaker('Toyota', 'Tundra', 'Xl', 'White')

// console.log(myCar.horn())

// class CARmaker{
//     constructor(brand, model, style, color) {
//         this._brand = brand
//         this._model = model
//         this._style = style
//         this._color = color
//     }
//     get brand(){
//         return this._brand
//     }
//     get model(){
//         return this._model
//     }
//     get style(){
//         return this._style
//     }
//     get color(){
//         return this._color
//     }
//     horn(){
//         console.log('beeeeeeeeeeeeeeeeeep')
//     }
// }

// const myNextCar = new CARmaker('Nissan', 'GTR', 'R35', 'Black')
// console.log(myNextCar)

// Array.from(myTeam).forEach(item => item.addEventListener('click', catchThemAll))

// ObjectNameHere.prototype.propertyNameHere = 'valueHere'

// async function getDog(){
//     const res = await fetch('https://hereistheURL')
//     const data = await res.json()
//     console.log(data)
// }

// let num = 1
// while (num < 10) {
//     console.log(num*num)
//     num++
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i*i)
// }

// const anObject = {
//     myProp: 2
// };


// const anotherOBject = Object.create(anObject)
// const anotherOBject2 = Object.create(anotherOBject)

// console.log(anotherOBject.myProp)
// console.log(anotherOBject2.myProp)

// const todoCompleted = todo.filter( todo => todo.isCompleted === true)

// let user = {
//     name: "John", 
//     age: 30
// }

// let clone = {}

// for (let ket in user) {
//     clone[key] - user[key]
// }

// function isEmpty(obj) {
//    for (let key in obj) {
//        console.log(false)
//    }
//    return true
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let total = 0

// for(let num in salaries) {

//     total += salaries[num]
// }

// console.log(total)

// const allEquals = arr.every(val => val === arr[0])

// function houseOne() {
//     setTimeout(() => {
//         console.log('delivered to house one')
//             setTimeout(() => {
//                 console.log('delivered to house two')
//                     setTimeout(() => {
//                         console.log('delivered to house three')
//                     }, 2000)
//             }, 4000)
//     }, 6000)
// }
// houseOne()