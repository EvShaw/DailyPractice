const today = new Date
console.log(today)

// function Parent() {
//     this.name = 'Parent';
//   }
//   Parent.prototype.greet = function () {
//     console.log('Hello from ' + this.name);
//   };
//   const child = Object.create(Parent.prototype);
//   child.cry = function () {
//     console.log('waaaaaahhhh!');
//   }

//   child.cry()
//   child.greet()

//   function init() {
//     let name = 'Mozilla'; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, a closure
//       alert(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// let username = 'Teddy'
// let defaultName = 'Stranger'

// if(username) defaultName = username
// else username = defaultName

// console.log(username)
// console.log(defaultName)

// for(let i = '#'; i.length < 8; i+='#') {
//     console.log(i)
// }
// console.log('########')
// for(let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// const thisArr = [2, 3, 4, 5, 6, 7, 8]
// console.log(thisArr.fill('!', 4))

// const getMid = s => s.slice((s.length-11)/2, s.length/2+1)
// console.log(getMid('Tests'))

// const senOrOpen = data => data.map( ([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

// const keys = document.querySelector('.allButtons')

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

//     if (!target.matches('button')) {
//         return;
//     } else {
//         calculator.parseInput(value)
//         console.log(value)
//     }
//     console.log(event)
// })

// const takeArrayWithTwoValues = arr => arr.map(([num1, num2]) => (num1 > 54 && num2 > 7) ? 'Go Big' : 'Go Home')

// console.log(takeArrayWithTwoValues([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(takeArrayWithTwoValues([[3, 12], [55, 1], [91, -2], [53, 23]]))

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', err data) => {
//     if (err) throw err
//     console.log(data)
// }


// require('dotenv').config()

// app.set('view engine', 'ejs')

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is runngin on port: ${PORT}`)
// })

// data.map(items => items.trickName)
// response.render('index.ejs', {info: nameList})

// const todoItems = await db.collection('todos').find().toArray()

// function Person(fName, lName, dob) {
//     this.fName = fName
//     this.lName = lName
//     this.dob = dob
//     this.call = () => {
//         console.log('HELLLLLO')
//     }
// }

// const evan = new Person('Evan', 'Shaw', 'tomorrow')
// console.log(evan.call())

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
//         this._size = size
//         this._sauce = sauce
//         this._toppings = toppings
//         this._crust = crust
//     }
//     get size() {
//         return this._size
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
// console.log(pizza2.size)

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getPhoto()

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// console.log(calculator.read())

