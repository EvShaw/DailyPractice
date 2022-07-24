const today = new Date
console.log(today)
// npm install mongodb --save
// const MongoClient = require('mongodb').MongoClient

// const color = ['black', 'purple', 'white']
// const words = ['black', 'purple', 'white']

// for (let i = 0; i < color.length; i++) {
//     color[i] = color[i][0].toUpperCase() + color[i].slice(1)
// }

// console.log(color)

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }

//   console.log(words)

//   const choice = document.querySelector('input').value.replaceAll(' ', '-') 
// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// function persistence(num) {
//     let times = 0;
//     num = num.toString();
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
//     return times;
// }

// let test = ['a', 'a', 'b', 'c']
// console.log(test.fill('!', 2))

// function deleteNth(arr, n) {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// filter way:
// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// let user = {
//     name: "john", 
//     age: 30
// }

// let clone = Object.assign({}, user) 

// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
//     console.log('clicked')
//     if(click.target.classList.contains('rose')){
//         document.querySelector('#nikki').classList.toggle('hidden')
//     }else{
//         alert("Wrong!");
//     }
// }

// process.env.PORT || PORT, () => {
//     console.log('the server is now running...
// }