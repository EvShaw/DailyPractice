console.log('May 14th 2022')



// const colors = ['red', 'blue', 'green', 'yellow']

// for (let col of colors) {
//     console.log(col)
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// const doubleUp = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     }
// }

// doubleUp(menu)
// console.log(menu)

// let user = {
//     name: "John",
//      age: 30,
//      isAdmin: true
// };

// for(let obj in user) {
//     console.log(user[obj])
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 }
// let sum = 0
// for (let key in salaries) {

//     console.log(sum += salaries[key])
// // }

// let count = 0;

// function counter(){
//     count++
// }

// counter()
// counter()
// counter()

// console.log(count)

// const getFetch = function(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }  

// getFetch()

// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     get name() {
//         return this._name
//     }
// }

const user = users.find(item => item.id == 2)