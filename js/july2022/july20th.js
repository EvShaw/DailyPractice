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

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted)

// function pizzaMachine(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crsut = crust
//     this.delivery = function() {
//         console.log('on its way')
//     }
// }

// const myPizza = new pizzaMachine('med', 'marinara', 'pepperoni', 'thin')

// console.log(myPizza.delivery())

// class pizzaMachine {
//     constructor(size, sauce, toppings, crust) {
//         this._size = size
//         this._sauce = sauce
//         this._toppings = toppings
//         this._crsut = crust
//     }
//     get size() {
//         return this._size
//     }
//     get sauce() {
//         return this._sauce
//     }
//     get toppings() {
//         return this._toppings
//     }
//     get crust() {
//         return this._crust
//     }
//     delivery() {
//         console.log('on its way')
//     }
// }

// const myPizza = new pizzaMachine('med', 'marinara', 'pepperoni', 'thin')

// console.log(myPizza.sauce)

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// db.collection('rappers').insertOne({jasper:'vip;})
//    .then(result => {

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {

// })

// function swapIt(str) {
//     const pairs = {'a':'z', 'b':'y', 'c':'x'}

//     return str.split('').map( v => { return pairs[v] }).join('')
// }

// console.log(swapIt('abc'))


// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}

//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// console.log(DNAStrand('AAAA'))

// function deleteExtras(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(deleteExtras([2,2,2,2,3,3,4,1,1,1,1,1,1,5,6], 1))

// function removeExt(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExt([2,2,2,2,3,3,4,1,1,1,1,1,1,5,6], 1))

// const removeDupes = str => [...str].filter((el, i) => el !== str[i - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))

//with sort, allowing us to remove all duplicates: 
// const removeDupes = str => {
//     const sortArr = str.split('').sort()

//     return sortArr.filter((el, i) => el !== sortArr[i - 1])
// }

// console.log(removeDupes('1112223334456'))