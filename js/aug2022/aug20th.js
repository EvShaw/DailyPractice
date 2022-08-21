const today = new Date
console.log(today)

// const a = [...Array(4)]
// const b = a.map((_, i) => i)
// const c = [...Array(4)].map((_, i) => i)
// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
// console.log(b)   //output: [ 0, 1, 2, 3 ]
// console.log(c)   //output: [ 0, 1, 2, 3 ]
// console.log(d)   //output: [ 0, 1, 2, 3 ]

// const a = [2, 4, 6, 8]
// const newA = a.map((el, ind, arr) => arr[arr.length - ind - 1])
// console.log(newA)

// function isolateIt(arr) {
//     return arr.map(v => {
//         if (v.length % 2 == 0) { return v.slice(0, v.length / 2) + '|' + v.slice(v.length / 2) };
//         if (v.length % 2 !== 0) { return v.slice(0, v.length / 2) + '|' + v.slice((v.length / 2) + 1) };
//     })
// }


// console.log(isolateIt(["abcd", "efgh"]))
// console.log(isolateIt(["abcde", "fghij"]))
// console.log(isolateIt(["1234", "56789"]))

// let result = 0
// let sum = 0
// for(let i = 0; i < 10; i + 1) {
//     sum += i
//     console.log(sum)
// } 

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


// filter way:
// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }
// const allEqual = arr => arr.every(val => val === arr[0]

// const removeExclamationMarks = s => s.replace(/!/g,"");