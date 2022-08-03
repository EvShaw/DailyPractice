const today = new Date
console.log(today)

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => note.id === id)
//     response.json(note)
// })

// app.delete('/api/notes/:id', (req, res) => {
//     const id = Number(reqesut.params.id)
//     notes = notes.filter(note => note.id !== id)

//     res.status(204).end()
// })

// app.get('/api/persons/:id', (req, res) => {
//     const id = req.params.id
//     const entry = persons.find(person => person.id == id)

//     if(entry) return res.json(entry)
//     else return res.status(404).end()
// })

// localStorage.setItem('friend', 'Bob')

// app.listen(PORT, () => {
//     console.log(`server active on ${PORT}`)
// })

// app.get('/info', (req, res) => {
//     const currentDate = new Date
//     res.send(`<h2>Title Here</h2>`)
// })


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

// app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body)
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => console.error(err))
// })

// function persistence(num) {
//     let times = 0
//     num = num.toString()
//     while(num.length > 1) {
//         times++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// const removeExt = (arr, n) => {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el_) 
//     }
//     return ans
// }

// function swapIt(str) {
//     const pairs = {'e':'s', 'v':'h', 'a':'a', 'n':'w'}

//     return str.split('').map( v => {return pairs[v]})[0].toUpperCase() + str.split('').map(v => {return pairs[v]}).slice(1).join('')
// }

// console.log(swapIt('evan'))

// const allEquals = arr => arr.every(val => val === arr[0])
// console.log(allEquals([2,2,2]))

// const itemCompleted = document.querySelectorAll('.item span.completed') 

// app.get('/', (req, res) => {
//     res.send('Hello World')
//  }

// let board = ''
// let size = 8

// for (let i = 0; i < size; i++) {
//     for (j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) board += ' '
//         else board += '#'
//     }
//     board += '\n'
// }
// console.log(board)

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

