// const today = new Date
// console.log(today)

// arrayNameHere.forEach(ele => ele.addEventListener('click' _ => {
//     //code here
// }))

// let user = {
//     name: "john", 
//     age: 30
// }

// let clone = Object.assign({}, user) 

// console.log(user)
// console.log(clone)

// const anObject = {
//     myProp: 2
// };

// const anotherObject = Object.create(anObject)
// console.log(anotherObject)



// function MakePizza(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.delivery = function() {
//         console.log('on its way')
//     }
//     this.temp = function() {
//         console.log('burn my mouth')
//     }
//     this.frisbee = function() {
//         console.log('YEEEEEEEEEEEET')
//     }
// }

// //class version:
// class MakePizza2 {
//     constuctor(size, sauce, toppings, crust) {
//         this.size = size
//         this.sauce = sauce
//         this.toppings = toppings
//         this.crust = crust
//     }
//     delivery() {
//         console.log('on its way')
//     }
//     temp() {
//         console.log('burn my mouth')
//     }
//     frisbee() {
//         console.log('yeet!')
//     }
// }


// let pizza2 = new MakePizza2('large', 'marinara', ['cheese', 'peperonni', 'sausage'], 'thin')
// console.log(pizza2.delivery())

// let total = 0
// let count = 0
// while(count < 10) {
//     total++
//     console.log(count++)
// }

// const todoText = todos.map(function(todo) {
//     return todo.text;
//  });

// const removeExtra = (arr, n) => { //creates a constant, function that accepts two params (arr, and n). Followed by a fat arrow (es6 syntax) and then a curly brace that opems up a multi-line code block
//     const count = {} //creates a constant object called count
//     const ans = [] // creating a constant array called ans

//     for (let el of arr) { //creates and opens a for...of loop, that itterates over every element (el) of the array being passed from the paramaters into the for loop (arr). This loop will run for each and every element in the array.
//         if(count[el])  { //an if statemen that checks if count[el] is truthy. Meaning, does it have value? if true, if value is already in the count object then count[el] will equal count[el] + 1
//             count[el] = count[el] + 1 //the property value which is what [el] becomes in the object will uptick the count. So, in the end the object looks like : 
//             // {1: 3, 2: 3, 3: 3, a: 3, z: 3}
//         } //close out the if statemtne and open the else:        
//         else count[el] = 1 //no braces needed for sinlge line. since count[el] was falsy, we start the count off with 1
//         if(count[el] <= n) ans.push(el) //a new if statement, if the count[el] is less than the number, add it to the ans array with the push method. So, as n = 1 here, we push 1 to ans once, 2 to ans once, 3, to ans once, a and z once to ans...  ans = [1, 2, 3, 'a', 'z'] 
//     } //close out the for...op loop
//     return ans //return the ans array from line 79
// } // close out the function. 

// console.log(removeExtra([1,1,1,2,2,2,3,3,3,'a', 'a', 'a', 'z', 'z','z'], 1))


//  const allEquals = arr => arr.every( val => val === arr[0])

//  console.log(allEquals([2,2,2]))
//console.log(os.cpus())
//const choice = document.querySelector('input').value.replaceAll(' ', '-').replaceall('.', '').toLowerCase()

// app.get('/', (req, res) => {
//     res.send('Hello World')
//  }

// const express = require('express') const bodyParser= require('body-parser') 
// const app = express() 


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }