const today = new Date
console.log(today)


// const allEqual = arr => arr.every(val => val === arr[0])

// const allEqual = arr => {
//     return arr.every(val => val === arr[0])
// }

// console.log(allEqual[2, 2, 2, 2])

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// console.log(words.filter(word => word.length > 6))

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

// const roundTo = n => {
//     while(n % 5 !== 0) n++
//     console.log(n)
// }
// console.log(roundTo(3))

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])

// console.log(removeDupes('AAAABBBCCDAABBB'))


// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', err data) => {
//     if (err) throw err
//     console.log(data)
// }

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

// const todoItems = await db.collection('todos').find().toArray()


