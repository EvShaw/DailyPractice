const today = new Date
console.log(today)


// var obj = {
//     id: 42,
//     counter: function counter() {
//         setTimeout(() => {
//             console.log(this.id);
//         }, 1000);
//     },
// };

// const fizzBuzz = (num = 100) => {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz')
//         else if (i % 3 == 0) console.log('Fizz')
//         else if (i % 5 == 0) console.log('Buzz')
//         else console.log(i)
//     }
// }

// fizzBuzz()

// let str = 'Today is Tuesday!'

// console.log(str.replace(/!/g, '?'))

// const roundBy = num => {
//     while(num % 5 != 0) num++
//     return num
// } 

// console.log(roundBy(21))

// const removeExtras = (list, num) => {
//     const count = {}
//     const ans = []

//     for (let el of list) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= num) ans.push(el)
//     }
//     return ans
// }

// const removeExtras = (list, num) => {
//     const count = {}

//     return list.filter(n => {
//         count[n] = (count[n] || 0) + 1
//         return count[n] <= num
//     })
// }

// console.log(removeExtras([2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 9], 1))

// const removeDupes = list => [...list].filter((el, i) => el !== list[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is runngin on port: ${PORT}`)
// })

// const choice = document.querySelector('input').value.replaceAll(' ', '-').replaceall('.', '').toLowerCase()


// let bestColors = ['green', 'blue', 'yellow', 'black']
// bestColors.forEach(el => console.log(el))

// const isolateIt = list => {
//     return list.map(el => {
//         if(el.length % 2 == 0) return el.slice(0, el.length/2) + "|" + el.slice(el.length/2)

//         if(el.length % 2 != 0) return el.slice(0, el.length/2) + "|" + el.slice((el.length/2)+1)
//     })
// }
// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde","fghij"]))
// console.log(isolateIt(["1234","56789"]))

// const a = [...Array(4)]
// const b = a.map((_, i) => i)
// const c = [...Array(4)].map((_, i) => i)
// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
// console.log(b)   //output: [ 0, 1, 2, 3 ]
// console.log(c)   //output: [ 0, 1, 2, 3 ]
// console.log(d)   //output: [ 0, 1, 2, 3 ]

// const a = [2,4,6,8]
// const aReversed = a.map((el, i, arr) => arr[arr.length-i-1])
// console.log(aReversed)
// const x = [1,2,3,4]
// const newX = x.map(el => el + 1)
// console.log(newX)

