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
