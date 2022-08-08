const today = new Date
console.log(today)

// const allEqual = n => n.every(el => el === n[0])

// console.log(allEqual([2, 3, 3, 3, 3]))

// const removeMid = str => str.slice((str.length-1)/2, str.length/2+1)
// console.log(removeMid('Mid'))

// const roundBy = (num, x = 5) => {
//     while(num % x !== 0) num++
//     return num
// }

// console.log(roundBy(13))

// response.render('index.ejs', {info: nameList})

// yUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', err => {
//     if (err) throw err
//     console.log('file written to...')
// })

// path.extname(__filename)

// const removeADJ = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeADJ('AAAABBBCCDAABBB'))

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
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

// const isSquared = n => Math.sqrt(n) % 1 === 0


// const number = array => { //create function, taking an array as its parameter
//     return array.map((line, index) => { //return the mapped array, looking for line and index
//         return (index + 1) + ": " + line; //incerment index by 1 with each element and concatenate a semi colon and white space, concatenated with line, which is each element in the map. 
//     });//close the return map
// } //close the funciton

// refactor above in a single line: 
// // let number = a => a.map((v, i) => `${i + 1}: ${v}`)
