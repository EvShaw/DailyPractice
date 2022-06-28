const today = new Date
console.log(today)

// const isPal = s => s.split('').reverse().join('') === s ? 'y' : 'n'
// console.log(isPal('racecar'))

// const MongoClient = require('monbodb').MongoClient

// const removeDupes = n => [...n].filter((a, i) => a !== n[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const remDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(remDupes('AAAABBBCCDAABBB'))

// function getfetch() {
//     fetch(urlHere) 
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))
// }

// async function fetchIt() {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
// }

// const myArray = [6, 10, 15, 23]
// const yourArray = [5, 11, 15, 24]

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if (myArray[i] === yourArray[j]) {
//             console.log(`${myArray[i]} and ${yourArray[j]} are the same!`)
//         }
//     }
// }

// process.env.PORT || PORT, () => {
//     console.log('server is running')
// }