const today = new Date
console.log(today)

// const isSquare = n => Math.sqrt(n) % 1 == 0 ? Math.sqrt(n) : 'never was, never will be'
// console.log(isSquare(26))

// console.log([2, 2, 2, 2].fill('!', 2))

// console.log('a'.charCodeAt())
// console.log('z'.charCodeAt())

// function removeExtra(arr, n) {

//     const cache = {}
//     return arr.filter( num => {
//         cache[num] = (cache[num] || 0) + 1
//         return cache[num] <= n
//     })

// }
// function removeExtra(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtra([2, 2, 2, 3, 4, 4, 4, 1, 1, 2, 3, 4], 2))

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// function peristence(num) {
//     let times = 0
//     num = num.toString()

//     while(num.length > 1) {
//         times++

//         num = num.split('').map(Number).reduce((a, c) => a * c).toString()
//     }

//     return times
// }

// const removeDupes = str => [...str].filter((el, i) => el !== str[i - 1])

// console.log(removeDupes('AABBCCDD'))
// console.log(removeDupes('1234123411'))

// myURL.searchParams.forEach((val, name) => console.log(${name}: ${val}))

// path.extname(__filename)

// const team = ['gengar', 'dragapult', 'gredninja', 'shedinja', 'charizard', 'jigglypuff']

// for(let i = 0; i < team.length; i++) {
//     team[i] = team[i][0].toUpperCase() + team[i].slice(1)
// }

// console.log(team)

// inputNameHere.value.replaceAll(' ', '-').replaceAll('.', '').toLowerCase()

// npm install nodemon --save-dev

//const MongoClient = require('mongodb').MongoClient

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);

// const anObject = {
//     myProp: 2
// };

// const anotherObject = Object.create(anObject)
// console.log(anotherObject)


// Object.defineProperty(this, 'defaultLocation', {
//     get: function () {
//         return defaultLocation;

//     },
//     set: function () {
//         if (!value.x || !value.y)
//             throw new Error('Invalid Location')

//             defulatLocation = value
//     }
// })

// arr.find((element, index, array) => { 

// })

// arr.find(element => element.id == id)

// db.collection('rappers').insertOne({jasper:'vip;})
//    .then(result => {

// const inRange = n => n > 0 && n < 100 ? 'yes' : 'out of range'

// console.log(inRange(99))

// npm install cors --save
// const cors = require('cors')
// app.use(cors())

// cd j