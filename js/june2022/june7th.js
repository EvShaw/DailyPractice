console.log('June 7th, 2022')

// let username = ''
// // let defaultName;

// // if (username) {
// //     defaultName = username
// // } else {
// //     defaultName = 'Stranger'
// // }

// let defaultName = username || "Stranger"

// console.log(defaultName)

// const obj1 = {'user': 'jim', 'id': 1 }
// const obj2 = {'user': 'jan', 'id': 2 }


// const objAll = Object.assign({}, [obj1, obj2])

// console.log(objAll)

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for(let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }

// console.log(board)

// console.log(Math.pow(2, 10))

// let num = 0
// let result = 0

// // while(num <= 10) {
// //     console.log(result*=2)
// //     num++
// // }
// let sum = 1
// for (let i = 0; i < 10; i++) {
    
//     console.log( sum *= 2)
// }


// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
//   }
  
//   console.log(power(4));
  
//   console.log(power(2, 10));

// for (let i = "#"; i.length<8; i+="#") {
//     console.log(i)
// }
// console.log('########')

// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const http = require('http')
// const fs = require('fs')
// const cors = require('cors')
// const PORT = process.env.PORT || PORT
// app.use(cors())

// http.createServer((req, res) => {
//     fs.readFile('demoFile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// arr.forEach(ele => {
//     const li = document.createElement('li')
//     li.textContent = ele.data
//     document.querySelector('ul')appendChild(li)
// })

// function isEmpty(obj) {
//     if(obj) {
        
//     }
//     console.log(true)
// }

// isEmpty()


// // lexigraphical:
// const array1 = [1, 3, 54, 25, 16, -2]
// console.log(array1.sort())
// //numerical:
// const array2 = [1, 3, 54, 25, 16, -2]
// array2.sort((a, b) => a - b)
// console.log(array2)

// arr.find( item => item.id == 2ls)