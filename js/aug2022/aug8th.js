const today = new Date
console.log(today)


// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodbStringHere', (err, client) => {

// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'index.html')

// })

// app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => console.error(err))
// })

// const persistence = num => {
//     let times = 0
//     num = num.toString()
//     while (num.length > 1) {
//         times++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// const getMid = str => str.slice((str.length-1)/2, str.length/2+1)
// console.log(getMid('test'))

// const removeEx = (list, num) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }
//     return ans
// }

// console.log(removeEx([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4], 1))

// //refactor removeEx with filter method: 

// const removeExWithFilter = (list, num) => {
//     const cache = {}

//     return list.filter(n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= num
//     })

// }

// console.log(removeExWithFilter([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4], 1))

// const isSquared = n => Math.sqrt(n) % 1 == 0

// console.log(isSquared(25))

// app.get('/', (req, res) => {
//     //code here
// })

// data.map(items => items.valueNameHere)

// app.set('view engine', 'ejs')

// res.render('index.ejs', {info: nameList})

// app.listen(process.env.PORT || PORT, () => {
    // console.log(`Server is running on ${PORT}`)
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// const colors = ['purple', 'black', 'green', 'blue', 'red']

// for (let i = 0; i < colors.length; i++) {
//     colors[i] = colors[i][0].toUpperCase() + colors[i].slice(1)
// }

// console.log(colors)

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
//   }
  
//   console.log(power(4));
  
//   console.log(power(2, 6));

// let board = ''
// let size = 8

// for(let i = 0; i < size; i++) {
//     for(let j = 0; j < size; j++) {
//         if((i + j) % 2 == 0) board += ' '
//         else board += '#'
//     }
//     board += '\n'
// }

// console.log(board)

// let user = {
//     name: "John", 
//     age: 30
// }

// let userTwo = Object.assign({}, user)
// console.log(userTwo)

// let userTwoClone = {}

// for(let prop in userTwo) {
//     userTwoClone[prop] = userTwo[prop]
// }

// console.log(userTwoClone)

// async function getPhoto() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await res.json();
//     console.log(data.message);
// }
// getPhoto()

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
//         document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// app.listen(PORT, () => {
//     console.log(`server active on ${PORT}`)
// })

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);

// console.log(result);

