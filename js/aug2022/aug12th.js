const today = new Date
console.log(today)

// myUrl.pathname

// app.get('/', (reqm res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// const removeEx = (list, n = 1) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// } 

// console.log(removeEx([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6],2))

// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

// const isSquare = function (n) {
//     return Math.sqrt(n) % 1 === 0
//  }

//  isSquare(26)

// quotesCollection.findOneAndUpdate(
//     query,
//     update,
//     options
// )
//     .then(result => { }
//     .catch (error => console.error(error))

// app.get('/', (req, res) => {
//     res.send('')
// })

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// const MongoClient = require('mongodb').MongoClient

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3))

// async function getPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }

// getPhoto()

// app.delete('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
  
//     response.status(204).end()
//   })
// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => note.id === id)
//     response.json(note)
//   })
