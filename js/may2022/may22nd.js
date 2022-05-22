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
let num = 1
while (num < 10) {
    console.log(num*num)
    num++
}