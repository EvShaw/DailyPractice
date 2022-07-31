const today = new Date
console.log(today)


// Object.defineProperty(this, 'defaultLocation', {
//     get: function () {
//         return defaultLocation;
//     },
//     set: function (value) {
//         if (!value.x || !value.y)
//             throw new Error('Invalid location')

//         defaultLocation = value
//     }

// })

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('demofile.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

// console.log(btnArr)
// const keys = document.querySelector('.allButtons')

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

//     if (!target.matches('button')) {
//         return;
//     } else {
//         calculator.parseInput(value)
//         console.log(value)
//     }
//     console.log(event)
// })

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

// //const allEqual = arr => arr.every(val => val === arr[0]

// const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)

// console.log(getMiddle('testing'))

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb-connection-string', (err, client) => {
   
// })
// myUrl.searchParams.append('abc', '123')

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//     console.log('file written to...')
// })
// app.use(express.json())

// const itemCompleted = document.querySelectorAll('.item span.completed') 

// quotesCollection.findOneAndUpdate(
//     query, 
//     update, 
//     options
//  )
//     .then(result => { }
//     .catch(error => console.error(error))

// app.get('/', (req, res) => {
//     res.send('Hello World')
//  }
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);


// for (let line = '#######'; line.length > 0; line = line.slice(1)) {
//     console.log(line)
// }

// function squareOrSquareRoot(array) {
//     return array.map(x => {
//       const r = Math.sqrt(x);
//       return (r % 1 == 0) ? r : (x*x);
//     });  
//   }

// function squareOrSquareRoot(array) {
//     return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
//   }
