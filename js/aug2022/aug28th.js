const today = new Date
console.log(today)


// const codeA = 'a'.charCodeAt()

// console.log(codeA)

// const grid = num => {
//     if (num < 0) return null

//     const grid = []
//     for(let i = 0; i < num; i++) {
//         const cells = []

//         for (let j = 0; j < num; j++) {
//             cells.push(String.fromCharCode(codeA + (i + j) % 26))
//         }
//         grid.push(cells.join(''))
//     }
//     return grid.join('\n')
// }

// console.log(grid(26))

// let str = 'racecar'
// const pali = s => s.split('').reverse().join('') === s
// console.log(pali(str))


// let sentence = 'The itsy bitsy spider went up the water sprout!'
// let regex = /[A-Z]/g;
// console.log(sentence.match(regex))

// let sentence = 'The itsy bitsy spider went up the water sprout!'
// let regex = /[A-Z]/g
// console.log(sentence.match(regex))

// const colors = ['yellow', 'orange', 'red', 'purple', 'blue', 'green']

// const warmColorsOnly = list => {
//     const warmColors = ['red', 'yellow', 'orange']

//     return list.filter(warm => !warmColors.includes(warm))

// }

// console.log(warmColorsOnly(colors))

// const swapOut = str => {
//     const pairs = {'Kevin' : 'Evan'}

//     return str.split(' ').map( el => pairs[el]).join('')
// }

// console.log(swapOut('Kevin'))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// console.log(words.filter(word => word.length > 6))

// let str = 'my name is Evan'
// console.log(str.split('').map(el => el + el).join(''))

// const retrieveAll = await db.collection('collectionNAme').find().toArray()

// const user = {
//     name: 'John',
//     id: 2
// }

// let clone = {}

// for(let prop in user) {
//     clone[prop] = user[prop]
// }

// console.log(clone)

// let clone2 = Object.assign({}, user)
// console.log(clone2)

// const parityIs = n => n % 2 == 0 ? 'Even' : 'Odd'
// console.log(parityIs(21))

// app.get('/api/notes/:id', (req, res) => {
//     const id = req.params.id

//     const note = notes.find(note => note.id === id)
//     res.join(note)
// })
