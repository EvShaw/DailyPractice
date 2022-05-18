// console.log('May 17th, 2022')

// Write a function which maps a function over the lists in a list:
// function gridMap(fn,xss) { return [[]]; }
// Example 1:
// const xss = [ [1,2,3]
//             , [4,5,6]
//             ];

// gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
// gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
// Example 2
// const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

// gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

// const gridMap = ((fn, a) => a.map(x => x.map(fn))) 
// const gridMap = ((fn, a) => a.map(x => x.map(fn)))

// const gridMap = ((fn, a) => a.map(x => x.amp(fn)))

// const gridMap = ((fn, a) => a.map(x =>  x.map(fn)))

// const myNums = [-11, -3, 0, 2, 13, 38]

// let newNums = myNums.filter( num => {
//     if (num > 0) {
//         return num
//     }
// })
// console.log(newNums)
// const herNums = [-100, 00, 04, 33]

// const newNums = myNums.map( num => Math.abs(myNums))
// console.log(newNums)

// let ourNums = Object.assign({}, myNums, herNums)

// console.log(ourNums)

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('########')
// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// // }

// const somethingHere = document.querySelectorAll('.classNameHere')

// Array.from('anoterArr').forEach(ele => ele.addEventListner('click', (e) => {
//     console.log(e)
// }))

// Array.from('anotherArray').forEach(ele => ele.addEventlistener('click', runThis))

// function runThis(){
//     console.log('GO TIME')
// }

// const myObj = {
//     name: 'evan', 
//     profession: 'ninja', 
//     dream: 'running as fast as a zebra'
// }

// // let clone = Object.assign({}, myObj)
// let clone = {}

// console.log(clone)

// for ( let prop in myObj) {
//     // console.log(myObj[prop])
//     clone[prop] = myObj[prop]
// }
// console.log(clone)

// let user = {
//     name: "John", 
//     age: 30
// }

// let clone = {} //the new empty object
// //let's copy all user properties into it: 
// for (let key in user) {
//     clone[key] = user[key]
// }

// console.log(clone)

// const user = user.find( item => item.id === 2)
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// for (let prop in menu) {
//     if (typeof menu[prop] === 'number') {
//       menu[prop] *=2
//     }
// }

// console.log(menu)

cosnt isEquals = n => n.every(num => num === n[0])