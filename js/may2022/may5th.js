console.log('May 5th 2022')

// function square(n) {
//    console.log(Math.sqrt(n) % 1 === 0)
// }


// square(26)


// const square2 = n => Math.sqrt(n) % 1 === 0

// console.log(square2(25))

// let user = {
//    name: "John", 
//    age: 30
// }

// let clone = {}

// for (let key in user){
//    clone[key] = user [key]
// }
// clone.name = 'Frank'
// console.log(clone)
// console.log(user)

// let menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
//  };

//  function mulNums(obj) {
//     for (let nums in obj) {
//        if (typeof obj[nums] == 'number'){
//           return obj[nums] *=2
//        }
//     }

//  }

//  mulNums(menu)
//  console.log(menu)

// //  function multiplyNumeric(obj) {
// //    for (let key in obj) {
// //        if (typeof obj[key] == 'number') {
// //             obj[key] *= 2;
// //        }
// //    }
// // }

// // multiplyNumeric(menu)
// // console.log(menu)
// function checkAge(age) {
//    // if (age > 18) {
//    //     return true;
//    // }
//    // return confirm ('Did parents allow this?');

//    // age > 18 ? true : confirm('Did parents approve?')

//    age > 18 || confirm('parents')
// }


// const todos = [
//    {
//       id: 1,
//       text: 'Take out trash',
//       isCompleted: true
//    },
//    {
//       id: 2,
//       text: 'meeting with friend',
//       isCompleted: true
//    },
//    {
//       id: 3,
//       text: 'Dentists Appointment',
//       isCompleted: false
//    }
// ]

// // const todoCompleted = todos.filter(function (todo) {
// //    return todo.isCompleted === true;
// // });

// const todoCompleted = todos.filter( function( todo ) {
//    return todo.isCompleted === false
// })


// const todoText = todos.map(function(todo) {
//    return todo.isCompleted;
// });

// console.log(todoCompleted);
// console.log(todoText);


// const anObject = {
//    myProp: 2
//  };

//  const anotherObject = anObject

// //  const yetAnotherOne = anotherObject

// let num = 123

// if (num >= 0 || num < 100) {
//    console.log('not in range')
// }

// const li = document.createElement('li')
// li.innerContent = 'Awesome'

// document.querySelector('ul').appendChild(li)

// fetch('https://dog.ceo/api/breeds/image/random') 
//    .then(res => res.json())
//    .then(data => {
//       document.querySelector('img').src = data.message
//    })
//    .catch(err => {
//       console.log(err)

//    })

abc123.reduce((acc, c) => acc + +c, 0)