const today = new Date
console.log(today)

// const doubleIt = s => s.split('').map(n => n + n).join('')
// console.log(doubleIt('Double Trouble'))

// function countSheeps(arrayOfSheep) {
//     let sheepCount = 0

//     arrayOfSheep.forEach(sheep => {
//         if (sheep == true) sheepCount++
//     })

//     return sheepCount
// }

// const countSheep = arr => arr.filter(Boolean).length

// const senOrOpen = arr => {
//     return arr.map(([senior, handicap]) => {
//         return senior > 55 && handicap > 7 ? 'Senior' : 'Open'
//     })
// }

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen ([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const roundTo = n => {
//     while(n % 5 != 0) n++
//     return n
// }

// console.log(roundTo(22))

// app.use( (req, res) => {
//     res.locals.user = req.user || null
//     next()
// })

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const x = [1,2,3,4]

// let newX = x.map(n => n += 1)
// console.log(newX)

// const a = [2,4,6,8] 
// const newA = a.map((el, ind, arr) => arr[arr.length - 1 - ind])
// console.log(newA)

// const a = [1,4,9,16]
// const newA = a.map(Math.sqrt)
// console.log(newA)

