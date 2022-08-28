const today = new Date
console.log(today)

// const duplicate = arr => arr.concat(arr)

// console.log(duplicate([1,2,3,4,5]))

// function fizzBuzz(num = 100) {
//    for(let i = 1; i <= num; i++) {
//     if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz')
//     else if(i % 3 == 0) console.log('Fizz')
//     else if(i % 5 == 0) console.log('Buzz')
//     else console.log(i)
//    }
// }

// fizzBuzz()

// const a = [1,4,9,16,25,36]
// const newA = a.map(Math.sqrt)
// console.log(newA)

// const MongoClient = require('mongodb').MongoClient
// MongoClient.conenct('DB_String_HERE', (err, client) => {
//     //code here
// })

// const anArr = [2,2,2,2,2,2,2,2,2]
// console.log(anArr.fill('*', 1, -1))

// setTimeout(() => {
//     console.log('1 second later')
// }, 1000)

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// process.env.PORT || PORT, () => {
//     console.log('the server is now running...
// }

// let user = {
//     firstName: 'Evan', 
//     lastName: 'Shaw', 
//     isAwesome: true,
//     const { firstName, lastName } = me 
// }

// console.log(user)

// const byFive = num => {
//     while(num % 5 != 0) {
//         num++
//     }
//     return num
// }

// console.log(byFive(23))

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

// console.log(grid(5))
// function generateShape(integer) {
//     let shape = '+'
//     const arr = []

//     for(let i = 0; i < integer; i++) {
//         arr.push(shape.repeat(integer))
//     }
//     return arr.join('\n')
// }

// console.log(generateShape(8))

// function generateShape(integer) {
//     let square = ''

//     for (let i = 0; i < integer; i++) {
//         for (let j = 0; j < integer; j++) {
//             square += '+'
//         }
//        square += '\n'
//     }
//     square.slice(-2)
//     return square
// }

