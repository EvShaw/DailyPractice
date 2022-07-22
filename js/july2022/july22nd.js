const today = new Date
console.log(today)

// const swapIt = (str) => {
//     const pairs = {'a':'z', 'b':'y', 'c':'x'}

//     return str.split('').map( v => { return pairs[v] }).join('')
// }

// console.log(swapIt('abc'))

// const swapOut = (str) => {
//     const pairs = {'e':'s', 'v':'h', 'a':'a', 'n':'w'}

//     return str.split('').map( letter => { return pairs[letter] }).join('')
// }

// console.log(swapOut('evan'))

// function persistence(num) {
//     let times = 0
//     num = num.toString();
//     while(num.length > 1) {
//         times++

//         num = num.split('').map(Number).reduce((a, b) => a*b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.listen(3000, () => {
//     console.log('listening on 3000')
// })

// function houseOne() {
//     setTimeout(() => {
//         console.log('House 1 Complete')
//             setTimeout(() => {
//                 console.log('house 2 complete')
//                     setTimeout(() => {
//                         console.log('house 3 complete')
//                     }, 3000)
//             }, 2500)
//     }, 2000)
// }

// function breakDownMultiplicative(num) {
//     let time = 0
//     num = num.toString()
//     while(num.length > 1) {
//         time++
//         num = num.split('').map(Number).reduce((a, b) => a*b).toString()
//     }
//     return time
// }

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if(err) throw err
//     console.log('file written to')
// })

// console.log(Math.round((12.234567891011)*100)/100)

// const generateID = () => {
//     const maxID = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
// }

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// const numBlock = [10, 5, 2, 3, 0, -10, 100, 1]

// console.log(numBlock.reduce((a, b) => a + b))
// console.log(String(6).padStart(3, "0"));

// Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//         return defualtLocation
//     }, 
//     set: function(value) {
//         if(!value.x || !value.y) {
//             throw new Error('Invalid Location.')

//             defultLocation = value;
//         }
//     }
// })

// const isEmpty = (obj) => !obj ? true : false

// console.log(isEmpty())

// const toDoCompleted = todos.filter( todo => {
//     return todo.isCompleted === true
// }).map( todo => {
//     return todo.text
// })

// const thisArr = ['Im an array']

// console.log(Array.isArray(thisArr))

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         res.end()
//     })
// }).listen(PORT)

// const calculator = {
//     read(){
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     },
//     sum(){
//        return this.a + this.b
//     },2
//     mul(){
//         return this.a * this.b
//     }
// }
// console.log(calculator.read())
// console.log(calculator.sum())

// const user = {
//     name: 'bob',
//     id: 1, 
//     fake: true
// }

// console.log(user)

// const newUser = {}

// for(let prop in user) {
//     newUser[prop] = user[prop]
// }

// console.log(newUser)