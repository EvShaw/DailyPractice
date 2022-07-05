const today = new Date
console.log(today)

// const removeDupes = n => [...n].filter((a, i) => a !== n[i -1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// myURL.searchParam.forEach((value, name) => console.log(`${name}: ${value}`))

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })
// db.collections('nameHere').findOneAndUpdate(query, update, options)
//     .then(results => {})
//     .catch(err => console.error(err))

// const team = ['batman', 'superman', 'wonderwoman', 'cyborg']

// for (let i = 0; i < team.length; i++) {
//     team[i] = team[i][0].toUpperCase() +  team[i].slice(1)
// }
// console.log(team)

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
//   }
  
//   console.log(power(4));
  
//   console.log(power(2, 6));

// let objectA = {a: 1, b:2}

// Object.assign(objectA, {b: 3, c: 4})
// console.log(objectA)


// let num = 1
// let result = 0

// while(result <= 12) {
//     num *= 2
//     result++
//     console.log(num)
// }

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// async function getPhoto() {
//     const res = await fetch(urlHere)
//     const data = await res.json()

//     console.log(data)
// }

// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

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

// const allEqual = n => n.every(val => val === n[0])

// console.log(allEqual([2, 2, 2]))

// process.env.PORT || PORT, () => {
//     console.log('server is running')
// }

// let user = {
//     name: "John", 
//     age: 30
// }

// let clone = {} //the new empty object
// //let's copy all user properties into it: 
// for (let key in user) {
//     clone[key] = user[key]
// }

// //now clone is a fully independent object with the same content
// clone.name  = 'Pete' //chaged the data in it. 

// alert(user.name) //still jogn in the original object. 

// document.getElementById('idName').onclick = functionName

// function functionName() {
//     document.querySelector('body').style.backgroundColor = 'color'
// }
// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {
   
// })