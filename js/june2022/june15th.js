const today = new Date
console.log(today)


// const cors = require('cors')
// app.use(cors())

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// for (let prop in menu) {
//     if (typeof menu[prop] === 'number') [
//         menu[prop] *= 2
//     ]
// }

// console.log(menu)

// const port = process.env.port || 8000

// fetch('httpsURLHERE')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
    
//     })
//     .catch(err => {
//         console.log(err)
//     })

// async function photoFetch(){
//     const res = await fetch('urlhere')
//     const data = await res.json()
//     console.log(data)
// }

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')

// })

// for(let i = '#'; i.length < 7; i+='#') {
//     console.log(i)
// }

// function sameCase(a, b){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'
//     if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
//     const checkCase = x => {
//       if(x === x.toLowerCase()) return 'lower'
//       if(x === x.toUpperCase()) return 'upper'
//     }
  
//     return checkCase(a) === checkCase(b) ? 1 : 0
//   }