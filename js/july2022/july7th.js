const today = new Date
console.log(today)

// let isNightTime = true

// isNightTime ? console.log('yes') : console.log('no')

// let isLocked = false
// isLocked ? console.log('yes') : console.log('no')

// let iExists = ''

// if(iExists) {
//     console.log('Here I am!')
// }

// console.log(String(6).padStart(3, "0"));

// let myNum = 3

// function divByItsSelf(myNum) {
//     if(myNum % 3 == 0) {
//         console.log('it is!')
//     } 
// }

// divByItsSelf(myNum)

// const nums = [10, 35, 5, 25, '25']

// const total = nums.reduce((acc, c) => acc + +c,0)

// console.log(total)
// app.get('/', (request, resposne) => {
//     resposne.sendFile(__dirname + '/index.html')
// })

// variableNameHere.replaceAll(' ', '-').replaceAll('.', '').toLowerCase()

// let num = Math.round((25.257550100)*100) /100

// console.log(num)

// const removeDupes = str => [...str].filter((el, ind) => el !== str[ind - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const http = require('http')
// const fs = require('fs')
// http.createServer((request, response) => {
//     fs.readFile('demofile.hmtl', (err, data) => {
//         response.writeHead(200, {'Content-Type':'text/html'})
//         response.write(data)
//         response.end()
//     })
// }).listen(8000)

// const isSquared = n => Math.sqrt(n) % 1 === 0

// console.log(isSquared(25))

// const app = express()
// const cors = require('cors')
// const PORT = process.env.PORT || 8000
// app.use(cors())

// const menu = {
//     item: 'item one', 
//     costs: 'free', 
//     color: 'red',
// }

// console.log(menu)

// let newMenu = {}

// for (let key in menu) {
//     newMenu[key] = menu[key]
// }

// console.log(newMenu)