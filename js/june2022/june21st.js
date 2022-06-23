const today = new Date
console.log(today)

// for(let i = '#'; i.length < 8; i+="#") {
//     console.log(i)
// }
// console.log('########')
// for(let i = "#######"; i.length > 0; i = i.slice('1')) {
//     console.log(i)
// }

// const PORT = process.env.PORT || 8000
// process.env.PORT || PORT () => {
//     console.log('server running')
// // }
// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const querystring = require('querystring')
// const cors = rquire('cors')

// class Animal {
//     constructor(name){
//         this._name = name
//     }
//     get name() {
//         return this._name
//     }
// }
// Response.render('index.ejs', {info: data})
// false
// false
// true
// false
// false
// false
// true
// false 
// true
// async function getPhoto() {
//     const res = await fetch('urlHere')
//     const data = await res.json()
//     console.log(data)
// }
// function fetchIt(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         })
// }

// fetchIt()

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
       
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// const cors = require('cors')
// app.use(cors())

// const fruits = ['apples', ' oranges', 'pears'];

// console.log(Array.isArray(fruits))
// console.log(fruits.concat([1, 2, 3], fruits))

// app.post('/quotes', (request, responst) => {
//     console.log('hi')
// })

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }

// console.log(sum)

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)
// console.log(getMiddle('evan'))

// const user = {
//     name: 'Evan',
//     isAwesome: true,
//     favoriteColor: 'purple'
// }

// let clone = {}

// for(let prop in user) {
//     clone[prop] = user[prop]
// }

// console.log(clone)

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)
// console.log(getMid('beaver'))

// app.get('/', (request, responst) => {
//     responst.sendFile(__dirname + '/index.html')
// })
// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// valueHere.replaceAll(' ', '-').replaceAll('.','').toLowerCase()

// function startsWith(name) {

//     // if (name[0].toLowerCase() === 'r') {
//     //     console.log('yes')
//     // } else {
//     //     console.log('no')
//     // }
// }
// startsWith('zrob')