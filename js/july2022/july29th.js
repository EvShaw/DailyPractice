const today = new Date
console.log(today)

// const palindrome = str => str.split('').reverse().join('') === str ? 'yes' : 'no'
// console.log(palindrome('racecar'))

// let username = ''

// let defaultName = 'Stranger'

// if(username) {
//     defaultName = username
// } else {
//     username = defaultName;
// }

// console.log(username)

// let username = ''
// let defaultName = username || 'Stranger'

// console.log(defaultName)

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// db.collection('rappers').insertOne({jasper:'vip;})
//    .then(result => {

// document.getElementById('idName').onclick = functionName

// function functionName() {
//     document.querySelector('body').style.backgroundColor = 'color'
// }

//localStorage.setItem('bestFriend', 'Bob')

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// function swapIt(str) {
//     const pairs = {'e':'s','v':'h', 'a':'a', 'n': 'w'}
//     return str.split('').map( v => { return pairs[v]})[0].toUpperCase() + str.split('').slice(1).map( v => { return pairs[v]}).join('')
// }

// console.log(swapIt('evan'))

// function roundByFive(n, x = 5) {
//     while(n % x !== 0) n++
//     return n

// }

// console.log(roundByFive(13, ))

// let test = ['a', 'a', 'b', 'c']
// console.log(test.fill('!', 2))

// const allEqual = arr => arr.every(val => val === arr[0])

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))

// const itemCompleted = document.querySelectorAll('.item span.completed') 

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }

// app.get('/', (req, res) => {
//     res.send('Hello World')
//  }