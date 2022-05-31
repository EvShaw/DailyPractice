console.log('May 31st, 2022')


// let thisVar = 'temp'

// function checkVar(variable) {
//     if(variable) {
//         return true
//     } return false
// }

// console.log(checkVar(thisVar))
// console.log(thisVar.split('').reverse().join(''))

// localStorage.clear()

// let myTeam = ['Charizard', 'Greninga', 'Volteon', 'Dargapult', 'Kabutops', 'Badoof']


// localStorage.setItem('My Team', myTeam)

// console.log(localStorage.getItem('My Team'))

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// ObjectNameHere.prototype.propertyNameHere = 'valueHere'

// let myTeam = ['Charizard', 'Greninga', 'Volteon', 'Dargapult', 'Kabutops', 'Badoof']
// let yourTeam = ['ditto']

// let ourTeam = myTeam.concat(yourTeam, 'Pikachu')

// console.log(ourTeam)

// const calculator = {
//    read(){
//        this.a = +prompt('a', 0)
//        this.b = +prompt('b', 0)
//    },
//    sum(){
//        return this.a + this.b
//    }, 
//    mul(){
//        return this.a * this.b
//    }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// const newMenu = function(obj){
//     for(let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop]*=2
//         }
//     }
//     console.log(menu)
// }
// console.log(newMenu(menu))

// function isEmpty(obj) {
//     if(obj){
//         console.log('here')
//     } else {
//         console.log('nothing')
//     }
// }

// let schedule = {};
// isEmpty()
// alert( isEmpty(schedule) ); // true

//  schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function min(a, b){
    a < b ? a : b
}