const today = new Date
console.log(today)

// console.log('hi')

// const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)
// const getMiddle = s => s.slice((s.lenght-1)/2, s.length/2+1)

// console.log(getMiddle('testing'))

// const removeSomething = s => s.replace(/!/g, "")

// console.log(removeSomething('hi!'))

// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {
   
// })

// const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
// return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
// const MongoClient = require('mongodb').MongoClient

// const entry = persons.find(entry => entry.id == id)

// let username = '';
// let defaultName;

// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }

// console.log(defaultName); // Prints: Stranger

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')
// })

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//   fs.readFile('demofile.html', (err, data) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(data)
//     res.end()
//   })
// }).listen(8000)

// function isEmpty(obj) {
//     for (let key in obj) {
// // if the loop has started, there is a property return false;
//     }
//     return true;
// }