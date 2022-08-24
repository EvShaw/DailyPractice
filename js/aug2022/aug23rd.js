const today = new Date
console.log(today)


// const duplicate = data => {
//     return data.concat(data)
// }

// console.log(duplicate([1,2,3,4,5]))

// let username = ''
// let defaultName = 'Stranger'

// if(!username) {
//     username = defaultName
// } else {
//     defaultName = username
// }

// console.log(username) 

// let board = ''
// let size = 8

// for(let i = 0; i < size; i++) {
//     for(let j = 0; j < size; j++) {
//         if((i + j) % 2 == 0) board += ' '
//         else board += '#'
//     }
//     board += '\n'
// }
// console.log(board)

// const x = [1,2,3,4]
// const newX = x.map(el => el += 1)
// console.log(newX)

// const a = [1,4,9,16, 25, 36, 49, 64, 81]
// const newA = a.map(Math.sqrt)
// console.log(newA)

// function isolateIt(arr) {

//     return arr.map(v => {
//         if (v.length % 2 == 0) return v.slice(0, v.length / 2) + '|' + v.slice(v.length / 2)
//         if (v.length % 2 !== 0) return v.slice(0, v.length / 2) + '|' + v.slice((v.length / 2) + 1)
//     })

// }

// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde","fghij"]))
// console.log(isolateIt(["1234","56789"]))

// const a = [2,4,6,8]
// const newA = a.map((_, i, arr) => arr[arr.length - i - 1])
// console.log(newA)

// function geese(birds) {
//     const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']

//     return birds.filter(b => !geese.includes(b))

// }

// console.log(geese(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// const doubleIt = arr => arr.map(el => el += el)
// console.log(doubleIt([1, 2, 3]))

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => note.id === id)
//     response.json(note)
//   })

// const doubleWithMap = str => str.split('').map(el => el + el).join('')
// console.log(doubleWithMap("String"))

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// const removeEx = (list, num) => {
//     const count = {}
//     const ans = []

//     for (let el of list) {
//         if (list[el]) list[el] = list[el] + 1
//         else list[el] = 1
//         if (list[el] <= num) ans.push(el)
//     }

//     return ans
// }

// const filterOut = (arr, x) => {
//     const cache = {}

//     return arr.filter( n => {
//         cache[n] = (cache[n] || 0) + 1
//         return cache[n] <= x
//     })
// }

// console.log(filterOut('AAAABBBCCDAABBB'))

// const roundTo = n => {
//     while (n % 5 != 0) n++
//     console.log(n)
// }

// roundTo(3)

// const getmid = str => str.slice((str.length-1)/2, str.length/2+1)

// console.log(getmid('mid'))

