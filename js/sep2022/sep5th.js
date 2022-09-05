document.querySelector('#today').textContent = new Date

// const persistence = num => {
//     let times = 0

//     num = num.toString()

//     while(num.length>1) {
//         times++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return times
// }

// console.log(persistence(39))

// const breakDown = num => {
//     let count = 0
//     num = num.toString()
//     while(num.length > 1) {
//         count++
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString()
//     }
//     return count
// }

// console.log(breakDown(39))


// function DNAStrand(dna) {
//     const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// const moveToTheEndOfArr = (data, toTheBack) => {
//     return data.filter(a => a !== toTheBack).concat(data.filter(a => a === toTheBack))
// }

// const moveToTheEndOfArr = (data, movedEle) => {
//     return data.filter(a => a !== movedEle).concat(data.filter(a => a === movedEle))
// }

// console.log(moveToTheEndOfArr(['a', 'b', 1,1,2,3,1,2,3,5,6,7,4,2,false, 2,'a', 'z'], 'b'))

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

// const isolateIt = data => {
//     return data.map(el => {
//         if(el.length % 2 == 0) {
//            return el.slice(0, el.length/2) + '|' + el.slice(el.length/2)
//         }
//         if(el.length % 2 != 0) {
//             return el.slice(0, el.length/2) + '|' + el.slice((el.length/2) + 1)
//         }
//     })
// }
// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde","fghij"]))
// console.log(isolateIt(["1234","56789"]))

const a = [...Array(4)]
const b = a.map((_, i) => i)
const c = [...Array(4)].map((_, i) => i)
const d = Array.prototype.map.call(a, (_, i) => i)
console.log(a)  
console.log(b)  
console.log(c)  
console.log(d)   
