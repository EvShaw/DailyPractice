console.log('April 28th')

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

