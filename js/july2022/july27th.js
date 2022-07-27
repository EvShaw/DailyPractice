const today = new Date
console.log(today)

// Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//         return defualtLocation
//     },
//     set: function(value) {
//         if(!value.x || !value.y) 
//             throw new Error('Invalid Location')

//         defualtLocation = value
//     }
// })

// delete objectNameHere.PropertyNameHere

// let arr = [1, 2]
// let brr = [3, 5]
// const crr = arr.concat(brr)
// console.log(crr)

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

// function isEmpty(obj) {
//     if(obj) {
//         console.log(false)
//     } else console.log(true)
// }

// isEmpty('s')

// const user = users.find(item => item.id == 2)

// async function nameHere() {
//     const res = await fetch()
//     const data = res.json()
//     console.log(data)
// }

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//    e.preventDefault( );
//    document.querySelector('#my-form).style.background = 
//    '#ccc;;   
// });

//node server.js

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// function removeExtra(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         console.log(count[el])
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)

//     }
//     return ans
// }

// console.log(removeExtra(['a','a','b','b','a', 'c','c'], 1))

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// function removeExtrFilterApproach(arr, x) {
//     const cache = {}
//     return arr.filter( n => {
//         cache[n] = (cache[n] || 0 ) + 1
//         return cache[n] <= x
//     })
// }

// console.log(removeExtrFilterApproach(['a','a','b','b','a', 'c','c'], 1))

// function roundByX(n, x = 5) {
//     while(n % x !== 0) n++
//     return n
// }

// console.log(roundByX(11))

// function persistence(num) {
//     let times = 0
//     num = num.toString()
//     while(num.length > 1) {
//         times++

//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// const entry = persons.find(entry => entry.id == id)

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for(let j = 0; j< size; j++) {
//         if((i + j) % 2 == 0) board += ' '
//         else board += '#'
//     }
//     board += '\n'
// }

// console.log(board)