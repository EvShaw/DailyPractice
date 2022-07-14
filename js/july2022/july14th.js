const today = new Date
console.log(today)

// console.log(Math.round((10.1234)*100)/100)

// const input1 = document.querySelector('#IdNameHere').value

// input1.replaceAll(' ','-').replaceAll('.','').toLowerCase()

// const MongoClient = require('mongodb').MongoClient

// const ninjaTurtles = ['leo', 'ralph', 'mikey', 'donny']

// for(let i = 0; i < ninjaTurtles.length; i++) {
//     ninjaTurtles[i] =  ninjaTurtles[i][0].toUpperCase() + ninjaTurtles[i].slice(1)
// }

// console.log(ninjaTurtles)

// const removeDupes = str => [...str].filter((el, i) => el !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function doubleUp(obj) {
//     for(let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop] *= 2
//         }
//     }
    
// }

// doubleUp(menu)
// console.log(menu)

// let calculator = {
   
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b;
//     }
 
//  }
 
//  console.log(calculator.read())

// const calculator = {
//     read() {
//         this.a = +prompt('a?', 0) 
//         this.b = +prompt('b?', 0)
//     }, 
//     sum() {
//         return this.a + this.b
//     },1
//     mul() {
//         return this.a * this.b
//     }
// }

// console.log(calculator.read())

// app.get('/', (req, res) => {

// })

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

// function deleteExNums(arr, num = 1) {
//         const cache = {}
//         return arr.filter( n => {
//             cache[n] = (cache[n] || 0) + 1
//             return cache[n] <= num
//         })
// }

// console.log(deleteExNums([2, 3, 4, 5, 4, 4, 2, 2, 3, 3, 3, 6]))

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data.message)
// }
// getPhoto()

function removeExtra(arr, n) {
    const count = {}
    const ans = []

    for(let el of arr) {
        if(count[el]) count[el] = count[el]+1
        else count[el] = 1
        if(count[el] <= n) ans.push(el)
    }
    return ans
}

console.log(removeExtra([2, 3, 4, 5, 4, 4, 2, 2, 3, 3, 3, 6]))
