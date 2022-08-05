const today = new Date
console.log(today)

// let username = ''
// let defaultName = username || 'Stranger'

// if(username) defaultName = username;
// else username = defaultName

// console.log(username)
// console.log(defaultName)

// res.json(bindingNameHere)

// infoCollection.find({propName:valueName}).toArray()
//     .then(results => {
//         console.log(results)
//         Response.json(results)
//     })

// const item = document.querySelectorAll('.item span')

// fs.mkdir(path.join(__dirname, '/test'), { }, err => {
//     if(err) throw err 
//    console.log('folder created...')
// })

// parseInt(arr.join(''), 2)

// app.get('/', (req, res) =>{
//     res.sendFile(__dirname + '/idnex.html')
// })

// const removeEx = (list, n) => {
//     const count = {}
//     const ans = []

//     for(let el of list) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans.sort()
// }

// console.log(removeEx([2,2,2,3,3,3,1,1,1,2,2,2,4,4,5,5,4,5,4,5], 1))
// //convert to use filter method instead
// const removeExWithFilter = (list, n) => {
//     const cache = {}
//     return list.filter(x => {
//         cache[x] = (cache[x] || 0) + 1
//         return cache[x] <= n
//     }).sort()
// }

// console.log(removeExWithFilter([2,2,2,3,3,3,1,1,1,2,2,2,4,4,5,5,4,5,4,5], 1))

// const isSquares = n => Math.sqrt(n) % 1 === 0

// console.log(isSquares(25))

// console.log([2,2,2,3,3,3,1,1,1,2,2,2,4,4,5,5,4,5,4,5].fill('!', 10, 11))

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }



// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))

// app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => console.error(err))
// })

// const isSquared = n => Math.sqrt(n) % 1 == 0 ? true: false

// console.log(isSquared(25))
// console.log(isSquared(26))

// app.get('/info', (req, res) => {
//     res.send('<h2>titleHere</h2>')
// })

// app.delete('api/persons/:id', (req, res) => {
//     const id = +req.params.id
//     persons = persons.filter(entry => entry.id == id)
//     res.status(204).end()
// })

// db.collection('rappers').insertOne({jasper:'vip;})
//    .then(result => {

    // app.listen(PORT, () => {
    //     console.log(`server active on ${PORT}`)
    // })

    // app.delete('/api/notes/:id', (request, response) => {
    //     const id = Number(request.params.id)
    //     notes = notes.filter(note => note.id !== id)
      
    //     response.status(204).end()
    //   })