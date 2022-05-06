console.log('May 6th, 2022')



// function isEmpty(obj){
//     for(key in obj){
//         console.log('not empty as the loop started.')
//     }
//     console.log(true)

// }

// const user = users.find( item => item.id === value)

// let phrase = ['the', 'crazy', 'bear', 'went', 'up', 'the', 'tree']

// phrase.splice(3, 0, 'Here it is!')



// let arr = [1, 15, 2]
// arr.sort((a,b) => a - b)

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '40 main st',
//         city: 'boston',
//         state: 'MA',
//     }
// }

// // console.log(person.hobbies[1])

// for (key in person) {
//     console.log(person[key])
// }

// const anObject = {
//     myprop: 2
// }

// const anotherObject = Object.create(anObject)

// console.log(anotherObject)

// const yesOneMore = Object.create(anotherObject)

// console.log(yesOneMore)

// function CarMaker(brand, model, color, style) {
//     this.brand = brand
//     this.model = model
//     this.color = color
//     this.style = style
//     this.horn = function() {
//         console.log('BEEP')
//     }
//     this.alarm = function(){
//         console.log('WEEEOOOOO WEEEEOOOO WEEEEEOOO')
//     }
// }

// const myFirstCar = new CarMaker('Mitsibishi', 'Eclipse', 'red', 'gst')
// console.log(myFirstCar)

// class CarMaker2{
//     constructor(brand, model, color, style) {
//         this.brand = brand
//         this.model = model
//         this.color = color
//         this.style = style
//     }
//     horn(){
//         console.log('BEEP')
//     }
//     alarm(){
//         console.log('WEEEOOOOO WEEEEOOOO WEEEEEOOO')
//     }
// }

// const myCurrentCar = new CarMaker2('Scion', 'FRS', 'red')
// console.log(myCurrentCar.alarm)

// for (let i = '#'; i.length < 8; i += '#') {
//     console.log(i)
// }

// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// rite a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pligrim", "steinbacher"]

    return birds.filter(b=> !geese.includes(b))
}

const doubleUp = arr => arr.map(n => n*2)
console.log(doubleUp([1, 2, 3]))