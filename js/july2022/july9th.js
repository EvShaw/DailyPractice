const today = new Date
console.log(today)


// function reverseStr(str) {
//     let reverseStr = str.split('').reverse().join('')
//     console.log(reverseStr)
// }

// reverseStr('car')

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }

// function showMessage(text) {  
//     if (text === undefined) {
//         // if the parameter is missing text = 'empty message';
//     }
//     alert(text);

// }



// showMessage();

// if(iExists) {
//     console.log('Here I am!')
// }

// const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMiddle('testing'))

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

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// let isNightTime = true

// isNightTime ? console.log('yes') : console.log('no')

// let isLocked = false
// isLocked ? console.log('yes') : console.log('no')

// let iExists = ''

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

// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

// const isSquared = n => Math.sqrt(n) % 1 === 0

// console.log(isSquared(25))

// const app = express()
// const cors = require('cors')
// const PORT = process.env.PORT || 8000
// app.use(cors())

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {
   
// })

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
//         document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// function reverseWords(str) {

//     let mirror = str.split(' ')

//     const reflect = []

//     for (i of mirror) {
//         let me = i.split('').reverse().join('')
//         reflect.push(me)
//     }
//     return reflect.join(' ')

// }

// another: 

// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
