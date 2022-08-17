const today = new Date
console.log(today)

// let username = '';
// let defaultName;

// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }

// const str = 'the panda is goofy and cute!'
// console.log(str.replaceAll(/!/g, '?'))

// const doubleUp = str => str.split('').map(c => c + c).join('')
// console.log(doubleUp('super'))


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

// console.log([1,2,3,4,5,6,7,8,9,10].fill('!', 2, 3))

// const allEqual = arr => arr.every(val => val === arr[0])

// console.log(allEqual([2,2,2,2,3]))

// const roundBy = num => {
//     while(num % 5 !== 0) {
//         num++
//         console.log(num)
//     }
// }

// roundBy(4)

// for (let i = 0; i < 99; i++) {
//     if (i > 2 ) {
//        break;
//     }
//     console.log('Banana.');
//   }

//   console.log('Orange you glad I broke out the loop!');

// const senOrOpen = arr =>  {
//     return arr.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// return arr.map( ([arrElement1, arrElement2]) => ? truthy : falsy)

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const doubleUp = str => {
//     return str.split('').map(c => c + c).join('')
// }
// console.log(doubleUp('Balloon'))

// const senOrOpen = data => {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const removeDupes = str => str.split('').sort((a,b) => a - b).filter((a, i) => a !== str[i - 1]).join('')
// console.log(removeDupes('aabbccaaddee'))

// app.set('view engine', 'ejs')
// res.render('index.ejs', {info: nameList})

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// function PizzaMaker(sauce, toppings, crust) {
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.delivery = function () {
//         console.log('DELIVERED')
//     }
// }

// const newPizza = new PizzaMaker('marinara', ['bacon', 'pep', 'jalopenos'], 'stuffed')
// console.log(newPizza.toppings)

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
//         console.log('DELIVERED!!')
//     }
// }

// const newPizza = new PizzaMachine('marinara', ['bacon', 'pep', 'jalopenos'], 'stuffed')
// console.log(newPizza.sauce)

// const todoItems = await db.collection('todos').find().toArray()

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let sum = 0
// for(let total in salaries) {
//     sum += salaries[total]
// }

// console.log(sum)

