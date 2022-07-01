const today = new Date
console.log(today)

// const removeDupes = str => [...str].filter((a, i) => a !== str[i-1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for(let j = 0; j < size; j++) {
//         if((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }

// console.log(board)

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// const thisArrayHasNoName = ['squirtle', 'charmander', 'bulbusaur', 'pikachu']

// for(let i = 0; i < thisArrayHasNoName.length; i++) {
//     thisArrayHasNoName[i] = thisArrayHasNoName[i][0].toUpperCase() + thisArrayHasNoName[i].slice(1)
// }

// console.log(thisArrayHasNoName)

// npm nodemon install --save-dev

// let num = 11.123456789

// console.log(Math.round((num)*100) / 100)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };


// for (prop in menu) {
//     if(typeof menu[prop] === 'number') {
//         menu[prop] *= 2
//     }
// }

// console.log(menu)


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// response.render('index.ejs', {info: data})
// app.get('/', (request, response) => {
//     response.send('hi')
// })

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })
// const allEqual = arr => arr.every(val => val === arr[0])
// console.log(allEqual([1, 1, 1, 1]))

// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()