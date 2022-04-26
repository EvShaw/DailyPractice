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

for (let i = 1; i <= 10; i++) {
    console.log(`for loop number: ${i}`)
}