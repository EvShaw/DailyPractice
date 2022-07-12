const today = new Date
console.log(today)

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
//     if (err) throw err
//     console.log('file written to...')
// })

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "I love node js", err => {
//     if (err) throw err
//     console.log('file writen to")
// })

// fs.mkdir(path.join(__dirname, '/test'), { }, err => {
//     if(err) throw err 
//    console.log('folder created...')
// })

// const iExists = n => {
//     if(n) {
//         return 'I exist!'
//     }
// }

// let myVariable = ''

// console.log(iExists(myVariable))

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if((i + j) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }

// console.log(board)

// quotesCollection.findOneAndUpdate(
//     query, 
//     update, 
//     options
//  )
//     .then(result => { }
//     .catch(error => console.error(error))

// quotesCollection.findOneAndUpdate(query, update, options)
//     .then(result => {})
//     .catch(err => console.error(err))

// const generateID = () => {
//     const maxID = persons.length > 0
//     ? Math.max(...persons.map(n => n.id))
//     : 0
//     return maxID +1
// }

// let devQ = 'I am looking for a jr. dev position'
// console.log( devQ.replaceAll('jr. dev', 'software engineering'))

// process.env.PORT || PORT, () => {
//     console.log('the server is running')
// }

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)
const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

console.log(getMid('Testing'))