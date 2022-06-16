const today = new Date
console.log(today)

// const anObject = {
//     myProp: 2
//   };

// let clone = Object.create(anObject)

// let anotherOne = Object.create(clone)

// console.log(clone)
// console.log(anotherOne)

// const myArray = [6, 19, 20]
// const yourArray = [2, 33, 19]

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if(myArray[i] === yourArray[j]) {
//             console.log(`${myArray[i]} and ${yourArray[j]} are the same!}`)
//         }
//     }
// }

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if(myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// let user = {
//     name: "John",
//      age: 30,
//      isAdmin: true
// };

// for (let prop in user) {
//     console.log(user[prop])
// // }

// function houseOne() {
//     setTimeout(() => {
//         console.log('house one')
//             setTimeout(() => {
//                 console.log('house two')
//                     setTimeout(() => {
//                         console.log('house three')
//                     }, 1500)
//             }, 1000)
//     }, 500)
// }

// houseOne()

// ObjectNAmeHere.prototype.propertyNameHere = 'valueHere'
// let string = 'the panda is black and white'
// console.log(string.replaceAll('panda', 'orca'))
// const anArray = [1, 1, 1, 1]
// const allEqual = n => n.every(val => val === n[0])
// console.log(allEqual(anArray))

// app.get('/', (request, response) => {
//    resonse.sendFile(__dirname + '/index.html')
// })

// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')
// })