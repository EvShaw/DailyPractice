const today = new Date
console.log(today)

// const swapOut = str => {
//     const obj = {'e':'s', 'v':'h', 'a':'a', 'n':'w'}
//     return str.split('').map(v => obj[v]).join('')
// }

// console.log(swapOut('evan'))

// const removeExtras = (list, n) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtras('aaabbbcccaaabbbcccdddexyzzzz', 1))

// using filter:

// const removeX = (arr, x) => {
//     const cache = {}
//     return arr.filter(n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= x
//     })
// }
// console.log(removeX('aaabbbcccaaabbbcccdddexyzzzz', 1))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// console.log(words.filter(n => n.length > 6))

// function countSheeps(arrayOfSheep) {
//     let sheepCount = 0

//     arrayOfSheep.forEach(sheep => {
//         if (sheep == true) sheepCount++
//     })

//     return sheepCount
// }


// const countSheeps = arr => arr.filter(Boolean).length

// app.get('/', (req, res) => {
//     res.send('Hello World')
//  }

// let number = 12.1234567878

// console.log(Math.round((number)*100)/100)

// const a = [2, 4, 6, 8]

// const b = a.map((el, index, arr) => {
//     return arr.length - 1 - index
// })
// console.log(b)

// const a = [...Array(4)]
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]

// const b = a.map((_, i) => i)
// console.log(b)   //output: [ 0, 1, 2, 3 ]

// const c = [...Array(4)].map((_, i) => i)
// console.log(c)   //output: [ 0, 1, 2, 3 ]

// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(d)   //output: [ 0, 1, 2, 3 ]


// const x = [1,2,3,4]
// const y = x.map(el => el += 1)
// console.log(y)

// const aa = [1,4,9,16]
// const bb = aa.map(Math.sqrt)
// console.log(bb)

const isolateIt = arr => {
    return arr.map(v => {
        if(v.length % 2 == 0) {
            return v.slice(0, v.length/2) + '|' + v.slice(v.length /2) 
        }
        if(v.length % 2 != 0) {
            return v.slice(0, v.length/2) + '|' + v.slice((v.length/2) + 1)
        }
    })
}

console.log(isolateIt(["abcd", "efgh"]))
console.log(isolateIt(["abcde","fghij"]))
console.log(isolateIt(["1234","56789"]))