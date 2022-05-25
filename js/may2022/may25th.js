console.log('May 25th, 2022')

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }

// console.log(board)

// let num = 0

// const squares = document.querySelector('.fourSquare')

// squares.addEventListener('click', (e) => {
//     console.log(e.target.innerText)
//     if (e.target.innerText === '1') {
//         ele1 = e.target.innerText = 'One'
//     } else if (e.target.innerText === '2') {
//         ele2 = e.target.innerText = 'Two'
//     } else if (e.target.innerText === '3') {
//         ele3 = e.target.innerText = 'Three'
//     } else if (e.target.innerText === '4') {
//         ele4 = e.target.innerText = 'Four'
//     } 
   
// })

// let ele1;
// let ele2;
// let ele3;
// let ele4;


// let count = 0

// squares.addEventListener('click', (e) => {
//     count++
//     console.log(count)
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


// const li = document.createElement('li')
// li.innerContent = 'hi'
// document.querySelector('elementName').appendChild(li)

// function PizzaMachine(size, sauce, toppings, crust) {
//     this.size=size
//     this.temp = function () {
//         console.log('hot')
//     }
// }

// const newPizza = new PizzaMachine('xl')
// console.log(newPizza.temp())

// class PizaaMaker{
//     constructor(size) {
//         this._size = size
//     }
//     get size() {
//         return this._size
//     }
//     temp(){
//         console.log('hot!')
//     }
// }

// const myPizza = new PizaaMaker('med')

// console.log(myPizza.temp())