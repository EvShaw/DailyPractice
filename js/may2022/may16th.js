console.log('May 16th')

// const sqRT = Math.sqrt(n) % 2 === 0 ? 'yes' : 'no'

// const allEqual = arr => arr.every(num=>num===arr[0])

// const allEqual = arr => arr.every(num => num === arr[0])

// const allEvens = arr => arr.every(num => num % 2 === 0)

// const nums = [0, 2, 4, 6, 9]
// const nums2 = [2, 2, 2, 2, 2]


// console.log(allEvens(nums))
// console.log(allEqual(nums2))


// function login(name) {

//     let username = name
//     let defaultName = username || "Stranger"



//     if (name === undefined) {
//         console.log(defaultName)
//     }

//     return defaultName 

// }



// console.log(login('jim'))

// const myArr = [1, 2, 3]

// myArr.forEach(num => console.log(num * 2))

// myNewArr = myArr.map( num => num *= 2)

// console.log(myNewArr)



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

// // gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]

// function listOfLists(inner, outer) {
//     return outer.map(list => list.map(inner))
// }

// // console.log(listOfLists([2, 3, 4]))

// // function gridMap(fn, a) {
// //     return a.map(x => x.map(fn))
// // }

// const gridMap = ((fn, a) => a.map(x => x.map(fn)))

// console.log(gridMap([2, 3, 4]))


// for (let i = '#'; i.length < 8; i+='#') {
//     console.log(i)
// }

// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }
// let num = 0
// for (let i = 0; i < 12; i += 2) {
//     console.log(num += 2)
// }

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }
// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const myNums = [1,2,3,4,5,6]

// const total = myNums.reduce((acc, c) => acc + +c, 0)
// console.log(total)

// false, true, true, false, true, false, true, false, false

// Array.from('contestants').forEach(ele => ele.addEventListener('click', doThis))

// function doThis(click){
//     if(click.target.classList.contains('somethingHere')) {
//         //do this code here. 
//     }
// // }

// ObjectNameHere.prototye.propertyNameHere = valueHere

// const myNums = [1,2,3,4,5,6]

// Array.from('something').forEach(ele => ele.addEventListener('click', runThis))

// function runThis(click){
//     if(click.targer.classList.contains('nameHere')) {
//         // do this. 
//     }
// // }

// function tableNum(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(`The table for: ${num} is: ${i} * ${num} = ${i*num}`)
//     }

    
// }

// tableNum(4)