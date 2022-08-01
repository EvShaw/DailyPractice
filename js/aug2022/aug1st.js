const today = new Date
console.log(today)

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

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }

// getPhoto()

// const anObject = {
//     myProp: 2
//   };

// const anotherObject = Object.create(anObject)
// const yetAnotherObject = Object.create(anotherObject)

// console.log(anObject)
// console.log(anotherObject)
// console.log(yetAnotherObject)

//npm install body-parser --save

// const item = document.querySelectorAll('.item span')

// const choice = document.querySelector('input').value.replaceAll(' ', '-').replaceall('.', '').toLowerCase()


// const express = require('express') 
// const bodyParser= require('body-parser') 
// const app = express() 
// app.get('/', (req, res) => {/*...*/}) app.post('/quotes', (req, res) => {/*...*/})


// const randomEl = [2, 2, 2, 2]
// console.log(randomEl.fill(3, 3))

// app.post('/quotes', (req, res) => {
//     console.log('Helloooooo')
// })

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// console.log(btnArr)
// const keys = document.querySelector('.allButtons')

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

//     if (!target.matches('button')) {
//         return;
//     } else {
//         calculator.parseInput(value)
//         console.log(value)
//     }
//     console.log(event)
// })

// const acceptTwoNumsAndRound = (n, x = 5) => {
//     while(n % x != 0) n++
//     return n
// }

// console.log(acceptTwoNumsAndRound(2))

// const roundBy = (num, x = 5) => {
//     while(num % x != 0) num++
//     return num
// }

// console.log(roundBy(33, 10))

// let count = 0

// while(count < 12) {
//     count += 2
//     console.log(count)
// }

// for(i = '#'; i.length < 8; i +='#') {
//     console.log(i)
// }
// console.log('########')

// for(i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }