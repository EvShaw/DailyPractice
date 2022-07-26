const today = new Date
console.log(today)


// localStorage.setItem('myFriend', 'Bobby')
// let myFriend = localStorage.getItem('myFriend', 'Bobby')
// console.log(myFriend)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with friend',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentists Appointment',
//         isCompleted: false
//     }
// ]

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let prop in obj) {
//         if (typeof obj[prop] == 'number') {
//             obj[prop] *= 2
//         }
//     }

// } 

// multiplyNumeric(menu)
// console.log(menu)

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// function getFetch() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.message)
//         })
//         .catch(err => console.log(err))
// }

// getFetch()

// const thisArr = ['a', 'b', 'c', 1, 2, 3]
// console.log(thisArr)
// thisArr.fill('!', 3, 5)
// console.log(thisArr)

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

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior':'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// const removeDupes = str => [...str].filter((el, ind) => el !== str[ind - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))

// const myTeam = ['batman', 'green lantern', 'aqua man', 'superman', 'flash']

// console.log(myTeam)

// for(let i = 0; i < myTeam.length; i++) {
//       myTeam[i] = myTeam[i][0].toUpperCase() + myTeam[i].slice(1)
// }

// console.log(myTeam)

// const MongoClient = require('mongodb').MongoClient

// let board = ''
// let size = 8

// for(let i = 0; i < size; i++) {
//     for(let j = 0; j < size; j++) {
//         if((i+j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         } 
//     }
//     board += '\n'
// }

// console.log(board)

// function bitMarch(n) {
//     const arr = [0, 0, 0, 0, 0, 0, 0, 0]
//     const len = arr.length
//     const res = []
//     for (let i = len - n; i >= 0; i--) {
//         let temp = [...arr]
//         for (let j = 0; j < n; j++) {
//             temp[i+j] = 1
//         }
//         res.push(temp)
//     }
//     return res
// }

// console.log(bitMarch(8))

function roundByFive(n, x = 5) {
    while(n % x !== 0) n++
    return n

}

console.log(roundByFive(13, ))