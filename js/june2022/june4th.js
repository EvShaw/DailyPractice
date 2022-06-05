console.log('June 4th')

// let username = '';
// let defaultName;

// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }

// console.log(defaultName); 

// how could we simplify this: 

// let username = '';
// let defaultName = username || 'Stranger';

// console.log(defaultName);

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//       }
//     }
//     return null
//   }
//   firstNonConsecutive([1,2,3,4,6,7,8])

// 1)
//     function makeNegative(num) {
//         // Code?
//         if (Math.sign(num) === num*-1 || num === 0) {
//             return num
//             } else {
//               return num * -1
//             }
       
//       }
// 2)
//       function makeNegative(num) {
//         return num < 0 ? num : -num;
//       }

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//       if (arr[i] + 1 !== arr[i + 1]) {
//         return arr[i + 1]
//       }
//     }
//     return null
//   }
//   firstNonConsecutive([1,2,3,4,6,7,8])

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

// function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;