console.log('June 2nd, 2022')

//simple node server: 

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)
// arrOfHeroes = []
// arrOfHeroes.forEach(obj => {
//     const li = documnet.createElement('li')
//     li.textContent = 'Save the cheerleader, save the world...2009ish?'
//     document.querySelector('ul').appendChild(li)
// })
// async function functionNAme(arg) {
//     const thisarr = await fetch('urlhere')
//     const data = await res.json()
//     console.log(data)
// }

// async funciton functionNAme2HEre(parm1) {
//     const awaitFetch = await fetch('websiteHere')
//     const data = await res.json()
//     console.log(data)
// }

// npm install cors --save
// const cors = require('cors')
// const { appendFile } = require('fs')
// appendFile.use(cors())

// async funciton nameofThisIS() {
//     const res = await fetch('urlRIGHTHERE')
//     const data = await res.json()
//     console.log(data)
// }
// let num = -1
// if (num < 0 || num > 100) {
//     console.log('outside')
// }

// const colors = ['purple', 'black', 'green', 'red', 'pink']

// for (let color of colors) {
//     console.log(color)
// }
let username = ''
let defaultname;

if(username) {
    defaultname = username
} else {
    defaultname = 'Stranger'
}

console.log(username)