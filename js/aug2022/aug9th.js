const today = new Date
console.log(today)

// const rangeOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = rangeOfNums.reduce((acc, c) => acc + +c, 0)
// console.log(sum)

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// const MongoClient = require('mongodb').MongoClient

// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let filterWords = words.filter(word => word.length < 6)

// console.log(filterWords)

// let user = {
//     name: "John",
//      age: 30,
//      isAdmin: true
// };

// for(let prop in user) {
//     console.log(user[prop])
// }

// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     get name() {
//         return this._name
//     }
//     speak() {
//         console.log(`${this._name} makes a sound`)
//     }
// }


// let mooMoo = new Animal('Moo Moo', 'pitBull')
// console.log(mooMoo.speak())

// function MakeCar(carMake,carModel,carColor,numOfDoors){
//     this.make = carMake
//     this.model = carModel
//     this.color = carColor
//     this.doors = numOfDoors
//     this.honk = function(){
//       alert('BEEP BEEP')
//     }
//     this.lock = function(){
//       alert(`Locked ${this.doors} doors!`)
//     }
//   }
 
//   let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
 
//   let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)

// class: 
// class MakeCar{
//     constructor(carMake,carModel,carColor,numOfDoors){
//       this.make = carMake
//       this.model = carModel
//       this.color = carColor
//       this.doors = numOfDoors
//     }
//     honk(){
//       alert('BEEP BEEP')
//     }
//     lock(){
//       alert(`Locked ${this.doors} doors!`)
//     }
//   }
 
//   let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
 
//   let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)

// const number = array => {
//     return array.map( (line, index) => {
//       return (index + 1) + ": " + line;
//     });
//   }
  
// function SeriesSum(n) {
//     for (let s = 0, i = 0; i < n; i++) {
//       s += 1 / (1 + i * 3)
//     }
   
//     return s.toFixed(2)
//   }

// function filter_list(l) {
   
//     const m = l.filter(num => {
//         return typeof num === 'number'
//     })
//     return m
// }
