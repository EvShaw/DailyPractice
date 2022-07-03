const today = new Date
console.log(today)

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/idnex.html')
// })

// npm install mongodb --save

// const entry = persons.find(entry => entry.id == id)
// const entry = persons.find(entry => entry.id == id)

// function Person( firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;


// }

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMid('testers'))

// app.get('/', (request, response) => {
//     //code here
// })

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// arrayNameHere.forEach(ele => ele.addEventListener('click', (e) => {
//     console.log(e)
// }))

// document.querySelector('#idNameHere').addEventListener('click', (e) => {
//     document.querySelector('#anotherElementHere').style.display = 'none'
// })

// function mxdiflg(a1, a2) {
//     if (a1.length === 0 || a2.length === 0) return -1
//     let l1 = a1.map(str => str.length)
//     let l2 = a2.map(str => str.length)
//     return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
//   }

// function reverseWords(str) {
//     return str.split(' ').map(function(word){
//       return word.split('').reverse().join('');
//     }).join(' ');
//   }