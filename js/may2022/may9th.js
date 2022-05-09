console.log('May 9th')

// const anObject = {
//     myProp: 2
//   };

//   const anotherObject = Object.create(anObject)
//   const yetAnotherObject = Object.create(anotherObject)
//   const oneyetAnotherObject = Object.create(yetAnotherObject)


//   console.log(anotherObject)
//   console.log(yetAnotherObject)
//   console.log(oneyetAnotherObject)

// const random = function(){
//     console.log('so random')
// }

// const pen = {
//     brand: 'Bic', 
//     style: 'Ballpoint', 
//     color: 'Blue'
// }

// console.log(pen)


// const myTeam = ['Charizard', 'Gengar', 'Dragapult', 'Greninja', 'Shedninja', 'Scizzor']
// console.log(Array.isArray(myTeam))
// // // const alphaba = myTeam.sort((a, b) => a - b)
// // // console.log(alphaba)
// // const onTeam = myTeam.includes('Gengar')
// // console.log(onTeam)

// let user = {
//     name: "John",
//      age: 30,
//      isAdmin: true
// };

// for(prop in user) {
//     console.log(`The ${prop} property of this object is ${user[prop]}`)
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// sum = 0

// for (let budget in salaries) {
//     sum += salaries[budget]
// }

// console.log(sum)

// const field {

// }


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// function CarFactory(brand, model, color){
//     this.brand = brand
//     this.model = model
//     this.color = color
//     this.horn = function(){
//         console.log('BEEEEEEEEEEEEP')
//     }
// }

// const myCar = new CarFactory('Toyota', 'Tundra', 'White')
// console.log(myCar.horn())

// class CarFact{
//     constructor(brand, model, color){
//         this._brand = brand
//         this._model = model
//         this._color = color
//     }
//     get brand(){
//         return this._brand
//     }
//     get model(){
//         return this._brand
//     }
//     get color(){
//         return this._color
//     }
//     horn(){
//         console.log('Beep Beep')
//     }

// }

// const myNextCar = new CarFact('Ford', 'Raptor', 'Blue')
// console.log(myNextCar.horn())

// function getFetch(){
//     fetch() 
//         .then(res => res.json)
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// function tenth() {
//     // console.log(Math.pow(2, 10))

//     let num = 1
//     let count = 0
//     // for(let i = 1; i <= 10; i++){
//     //     num *= 2
//     //     console.log(num)
//     // }
//     while(count < 10) {
//         count++
//         // console.log(num)
//         console.log(num*=2)
//     }
// }
// console.log(tenth())

// let talk = ' Hello There!'

// console.log(talk.repeat(3))
// let num = 0
// for (let i = 0; i < 12; i++){
//     num += 2
//     console.log(num)
// }

// const weather = 'The day will be hot and sunny'

// console.log(weather.indexOf('hot'))
// console.log(weather.slice(16, 19))


// let board = ''
// let size = 8
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }

// console.log(board)