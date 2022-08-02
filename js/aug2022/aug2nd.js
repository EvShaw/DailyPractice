const today = new Date
console.log(today)

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.fin(note => note.id === id)
//     response.json(note)
// })

// app.detete('/api/notes/:id', (req, res) => {
//     const id = Number(request.params.id)
//     notes = notes.fitler(note => note.id !== id)

//     res.status(204).end()
// })

// Math.max(...notes.map(n => n.id))

// app.listen(PORT, () => {
//     console.log(`server active on ${PORT}`)
// })

// app.get('/info', (req, res) => {
//     res.send('<h2>Title Here</h2>')
// })

// app.get('/api/persons/:id', (req, res) => {
//     const id = req.params.id
//     const entry = persons.find(person => person.id == id)

//     if(entry) return res.json(entry)
//     else return res.status(404).end()
// })

// let salaries = { John: 100, Ann: 160, Pete: 130 }

// let total = 0
// for(let prop in salaries) {
//     if(typeof salaries[prop] == 'number') {
//         total += salaries[prop]
//     }
// }

// console.log(total)

// let calculator = {
   
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b;
//     }
 
//  }
 
//  console.log(calculator.read())

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => note.id === id)
//     response.json(note)
//   })

//   app.delete('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
  
//     response.status(204).end()
//   })

//   app.listen(PORT, () => {
//     console.log(`server active on ${PORT}`)
// })

// const fruits = ['apple', 'pineapple', 'crabapple']

// for(let i = 0; i < fruits.length; i++) {
//     fruits[i] = fruits[i][0].toUpperCase() + fruits[i].slice(1)
// }

// console.log(fruits)

// let number = 21.2234562134267

// console.log(Math.round((number)*100)/100)

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))

// function roundBy(n, x = 5) {
//     while(n % x !== 0) n++
//     return n

// }

// console.log(roundBy(3))

// function deleteNth(arr, n) {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }


// function removeEx(arr, n) {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el) 
//     }
//     return ans
// }