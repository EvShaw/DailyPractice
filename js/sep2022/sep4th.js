document.querySelector('#today').textContent = new Date

// const isolateIt = arr => {
//     return arr.map( el => {
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

// const seniorOrOpen = data => {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'))
// }

// console.log(seniorOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(seniorOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const removeExtras = (arr, num) => {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }
//     return ans
// }

// // with filter: 

// const removeExtrasFilterdMethod = (arr, num) => {
//     const count = {}

//     return arr.filter(el => {
//         count[el] = (count[el] || 0) + 1
//         return count[el] <= num
//     })
// }

// let stringToBeUsed = 'aabbaabbaacccdddeeefffaabab'.split('')

// console.log(removeExtras(stringToBeUsed, 1))
// console.log(removeExtrasFilterdMethod(stringToBeUsed, 1))

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('aabbaabbaacccdddeeefffaabab'.split('').sort().join('')))

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

// function towerBuilder(nFloors) {
//     tower = []
//     for (let i = 0; i < nFloors; i++) {
//         tower.push(' '.repeat(nFloors - i - 1)
//             + '*'.repeat((i * 2) + 1)
//             + ' '.repeat(nFloors - i - 1))
//     }
//     return tower
// }

// console.log(towerBuilder(3))



