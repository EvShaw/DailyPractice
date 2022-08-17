const today = new Date
console.log(today)

// const double = n => n.split('').map(c => c + c).join('')
// console.log(double('Good Morning!'))

// let isCorrect = ''

// const isItCorrect = isCorrect ? 'Yes' : 'No'
// console.log(isItCorrect)

// const isSquared = num => Math.sqrt(num) % 1 == 0;
// console.log(isSquared(26))

// app.get('/', (req, res) => {
// res.sendFile(__dirname + '/index.html')
// })

// const senOrOpen = arr => {
//     return arr.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }
// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const doubleUp = str => str.split('').map(c => c + c).join('')
// console.log(doubleUp('done'))

// const getMid = str => str.slice((str.length-1)/2, str.length/2 + 1)
// console.log(getMid('Tests'))
// console.log(getMid('Test'))

// const MongoClient = require('mongodb').MongoClient
// MongoClient(DB_STRING, (err, client) => {

// })

// const removeExtra = (arr, n) => {
//     let count = {}
//     let ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtra([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 2, 3, 4, 5], 2))

// //refactor above with filter method : 
// const removeExtraUsingFilterMethod = (arr, x) => {
//     const cache = {}

//     return arr.filter(n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= x
//     })
// }

// console.log(removeExtraUsingFilterMethod([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 2, 3, 4, 5], 2))

// const str = 'This is a string! With some extra !! thrown in to be replaced!'

// console.log(str.replaceAll(/!/g, '#'))

// const removeEx = (list, num) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }
//     return ans
// }
// console.log(removeEx([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 2, 3, 4, 5], 1))

// const removeEx2 = (list, num) => {
//     const cache = {}

//     return list.filter(n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= num
//     })
// }
// console.log(removeEx2([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1, 2, 3, 4, 5], 1))

// const choice = document.querySelector('input').value.replaceAll(' ', '-') 

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// for(let prop in menu) {
//     if(typeof menu[prop] == 'number') {
//         menu[prop] *= 2
//     }
// }

// console.log(menu)

// app.delete('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
  
//     response.status(204).end()
//   })

