const today = new Date
console.log(today)


// app.post('/quotes', (req, res) => {
//     quotes.collection.insertOne(req.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })

// const removeEx = (list, num) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }
//     return ans
// }

// const removeExFiltered = (list, num) => {
//     const count = {}

//     return list.filter(el => {
//         count[el] = (count[el] || 0) + 1
//         return count[el] <= num
//     })
// }

// console.log(removeEx([2,2,2,2,1,1,1,2,2,1,3,3,3,3,4,4,4,5,5,5], 1))
// console.log(removeExFiltered([2,2,2,2,1,1,1,2,2,1,3,3,3,3,4,4,4,5,5,5], 1))

// const senOrOpen = data => {
//     return data.map(([age, handicap]) => (age > 55 && handicap > 7 ? 'Senior' : 'Open'))
// }

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// let timer = 2500

// setTimeout(() => {
//     console.log(`Delayed by ${(timer/1000).toFixed(1)} seconds`)
// }, timer)

// quotesCollection.findOneAndUpdate(
//     query, 
//     update, 
//     options
//  )
//     .then(result => { }
//     .catch(error => console.error(error))

// const todoCompleted = todos.filter(todo => {
//     return todo.isCompleted === true
// })

// db.collection('nameHere').find().toArray()

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// const isPalindrome = str => str.split('').reverse().join('') === str
// console.log(isPalindrome('racecar'))

// const a = [2,4,6,8]
// const newA = a.map((el, ind, arr) => arr[arr.length - ind - 1])
// console.log(newA)

// const isolateIt = arr => {
//     return arr.map(el =>{
//         if(el.length % 2 == 0) {
//             return el.slice(0, el.length/2) + '|' + el.slice(el.length/2) 
//         }
//         if(el.length % 2 != 0) {
//             return el.slice(0, el.length/2) + '|' + el.slice((el.length/2) + 1) 
//         }
//     })
// }


// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde","fghij"]))
// console.log(isolateIt(["1234","56789"]))

// const a = [...Array(4)]
// const b = a.map((_, i) => i)
// const c = [...Array(4)].map((_, i) => i)
// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
// console.log(b)   //output: [ 0, 1, 2, 3 ]
// console.log(c)   //output: [ 0, 1, 2, 3 ]
// console.log(d)   //output: [ 0, 1, 2, 3 ]

// const removeFromList = list => {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     return list.filter(el => !geese.includes(el))
// }

// console.log(removeFromList(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// let str = 'The quick brown fox jumped over the lazy dog. It barked!'
// let regex = /[A-Z]/g
// let found = str.match(regex)
// console.log(found)

// const removeSecondaries = list => {
//     const secondaries = ['green', 'blue', 'purple']

//     return list.filter(el => !secondaries.includes(el))

// }

// console.log(removeSecondaries(['red', 'green', 'blue', 'purple', 'orange']))


