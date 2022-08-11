const today = new Date
console.log(today)

// response.render('index.ejs', {info: nameList})

// app.get('/', (req, res) => {
//
//  }

 // app.set('view engine', 'ejs')

//  for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }

//   .insertOne( )

//   function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// function roundByFive(n, x = 5) {
//     while(n % x !== 0) n++
//     return n

// }
// console.log(roundByFive(13, ))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);

// console.log(result);

// class Animal {
//     constructor(name, legs, tail) {
//         this._name = name
//         this._legs = legs,
//         this._tail = tail
//     }
//     get name() {
//         return this._name
//     }
//     get legs() {
//         return this._legs
//     }
//     get tail() {
//         return this._tail
//     }
//     speak() {
//         console.log(`${this._name} makes a noise`)
//     }
// }

// let falcore = new Animal('Falcore', '4', true)

// console.log(falcore.speak())

// app.get('/api/persons/:id', (req, res) => {
//     const id = req.params.id
//     const entry = persons.find(person => person.id == id)

//     if(entry) return res.json()
//     else return res.status(404).end()
// })

// function MakePizza(size, sauce, toppings, crust) {
//     this.size = size
//     this.sauce = sauce
//     this.toppings = toppings
//     this.crust = crust
//     this.delivery = function() {
//         console.log('on its way')
//     }
//     this.temp = function() {
//         console.log('cold as ice')
//     }
//     this.frisbee = function() {
//         console.log('FETCH!')
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
//         console.log('Perfecto!')
//     }
//     frisbee() {
//         console.log('yeeeeeet!')
//     }
// }


// let pizza2 = new MakePizza2('extra small', 'none', ['cheese', 'peperonni', 'sausage'], 'thin')
// console.log(pizza2.delivery())

// function isEmpty(obj) {
//     for (let key in obj) {

//     }
//     return true;
// }
// const todoItems = await db.collection('todos').find().toArray()

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });

// data.subclasses.forEach( obj => {
//     console.log(obj.name)
//
//     const li = document.createElement('li')
//
//     li.textContent = obj.name
//
//     document.querySelector('ul').appendChild(li)

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };