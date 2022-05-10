console.log('May 10th')

// let imHere = ''

// if (imHere) {
//     console.log('here')
// } else {
//     console.log('nodda')
// }

// function CoffeeMachine(brand, make, color) {
//     this.brand = brand
//     this.make = make
//     this.color = color
//     this.steam = function () {
//         console.log('steaming')
//     }
//     this.boilWater = function () {
//         console.log('boiling the water')
//     }
// }

// const myCoffee = new CoffeeMachine('cheap', 'quickly', 'black')

// console.log(myCoffee.brand)

// class betterCheapCoffeeMachine {
//     constructor(brand, model, color) {
//         this._brand = brand
//         this._model = model
//         this._color = color
//     }
//     get brand() {
//         return this._brand
//     }
//     get model() {
//         return this._model
//     }
//     get color() {
//         return this._color
//     }
//     steam() {
//         console.log('steaming')
//     }
//     boil() {
//         console.log('boiling the water')
//     }
// }

// const coffee = new betterCheapCoffeeMachine('Starbucks', 'theCoolOne', 'red')
// console.log(coffee.boil())

// // a map returns an array. 

// // const todoText = todos.map(function(todo) {
// //    return todo.text;
// // });

// // this will return a whole new array of just the text keys. 
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


// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return todo.text;
// })

// const arr = ['venus', 'mars', 'earth', 'saturn', 'uranus', 'jupiter', 'neptune', 'mercury']

// console.log(arr)
// console.log(arr.sort((a, b) => a - b))

// let arr2 = ["t", "e", "s", "t", "e", "r"];

// console.log(arr2.slice(2, 4))

// let user = {
//     name: 'Johnny',
//     age: 39
// }

// // let clone = {}
// // for(let prop in user){
// //     clone[prop] = user[prop]
// // }
// let clone = Object.assign({}, user)

// console.log(clone)

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