console.log('MAy 20th, 2022')

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function birds(arr) [
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//     return arr.filter(b => !geese.includes(b))
// ]


// function birds2(arR){
//     const geese =["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return arr.filter(b=> !geese.includes(b))
// }


// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.
// The usage will be quite simple, like:
// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// Array.prototype.filter = function(fn) {
//     return this.reduce((s, a) => fn(a) ? (s.push(a), s) :s, [])
// }

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// const arr = [1, 2, 3]

// const newArr = arr.map(item => item * 2)
// //og syntax: 
// function maps(x){
//     return x.map( num => num * 2)
// }



// function doubleUpAnArray(arr) {
//     return arr.map(num => num *= 2)
// }
// console.log(newArr)
// console.log(doubleUpAnArray())


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

// function gridMap(fn, a) {
//     return a.map(x=> x.map(fn))
// }

// //or: 

// const gridMap = ((fn, a) => a.map(x=> x.map(fn)))

// for (let i = "#"; i.length < 8; i += "#") {
//     console.log(i)
// }
// console.log('########')
// for (let i = "#######"; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// console.log(Math.abs(222.98))

// const myNums = [1, 2, 'a', 33, 67, 'x']

// console.log(myNums)

// myNums.filter(num => {
//     // console.log(Math.min(num))
//     if(Math.min(num)) {
//         console.log(num)
//     }
// })

// const calculator = {
//     brand: 'nike',
//     Model: 'the good one',
//     color: 'purple',
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     }, 
//     sum() {
//        return this.a + this.b
//     },
//     mul() {
//         return this.a + this.b
//     }
// }

// function isEmpty(obj) {
//     for(let key in obj) {
//         //if the loop started, there's a property
//         return false;
//     }
//     return true;
// }

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write(data)
//     res.end()
// }).listen(8000)

// objName.protoype.newProperty = 'whatisit'

// async function anotherDogPhoto(){
//     const res = await fetch('https://urlNameHere')
//     const data = await res.json()
//     console.log(data)
// }

// function CoffeeMaker(brand, model, color) {
//     this.brand = brand
//     this.model = model
//     this.color = color
//     this.steam = function(){
//         console.log('sssteaaaminnnnn')
//     }
// }

// class CoffeeMakerPlus{
//     constructor(brand, model, color){
//         this._brand = brand
//         this._model = model
//         this._color = color
//     }
//     get brand(){
//         return this._brand
//     }
//     get model(){model    
//         return this._model
//     }
//     get color(){
//         return this._color
//     }
//     steam(){
//         console.log('steammmmmmiiinn beeeettttererrrr wwwwith sugar!')
//     }
// }

// let myNewCoffee = new CoffeeMaker('a', 'good', 'green')
// let myNewCoffee2 = new CoffeeMakerPlus('a', 'good', 'green')

// console.log(myNewCoffee.steam())
// console.log(myNewCoffee2.steam())

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];

// for (let i = 0; i < myArray.length; i++) {

//     for (let j = 0; j < yourArray.length; j++) {
//         if (myArray[i] === yourArray[j]) {
//             console.log('TWINNNNSSSSSSIIIIEEEES')
//         }
//     }
// }

// function houseOne() {
//     setTimeout(() => {
//         console.log('Paper delivered to house one')
//             setTimeout(() => {
//                 console.log('Ppaer delivered to house two')
//                     setTimeout(() => {
//                         console.log('third time is a charm')
//                     }, 3000)
//             }, 4000)
//     }, 5000) 
// }
// houseOne()