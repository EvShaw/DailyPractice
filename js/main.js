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

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

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

let schedule = {}

function isEmpty(obj) {
   for (let key in obj) {
       console.log(key)
   } 
   console.log(true)
}

isEmpty(schedule)