
// const a = [1,4,9,16]
// console.log(a.map(Math.sqrt)))

// const a = [...Array(4)]
// const b = a.map((_, i) => i)
// const c = [...Array(4)].map((_, i) => i)
// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
// console.log(b)   //output: [ 0, 1, 2, 3 ]
// console.log(c)   //output: [ 0, 1, 2, 3 ]
// console.log(d)   //output: [ 0, 1, 2, 3 ]

// let count = 0
// let result = 0
// while(result < 12) {
//     result += 2
//     console.log(result)
// }

// function strCount(str, letter) {
//     let splitIt = str.toLowerCase().split('')
//     let count = 0

//     splitIt.forEach(ele => {
//         if (ele === letter) {
//             count++
//             return count
//         } else {
//             return 0
//         }
//     })
//     console.log(count)

// }

// const strCount2 = (str, letter) => str.split('').filter(x => x === letter).length

// var isAnagram = function (a, b) {
//     let test = a.toLowerCase().split('').sort().join('')
//     let original = b.toLowerCase().split('').sort().join('')
//     console.log(test)
//     console.log(original)

//     if(test === original) {
//         console.log(true)
//         return true
//     } else {
//         console.log(false)
//         return false
//     }
// }
// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//       }
//     }
//     return null
//   }
//   firstNonConsecutive([1,2,3,4,6,7,8])


//   const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }


// console.log(disemvowel("This website is for losers LOL!"))

// const onlyNums = list => {
//     return list.filter(num => Number(num))
// }
// console.log(onlyNums([1,2,'a','b']))
// console.log(onlyNums([1,'a','b',0,15]))
