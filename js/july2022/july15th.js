const today = new Date
console.log(today)

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/', (request, response) => {
//     response.send('Hello World')
// })

// let number = 26

// const isSquared = num => Math.sqrt(num) % 1 === 0? 'yes' : 'no'

// console.log(isSquared(number))

// parseInt(arr.join(''), 2)

// const removeElements = (arr, x) => {
//     const cache = {}
//     return arr.filter( n => {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x
//     })
// }

// console.log(removeElements([2,2,2,3,3,2,3,3,4,1,4,4,4,4], 2).sort())

// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// const getMid = str => str.slice((str.length-1)/2, str.length/2+1)

// console.log(getMid('middle'))

// const removeAnElement = s => s.replace(/i!/g, "ello")

// console.log(removeAnElement('hi!'))

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
//     if(err) throw err
//     console.log('file written to...')
// })

//path.parse(__filename)
//path.parse(__filename)
//path.parse(__filename)

// const colors = ['red', 'black', 'purple', 'green', 'blue']

// for(let i = 0; i< colors.length; i++) {
//     colors[i] = colors[i][0].toUpperCase() + colors[i].slice(1)
// }

// console.log(colors)

// async function getThis() {
//     const res = await fetch(urlHere)
//     const data = await res.json()
//     console.log(data)
// }

//npm install cors --save
// const cors = require('cors')
// app.use(cors())

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     }, 
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// console.log(calculator.read())
