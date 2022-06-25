const today = new Date
console.log(today)
console.log('hi')

// console.log(Number.isInteger(2))

// function isPall(str) {
//     const arr = str.split('').reverse().join('')
//     console.log(arr)
//     if (str === arr) {
//         return 'same'
//     }
// }

// console.log(isPall('racecar'))

// const isPall = s => s.split('').reverse().join('') === s ? 'yes' : 'no'

// console.log(isPall('leonnoel'))

// for (let i = '#'; i.length < 8; i+= "#") {
//     console.log(i)
// }
// console.log('*********')

// for (let i = "#######"; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// console.log(String(6).padStart(3, '*'))

// const nums = [22, 1123, 0, -222, -29, 100, -900]

// const sum = nums.reduce((a, c) => a + +c, 0)
// console.log(nums)
// console.log(sum)

// process.env.PORT || PORT, () => {
//     console.log('server running')
// }
// const allEqu = n => n.every(val => val === n[0])
// console.log(allEqu([2, 2, 2, 2, 22]))

// function isEmp(obj) {
//     for(let prop in obj) {
//         //code will run if true
//         return false
//     } 
//     return true
// }

// console.log(isEmp())

// function CarMachine(model, color) {
//     this.model = model
//     this.color = color
//     this.horn = function() {
//         console.log('beeeeep')
//     }
//     this.alarmSys = function() {
//         console.log('weeeeoooooo weeeeoooo')
//     }
// }

// const myCar = new CarMachine('toyota', 'tundra')
// console.log(myCar)

// class ToyotaFactory {
//     constructor(model, color) {
//         this._model = model
//         this._color = color
//     }
//     get model() {
//         return this._model
//     }
//     get color() {
//         return this._color
//     }
//     horn() {
//         console.log('beep')
//     }
// }
// const myTruck = new ToyotaFactory('tundra', 'black')
// console.log(myTruck)

// console.log(Math.sign(0))

// app.listen(3000, () => {
//     console.log('listening on 3000')
// })

// const arr = ['happy', 'birthday', 'to', 'you']
// console.log(arr)
// arr.sort()
// console.log(arr)

// app.get('/', (request, response) => {
//     response.send('Hello world')
// })

// arr.forEach(obj =>  {
//     console.log(obj)

//     const li = document.createElement('li')
//     li.textContent = obj.name
//     document.querySelector('ulNameHere').appendChild(li)
// })

// const users = [
//     {
//         name: 'Evan', 
//         id: 2,
//         isAwesome: true,
//     },
// ]
  
// // console.log(users)

// const user = users.find(item => item.id == 2)
// console.log(user)

// response.render('index.ejs', {info:data})
// const http = require('http')
// const fs = require('fs')
// http.createServer((request, respons) => {
//     fs.readFile('demofile.html', (err, data) => {
//         respons.writeHead(200, {'Content-type': 'text/html'})
//         respons.write(data)
//         respons.end()

//     })
// }).listen(8000)

// let salaries = { John: 100, Ann: 160, Pete: 130 }
// let sum = 0
// for(let key in salaries) {
//      sum += salaries[key]
// }

// console.log(sum)

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb-connection-string', (err, client) => {

// })

// const arr =['donnie', 'mikey', 'leo', 'ralph']

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
// }
// console.log(arr)

// console.log(Math.round((2.12345)*100)/100)

// const removeDupe = (str) => { 
//     return [...str].filter((a, i) => a !== str[i - 1])
// }

// console.log(removeDupe('AAAABBBCCDAABBB'))

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const removeTheAdjDuplicates = str => [...str].filter((a, i) => a !== str[i - 1])