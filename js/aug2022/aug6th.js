const today = new Date
console.log(today)



// for(let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('$$$$$$$$')
// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// app.get(endpoint, callback)

// nameHere.value.replaceAll('-', '').replaceAll(' ', '').toLowerCase()

// const express = require('express') 
// const bodyParser= require('body-parser') 
// const app = express() 

//app.get('/api/persons/:id', () => {
//  const request = req.params.id
// })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')
// })

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

// const isSquared = n => Math.sqrt(n) % 1 == 0 

// console.log(isSquared(26))

// let string = 'Teddy Bear was missing'

// console.log(string.replace(/Bear/g, 'fish'))


// function MakePizza(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.delivery = function() {
//         console.log('on its way')
//     }
//     this.temp = function() {
//         console.log('burn my mouth')
//     }
//     this.frisbee = function() {
//         console.log('YEEEEEEEEEEEET')
//     }
// }

// //class version:
// class MakePizza2 {
//     constuctor(size, sauce, toppings, crust) {
//         this.size = size
//         this.sauce = sauce
//         this.toppings = toppings
//         this.crust = crust
//     }
//     delivery() {
//         console.log('on its way')
//     }
//     temp() {
//         console.log('burn my mouth')
//     }
//     frisbee() {
//         console.log('yeet!')
//     }
// }


// let pizza2 = new MakePizza2('large', 'marinara', ['cheese', 'peperonni', 'sausage'], 'thin')
// console.log(pizza2.delivery())

  // Create anotherObject using anObject as a prototype

//   const anObject = {
//     myProp: 2
//   };
//   const anotherObject = Object.create(anObject); 
//   const yetAnotherObject = Object.create(anotherObject);
 
// const endsWith = (str, end) => {
//     if(str.endsWith(end)) return true
//     else return false
// }

// console.log(endsWith('abc', 'bc'))

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }


// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }