console.log('linked')

//-------------------------------------April 26th: 

// let calculator = {
//     read() {
//         this.a += prompt('a?')
//         this.b += prompt('b?')
//     }, 
//     sum() {
//         return this.a + this.b
//     }, 
//     mul() {
//         return this.a * this.b
//     }
// }
//  console.log(calculator.read())

//  let user = {
//      name: 'John', 
//      age: 30,
//  }

//  let friend = {
//      name: 'Jane',
//      age: 31,
//  }

//  let clone = {}

//  for (let key in user) {
//      clone[key] = user[key]
//  }
// clone.name = 'Pete'
//  console.log(clone)
//  console.log(user)

//  let salaries = { John: 100, Ann: 160, Pete: 130 }

//  let sum = 0

//  for (let key in salaries) {
//      sum+=salaries[key]

//  }
//  console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// console.log(menu)

// function mulNum(obj) {
//     for (let key in obj) {
//       if(typeof obj[key] == 'number') {
//           obj[key] *= 2
//       }
//     }
// }
// mulNum(menu)
// console.log(menu)

// for (let key in menu) {
//     console.log(menu[key])
// }

// let schedule = {}

// function isEmpty(obj) {
//    for (let key in obj) {
//        console.log(key)
//    } 
//    console.log(true)
// }

// isEmpty(schedule)

// function min(a, b) {
//     return a < b ? a : b
// }

// function showMessage(text) {  
//     if (text === undefined) {
//         // if the parameter is missing text = 'empty message';
//         console.log('its empty!')
//     }
//     alert(text);

// }

// showMessage(); // empty message

// const sayHi = function() {
//     alert('hello')
// }

// function declaredThis() {
//     //code here
// }

// let expressThis = function() {
//     //code here
// }

// let ArrowThis = () => console.log('//code here if single expression')

// let sum = (a, b) => a + b

//find method: 

// let user = users.find(item => item.id === 'X')
// let user = users.find(item => item.id === 'X')
// let user = users.find(item => item.id === 'X')

// let arr = [1, 2, 11, 22, 111, 222]

// console.log(arr.concat([3, 4], 9))

// console.log(arr.indexOf(22))
// console.log(arr.includes(111))

// function doubleChar(str) {
//     //split string into an array
//     const newStr = str.split('')
//     const doubleStr = []
//     //iterate over it twice, returning i (2x) to a new array
//     newStr.forEach((item, i) => {
//         doubleStr.push(item, item)
//     })
//     //return new string
//     return doubleStr.join('')
// }

// doubleChar('abc')

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// const myArr = [6, 12, 9, 18, 5, 10]
// const yourArr = [2, 9, 12, 5, 10, 15]

// for (let i = 0; i < myArr.length; i ++) {
//     for (let j = 0; j < yourArr.length; j++) {
//         if (myArr[i] === yourArr[j]) {
//             console.log(`both arrays contain:` +myArr[i])
//         }
//     }
// }


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//    age: 30
// }
// console.log(person.firstName, person.age)

// const fruits = ['apples', ' oranges', 'pears']

// console.log(fruits.indexOf('pears'))

// for (let i = 1; i <= 10; i++) {
//     console.log(`for loop number: ${i}`)
// }

// let animals = ['dog', 'goat', 'cat', 'boar']

// for (let animal of animals) {
//     console.log(animal)
// }

// let pen = {}

// pen.color = 'blue'
// pen.brand = 'bic'
// pen.type = 'G2'

// console.log(pen)

// for (penEl in pen) {
//     console.log(pen[penEl])
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} * ${i} = ${i*i}`)
// }

// let i = 1
// while (i <= 10) {
//     console.log(`${i} * ${i} = ${i*i}`)
//     i++
// }

// let count = 0

// let countUp = () => {
//     count += 1
//     console.log(count)
// }

// countUp()
// countUp()
// countUp()
// console.log(count)


// const img = document.querySelector('img')


// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
//         img.src = (data.message)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// let li = document.createElement('li')
// li.textContent = 'blah blah'
// let ul = document.querySelector('ul')

// ul.appendChild(li)

// constuctor: 

// function MakeMonster(size, limbs, tail, teeth) {
//     this.size = size
//     this.limbs = limbs
//     this.tail = tail
//     this.teeth = teeth
//     this.roar = function() {
//         console.log('RAAWR')
//     }
//     this.specialATK = function() {
//         console.log('Energy Blast')
//     }
// }

// //class version: 

// class MakeMonster2 {
//     constructor(size, limbs, tail, teeth) {
//         this.size = size
//         this.limbs = limbs
//         this.tail = tail
//         this.teeth = teeth
//     }
//     roar() {
//         console.log('RAAWR!')
//     }
//     specialATK() {
//         console.log('Pew Pew Pew!')
//     }
// }


// const godzilla = new MakeMonster('Xtra-Large', 4, true, 'Too many to count')
// const kingKong = new MakeMonster2('Xtra-Large', 4, false, 'About 32')

// console.log(godzilla.roar())
// console.log(kingKong.specialATK())

// const li = document.createElement('li')
// li.textContent = 'hi'
// document.querySelector('ul').appendChild(li)

// let str = 'the panda was known for being absolutely adorable'

// console.log(str.replaceAll('adorable', 'Awesome!'))

// localStorage.setItem('bestFriend', 'SpongeBobSquarePants')
// let friend = localStorage.getItem('bestFriend', 'SpongeBobSquarePants')
// console.log(friend)

// let count = 0

// localStorage.getItem('count', count) 

// document.querySelector('.block').addEventListener('click', event => {
    
//     if (count !== 0) {
//         localStorage.setItem('count', count)
//     }
//     count +=1
//     localStorage.setItem('count', count)
//     console.log(event)
// })


