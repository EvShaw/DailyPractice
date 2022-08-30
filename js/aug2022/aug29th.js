const today = new Date
console.log(today)

// const removeFromList = (list, removed) => {
//     return list.filter(el => !removed.includes(el))
// }
// console.log(removeFromList(['bed', 'ted', 'ned', 'red', 'bum', 'rum', 'hum'], ['bum', 'rum', 'hum'] ))

// let sentence = 'The quick brown fox jumped over the lazy dog. It barked!'
// let regex = /[A-Z]/g
// console.log(sentence.match(regex))


// function birds(list) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     return list.filter(b => !geese.includes(b))
// }

// console.log(birds( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

// let anObject = {left: 1, right: 2};
// console.log(anObject.left)
// delete anObject.left
// console.log(anObject)
// console.log('right' in anObject)
// console.log('left' in anObject)

// res.render('index.ejs', {items: todoItem, left: itemsLeft})

// const brothers = ['leo', 'ralph', 'mickey', 'donny']
// for (let i = 0; i < brothers.length; i++) {
//     brothers[i] = brothers[i][0].toUpperCase() + brothers[i].slice(1)
// }

// console.log(brothers)

// res.render('index.ejs', {info: nameList})

// setTimeout(() => {
//     console.log('hi')
// }, 1000)

// data.map(el => el.trickName)

// const removeDupes = list => [...list].filter((a, i) => a !==list[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const express = requrie('express')
// const app = express()

// app.listen(PORT, () => {
//     console.log(`Server running on {PORT}`)
// })

// const removeExtra = (arr, num) => { 
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }
//     return ans
// }
// console.log(removeExtra([1,1,1,2,2,2,3,3,3,4,5,5,5,4,4], 1))

// function countSheeps(arrayOfSheep) {
//     let sheepCount = 0

//     arrayOfSheep.forEach(sheep => {
//         if (sheep == true) sheepCount++
//     })

//     return sheepCount
// }

// //refactored: 

// const countSheep = arr => arr.filter(Boolean).length

// const getMid = str => str.slice((str.length-1)/2, str.length/2+1)
// console.log(getMid('Evan'))

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

