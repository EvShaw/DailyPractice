const today = new Date
console.log(today)

// for (let i = "#"; i.length < 8; i += '#') {
//     console.log(i)
// }
// console.log('########')

// for (let i = '#######'; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }

// inputNameHere.value.replaceAll('-', ' ').replace('.', '').toLowerCase()

// user.find(item => item.id == 2)

// const anObject = {
//     myProp: 2
//   };

// const nextObj = Object.create(anObject)

// console.log(nextObj)

// const anotherNext = Object.create(nextObj)

// console.log(anObject)

// const http = require('http')
// const fs = require('fs')
// http.createServer((request, responst) => {
//     fs.readFile('demofile.html', (err, data) => {
//         responst.writeHead(200, {'Content-type':'text/html'})
//         responst.write(data)
//     })
// }).listen(8000)

// const pen = {
//     brand: 'bic', 
//     color: 'blue', 
//     style: 'ballpoint'
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let sum = 0

// for(key in salaries) {
//     sum += salaries[key]
// }

// console.log(sum)

//clearfix:

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
//         document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

// const vowels = 'aeiou'

// function removeVowels(str) {
//     return str
//       .split('')
//       .filter(letter => !vowels.includes(letter.toLowerCase()))
//       .join('');
//   }

// console.log(removeVowels("This website is for losers LOL!"))
