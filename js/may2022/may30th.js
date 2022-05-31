console.log('May 30th, 2022')

// const pen = {
//     brand: 'bix', 
//     color: 'black', 
//     style: 'ballpoint', 
//     qty: 25
// }

// console.log(Object.keys(pen))

// const penStore = JSON.stringify(pen)

// localStorage.setItem('pen', penStore)

// // localStorage.clear()

// let myPen = JSON.parse(localStorage.getItem('pen'))

// console.log(myPen)

// myPen.qty++

// console.log(myPen)

// let num = 1
// for (let i = 0; i < 10; i++) {
//     console.log(num*=2)
// }

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'content-Type': 'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// const randomArrayOfElements = document.querySelectorAll('.h1Mains')

// Array.from(randomArrayOfElements).forEach(ele => ele.addEventListener('click', (e) => {
//     console.log(e)
// }))

// async function functionNameHere() {
//     //code here
// }
// async function getPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }

// getPhoto()

// const myFavColor = ['purple', 'black', 'green']

// for (let i = 0; i < myFavColor.length; i++) {
//     console.log(myFavColor[i])
// }

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if(myArray[i] === yourArray[j]) {
//             console.log(`${myArray[i]} & ${yourArray[j]} are TWINS!`)
//         }
//     }
// }


// const pen = {
//     brand: 'bix', 
//     color: 'black', 
//     style: 'ballpoint', 
//     qty: 25
// }

// // console.log('brand' in pen )

// // let arr = [1, 15, 2, 33]

// // console.log(arr)
// // console.log(arr.sort())
// // console.log(arr.sort((a, b) => a - b))

// console.log(pen)
// console.log(delete pen.color)
// console.log(pen)
// console.log(delete pen.style)
// console.log(pen)
// console.log(delete pen.brand)
// console.log(pen)

// const squared = n => Math.sqrt(n) % 1 === 0 

// console.log(squared(26))

// myUrl.searchParams.forEach((val, name) => console.log(`${name}:${val}`))

// path.parse(__filename)
// path.parse(__filename).base)

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// function num(n) {
//     let marker = 1
//     for (let i = 0; i < n; i++) {
//         console.log(marker*=2)
//     }
// }
// num(10)cd 