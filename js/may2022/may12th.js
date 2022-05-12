console.log('May 12th')

const myArray = ['breakfast', 'brunch', 'lunch', 'dinner', 'supper']


// myArray.forEach(ele => console.log(ele))
// for (let meals of myArray){
//     console.log(meals)
// }


// function calculator() {
//     this.read = function(){
//         this.a = prompt('a?')
//         this.b = prompt('a?')
//     }, 
//     sum = function() {
//         console.log(this.a + this.b)
//     }, 
//     mul = function(){
//         console.log(this.a * this.b)
//     }
// }

// console.log(calculator.read())

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// console.log(menu)
// for(let u in menu) {
//     if (typeof menu[u] === 'number') {
//        menu[u] *= 2
//     } 


// }

// console.log(menu)

// console.log(myArray.lastIndexOf('lunch'))
// // console.log(myArray.includes('lunch', 3))

// function checkForIt(arr, name){
//     if (arr.includes(name)) {
//         console.log(`The item '${name}' within the array '${arr}' is located at ${arr.indexOf(name)}`)
//     }
// }

// checkForIt(myArray, 'supper')

// console.log(myArray.find(item => item))

// Array.find( item => item.id === 3)

// function PizzaMaker(size, sauce, toppings, crust){
//     this.size = size
//     this.suace = sauce
//     this.toppigns = toppings
//     this.crust = crust
//     this.delivery = function() {
//         console.log('coming in hot')
//     }
//     this.temp = function() {
//         console.log('piping hot!')
//     }
// }

// const myPizza = new PizzaMaker('xl', 'norm', ['cheese', 'pepperoni', 'bacon'], 'stuffed')

// console.log(myPizza.delivery())

// class PizzaMaker2{
//     constructor(size, sauce, toppings, crust) {
//         this._size = size
//         this._sauce = sauce
//         this._toppings = toppings
//         this._crust = crust

//     }
//     get size(){
//         return this._size
//     }
//     get sauce(){
//         return this._sauce
//     }
//     get toppings(){
//         return this._toppings
//     }
//     get crust(){
//         return this._crust
//     }
//     delivery(){
//         console.log('coming in hotter than hot hot')
//     }
//     temp(){
//         console.log('cold as ice')
//     }
// }

// const myPizza2 = new PizzaMaker2('xl', 'norm', ['cheese', 'pepperoni', 'bacon'], 'stuffed')

// console.log(myPizza2.temp())
// let num = 1
// for (i = 0; i < 10; i++) {
//     console.log(num*=2)
// }

// while(num < 12) {
//     console.log(num+=2)
// }

// function mapCeption(og, plusOne) {
//     return a.map( x => x.map(og)) 
// }

// const mapCeption = ((og, a) => a.map(x => x.map(og)))

// function gooseFilter(bird){
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     console.log(bird.filter( b=> !geese.includes(b)))
//     return bird.filter( b=> !geese.includes(b))
// }

// gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

//this filter function return an arrary with values that meet the condition set in the ruleCondition callback function. 
// Array.prototype.filter = function (ruleCondition) {
//     //create an empty array to store the values that satisfy the ruleCondition
//     const arr = []
//     this.forEach(currentValue => {
//         //evaluate each element and push the values when contetn is array meet condition. 
//         if (ruleCondition(currentValue)) {
//             arr.push(currentValue)
//         }
//     })
// } 

// // or...

// Array.prototype.filter=function(fn){
//     return this.reduce((s, a) => fn(a) ? (s.push(a), s):s, [])
// }

// const myNums = [1,3,7,10]

// myNums.forEach( ele => ele*=2 )

// console.log(myNums)

// const newNums = myNums.map(n => n*=2)

// console.log(newNums)
