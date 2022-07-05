const today = new Date
console.log(today)

// const isPalin = str => {
//   return str.split('').reverse().join('') === str
// }
// console.log(isPalin('racecar'))

// const generateID = () => {
//     const maxID = persons.length > 0
//     ? Math.max(...persons.map(n => n.id))
//     : 0
//     return maxID +1
// }

// const MongoClient = require('mongodb').MongoClient

// path.dirname(__filename)

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))


// for (let todo of todos*) {
//     console.log(todo.text)
//  }
 
// localStorage.clear()

// async function nameHere() {
//     const res = await fetch(urlHere)
//     const data = res.json()
//     console.log(data)
// }

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });

// let clone = {} //the new empty object
// //let's copy all user properties into it: 
// for (let key in user) {
//     clone[key] = user[key]
// }

// const getMiddle = n => n.slice((n.length-1)/2, n.length/2+1)
// console.log(getMiddle('testing'))


// data.subclasses.forEach( obj => {
//     console.log(obj.name)
//     //create an li
//     const li = document.createElement('li')
//     //add text to li
//     li.textContent = obj.name
//     //apend li to the ul
//     document.querySelector('ul').appendChild(li)


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

for(let key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] *= 2
    }
}
console.log(menu)