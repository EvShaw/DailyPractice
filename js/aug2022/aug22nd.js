const today = new Date
console.log(today)

// for (let i = '#'; i.length < 8; i+= "#") {
//     console.log(i)
// }
// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// let objectA = {
//     a: 1, 
//     b: 2
// };

// Object.assign(objectA, {b: 3, c: 4})
// console.log(objectA)

// const seniorOrOpen = arr => {
//     return arr.map(([age, handicap]) => (age > 55 && handicap > 7 ? 'Senior' : 'Open'))
// }
// console.log(seniorOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(seniorOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const double = str => str.split('').map(s => s + s).join('')
// console.log(double('Here I am'))

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

// const getMid = str => str.slice((str.length - 1) / 2, str.length / 2 + 1)
// console.log(getMid('middle'))

// document.querySelector('#idHEre').value.replaceAll(' ', '-').replaceAll('.', '').toLowerCae()

// function PizzaMachine(sauce, toppings, crust) {
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.delivery = function() {
//         console.log('Delivered!')
//     }
// }

// const fridayPizza = new PizzaMachine('none', ['cheese, pepperoni'], 'thin')
// console.log(fridayPizza.delivery())

// class PizzaMachine {
//     constructor(sauce, toppings, crust) {
//         this._sauce = sauce
//         this._toppings = toppings 
//         this._crust = crust
//     }
//     get sauce() {
//         return this._sauce
//     }
//     delivery() {
//         console.log('Delivered!')
//     }
// }

// const newPizza = new PizzaMachine('marinara', ['bacon', 'jalopeno'], 'stuffed')

// console.log(newPizza.sauce)


// let user = {
//     name: "John", 
//     age: 30
// }
// console.log(user)

// let clone = Object.assign({}, user)
// console.log(clone)

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getPhoto()

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     },
//     sum() {
//         return this.a + this.b
//     }, 
//     mutli() {
//         return this.a * this.b
//     }
// }
// calculator.read()