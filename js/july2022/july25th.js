const today = new Date
console.log(today)

// async function photo() {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data.message)
// }
// photo()

// const btn = document.querySelector('.btn')

// btn.addEventListener('click',  (e) => {
//   e.preventDefault( ); 
//   console.log('click');
// }); 

// const anObject = {
//     myProp: 2
// };

// const anotherObject = Object.create(anObject)
// const yetAnotherObject = Object.create(anotherObject)
// console.log(anObject)
// console.log(anotherObject)
// console.log(yetAnotherObject)

// const inputData = document.querySelector('#IdHere')
// inputData.value.replaceAll(' ', '-').replaceAll('.', '').toLowerCase()

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', err data) => {
//     if (err) throw err
//     console.log(data)
// }

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMid('next'))

// const str = 'OMG! Pandas are the best!'

// console.log(str.replaceAll(/!/g, '?!'))

// function swapOut(data) {
//     const pairs = {'e': 's', 'v': 'h', 'a':'a', 'n':'w'}

//     return data.split('').map( v => {return pairs[v]}).join('')
// }

// console.log(swapOut('evan'))

// function removeExtra(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtra([1,1,1,2,2,2,3,3,3,1,1,1,2,2,2,3,3,3], 1))

// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongodb-connection-string', (err, data) {
//     //code here/
// })

// const toTheTenth = n => Math.pow(n, 10)
// console.log(toTheTenth(2))

// let result = 1
// let counter = 0
// while(counter < 10) {
//     counter++
//     result *= 2
//     console.log(result)
// }

