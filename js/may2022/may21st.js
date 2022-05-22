console.log('May 21st, 2022')

// console.log(String(7).padStart(3, "0"))

// for (let i = 0; i <= 12; i += 2) {
//     console.log(i)
// }

// let num = 0
// while(num < 12) {
//     console.log(num +=2)
// }

// const nums = [2, 3, 5, 6]

// console.log(nums.reduce((acc, c) => acc + +c, 0))

// arrNameHere.find(item => item.propName === 'propertNameHere')


// arrName.sort((a, b) => a - b)

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// const doubleUp = x => x.map(num => num*2)

// console.log(doubleUp([1, 2, 3, 4]))

// function coinToss(n) {
//     if (n%2 === 0 || n.toLowerCase() === 'heads') {
//         console.log('Heads')
//     } else {
//         console.log('Tails')
//     }
// }

// const headTails = _ = Math.random() < .5 ? 'tails' : 'heads'


// coinToss('heads')

// const codeA = 'a'.charCodeAt()

// function grid(N) {
//   if (N < 0) return null;
//   const grid = [];
//   for (let row = 0; row < N; row++) {
//     const cells = [];
//     for (let cell = 0; cell <N; cell++) {
//       cells.push(String.fromCharCode(codeA + (row + cell) % 26));
//     }
//     grid.push(cells.join(' '))
//   }
//   return grid.join('\n')
// }

// const alphaKey = 'a'.charCodeAt() //97

// function grid(n) {
//     if (n < 0) return null;

//     const grid = []
//     for (let row = 0; row < n; row++) {
//         const cells = []
//         for (let cell = 0; cell < n; cell++) {
//             cells.push(String.fromCharCode(alphaKey + (row + cell) % 26))
//         }
//         grid.push(cells.join(''))
//     }
//     return grid.join('\n')

// }

// console.log(grid(52))


// function strCount(str, letter) {
//     let splitIt = str.toLowerCase().split('')
//     let count = 0

//     splitIt.forEach(ele => {
//         if(ele === letter) {
//             count++
//             return count
//         } else {
//             return 0
//         }
//     })
//     console.log(count)
// }

// const strCount2 = (str, letter) => str.split('').filter(x => x === letter).length