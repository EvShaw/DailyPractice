const today = new Date
console.log(today)


// res.render('index.ejs', {items: todoITems, left: itemsLeft})

// const removeExtras = (list, num) => {
//     // const count = {}
//     // const ans = []

//     // for(let el of list) {
//     //     if(count[el]) count[el] = count[el] + 1
//     //     else count[el] = 1
//     //     if(count[el] <= num) ans.push(el)

//     // }
//     // console.log(count)
//     // return ans

//     //refactor the above with filter: 

//     const count = {}

//     return list.filter( el => {
//         count[el] = (count[el] || 0) + 1
//         return count[el] <= num
//     })
// }

// console.log(removeExtras([1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6], 1))

// const allEquals = list => list.every(val => val === list[0])
// console.log(allEquals([1,1,3]))

// const senOrOpen = (data) => {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'))
// }

// console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))


// const removeDupes = str => [...str].filter((a, i) => a != str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with friend',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentists Appointment',
//         isCompleted: false
//     }
// ]

// console.log(todos.filter(el => el.id == 2))

// Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//         return defaultLocation;
//     }, 
//     set: function(value) {
//         if(!value.x || !value.y) 
//             throw new Error('invalid location')

//             defultLocation = value
//     }
// })

// app.get('/api/persons/:id', (req, res) => {
//     const id = req.params.id
//     const entry = persons.find(person => person.id == id)

//     if(entry) {
//         return res.json(entry)
//     } else {
//         return res.status(404).end()
//     }
// })

// const myArr = [6, 19, 20]
// const yourArr = [19, 81, 2]

// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < yourArr.length; j++) {
//         if (myArr[i] === yourArr[j]) {
//             console.log(`Both arrays contain ${myArr[i]} and ${yourArr[j]}`)
//         }
//     }
// }
// const codeA = 'a'.charCodeAt()

// const grid = n => {
//     if (n < 0) return null

//     const grid = []

//     for (let row = 0; row < n; row++) {
//         const cells = []
//         for (let cell = 0; cell < n; cell++) {
//             cells.push(String.fromCharCode(codeA + (row + cell) % 26))
//         }
//         grid.push(cells.join(' '))
//     }
//     return grid.join('\n')
// }
