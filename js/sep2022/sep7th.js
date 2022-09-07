document.querySelector('#today').textContent = new Date

// const items = [
//     { name: 'bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },

// ]

// //filter: 
// const filteredItems = items.filter(item => {
//     return item.price <= 100
// } )
// console.log(filteredItems)


// //map:
// const itemNames = items.map(item => {
//     return item.name
// })
// console.log(itemNames)

// //find: 
// const itemfind = items.find(item => {
//     return item.name === "TV"
// })
// console.log(itemfind)

// //forEach: 
// const itemForEach = items.forEach(item => {
//     console.log(item)
// })
// console.log(itemForEach)


// //some: 
// const someItem = items.some(item => {
//     return item.price <= 100
// })
// console.log(someItem)

// //every: 
// const everyItem = items.every(item => {
//     return item.price <= 1000
// })
// console.log(everyItem)

// //reduce: 
// const total = items.reduce((currentTotal, item)  => {
//     return item.price + currentTotal
// }, 0)
// console.log(total)



// const numArr = [1,2,3,4,5,6,7,8,9,0]
// //includes
// const includesItems = numArr.includes(0)
// console.log(includesItems)

// const str = 'Hello World'
// console.log(str.repeat(3))
// const regex = /[A-Z]/g
// console.log(str.match(regex))
// console.log(str.indexOf('W'))

// const extractFromList = data => {
//     const notATurtle = ['Beebop', 'Shredder', 'Vanilla Ice']

//     let villans =  data.filter(el => !notATurtle.includes(el))
//     let heroes =  data.filter(el => notATurtle.includes(el))

//     return [heroes, villans]
// }

// console.log(extractFromList(['Beebop', 'Shredder', 'Mickey', 'Ralph']))

// const splitIt = arr => {
//     return arr.map(el => {
//         if (el.length % 2 == 0) {
//             return el.slice(0, el.length/2) + '|' + el.slice(el.length/2)
//         }
//         if (el.length % 2 != 0) {
//             return el.slice(0, el.length/2) + '|' + el.slice((el.length/2) + 1)
//         }
//     })
// }

// const splitIt = arr => {
//     return arr.map(el => {
//         if (el.length % 2 == 0) {
//             return el.slice(0, el.length / 2) + '|' + el.slice(el.length / 2)
//         }
//         if (el.length % 2 != 0) {
//             return el.slice(0, el.length / 2) + '|' + el.slice((el.length / 2) + 1)
//         }
//     })
// }

// console.log(splitIt(["abcd", "efgh"]))
// console.log(splitIt(["abcde","fghij"]))
// console.log(splitIt(["1234","56789"]))

// const x = [1,2,3,4]
// const newX = x.map(num => num+1)
// console.log(newX)

// let arr = ["I", "go", "home"];
// delete arr[0]
// // console.log(arr.shift())
// console.log(arr.length)

// let arr = ["t", "e", "s", "t"];

// let newArrSlice = arr.slice(1, 3)
// console.log(arr)
// console.log(newArrSlice)


// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };
// console.log(arrayLike.length)
// console.log( arr.concat(arrayLike)); // 1,2,[object Object]

// let arr = [1, 2];

// let arrayLike = {
//     [Symbol.isConcatSpreadable]: true,
//     0: "something",
//     1: "else",
//     length: 2,
// };

// console.log(arr.concat(arrayLike)); // 1,2,something,else

// app.get('/', (req, res) => {
//     res.send('hi')
// })

// const codeA = 'a'.charCodeAt() //97

// const grid = num => {
//     if (num < 0) return null

//     const grid = []
//     for (let row = 0; row < num; row++) {
//         const cells = []
//         for (let cell = 0; cell < num; cell++) {
//             cells.push(String.fromCharCode(codeA + (row + cell) % 26))
//         }
//         grid.push(cells.join(''))
//     }
//     return grid.join('\n')
// }
// console.log(grid(26))

// const vowels = 'aeiou'

// const stripVowels = str => {
//     return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('')
// }

// console.log(stripVowels("This website is for losers LOL!"))

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     }, 
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// async function fetchPhoto() {
//     const res = await fetch(url)
//     const data = res.json('https://dog.ceo/api/breeds/image/random')
//     console.log(data)
// }

// const backOfTheBus = (data, toBeMoved) => {
//     return data.filter(a => a !== toBeMoved).concat(data.filter(a => a === toBeMoved))
// }

// console.log(backOfTheBus('asdflasdfaajmbas'.split(''), 'a').join(''))

// const openOrSenior = data => {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))


