const today = new Date
console.log(today)


// function isSquared(num) {
//     console.log(Math.sqrt(num) % 1 === 0)
// }

// isSquared(25)

// const isSquared = num => console.log(Math.sqrt(num) % 1 === 0)

// isSquared(-1)


// function MakePizza(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.deliveryStatus = function() {
//         console.log('Preparing')
//     }
//     this.temperature = function() {
//         console.log('cold')
//     }
// }

// const pepNStuffed = new MakePizza('xl', 'marinara', 'pepperoni', 'stuffed')

// console.log(pepNStuffed.deliveryStatus())

// class MakePizza {
//     constructor(size, sauce, toppings, crust) {
//         this.size = size
//         this.sauce = sauce
//         this.toppings = toppings
//         this.crust = crust
//     }
//     delivery() {
//         console.log('on its way')
//     }
//     temper() {
//         console.log('HOT')
//     }
// }

// const pepNStuffed = new MakePizza('xl', 'marinara', 'pepperoni', 'stuffed')

// console.log(pepNStuffed.size, pepNStuffed.toppings)

// function PizzaMaker(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.deliveryStatus = function() {
//         console.log('delivered')
//     }
//     this.temperature = function() {
//         console.log('room temp')
//     }
// }

// const friPizzaNight = new PizzaMaker('xl', 'white', ['chicken', 'artichoke', 'broccoli'], 'thin')

// console.log(friPizzaNight.toppings.forEach( ele => console.log(ele)))

// class PizzaMaker {
//     constructor(size, sauce, toppings, crust) {
//         this.size = size
//         this.sauce = sauce
//         this.toppings = toppings
//         this.crust = crust
//     }
//     delivery() {
//         console.log('cancelled')
//     }
//     temp() {
//         console.log('non-existent')
//     }
// }


// const friPizzaNight = new PizzaMaker('xl', 'white', ['chicken', 'artichoke', 'broccoli'], 'thin')

// console.log(friPizzaNight.delivery())

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

// console.log(todos.map(function(item) {
//     console.log(item.text)
// }))

// let user = {
//     name: "John",
//      age: 30,
//      isAdmin: true
// };

// console.log(user)

// for (let key in user) {
//     console.log(user[key])
// }

// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// //   multiplyNumeric(menu);

// //   // after the call
// //   menu = {
// //     width: 400,
// //     height: 600,
// //     title: "My menu"
// //   };

// for (let key in menu) {
//     console.log(menu[key]*2)
// }

// console.log(menu)

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     },
//     sum() {
//         console.log(this.a + this.b)
//     },
//     mul() {
//         console.log(this.a * this.b)
//     }
// }
//  console.log(calculator.read())

//  Object.assign(dest, [arr1, arr2, arr3])


// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         if (key != {}) {
//             console.log(false)
//         } else {
//             console.log(true)
//         }
//         console.log(key)
//     }
// }



// isEmpty(schedule)  // truegit 

// schedule["8:30"] = "get up";
// isEmpty(schedule)  // false

// function testTest(v) {
//     if (v === undefined) {
//         console.log('nothing here boss')
//     }
//     console.log(v)
// }

// testTest('hi')

// let arr = [1, 15, 2]

// console.log(arr.sort((a, b) => a - b)
// )

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// // let sum = 0

// // for (let total in salaries) {
// //     sum+= salaries[total]
// // }
// // console.log(sum)

// // function sumSalaries()

// console.log(salaries.find( item => item.name === 'john'))

// Object.assign({}, [obj1, obj2])

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }

// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     get name() {
//         return this._name

// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

// const allEqual = arr => arr.every(val => val === arr[0]

//     allEqual([1, 2, 3, 4, 5, 6]) //false
//     allEqual([1, 1, 1, 1])
    

//     Now add uqals or odds

// function deleteNth(arr, n) {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }


// filter way:
// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

