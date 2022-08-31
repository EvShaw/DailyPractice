const today = new Date
console.log(today)


// const user = {
//     name: 'Evan', 
//     id: '2'
// }

// console.log(user)
// user.id = '5'
// console.log(user)
// Object.freeze(user)
// user.id = '3'
// console.log(user)

// const permElemements = ['ninja stars', 'factorio', 'ice cream']

// const removeSomeStuff = (list, protectedInfo) => {
//     return list.filter(el => !permElemements.includes(el))
// } 

// console.log(removeSomeStuff(['katana', 'ninja stars', 'sim city', 'stuffed bears']))

// console.log(testA())
// var testA = function () {
//     console.log('hoisting test')
// }
// console.log(testA())

// let str = 'Today is Wednesday and it is a great day!'
// let regex = /[A-Z]/g
// console.log(str.match(regex))


// console.log(String.fromCharCode(114))
// var obj = {
//     id: 42,
//     counter: function counter() {
//       setTimeout(() => {
//         console.log(this.id);
//       }, 1000);
//     },
//   };
//   console.log(obj.counter())

// const o = { 
//     p: 42, 
//     q: true };

// const { p, q } = o;

// console.log(p); // 42
// console.log(q); // true
// console.log(o)

// function sum3(x) {
//     return (y) => {
//         return (z) => {
//             return x + y + z;
//         };
//     };
// } 

// function factorial(num) {
//     if (num === 1) {
//         return num;
//     }
//     return num * factorial(num - 1);
// }
// console.log(factorial(4))

// class A {
//     display() {
//       console.log('A is invoked');
//     }
//   }

//   class B extends A {}

//   class C extends A {
//     constructor() {
//       super();
//     }

//     //overrides the display function of A and hence behaves differently
//     display() {
//       console.log('C is invoked');
//     }
//   }
//   var b = new B();
//   var c = new C();
//   b.display(); //output: :"A is invoked"
//   c.display(); //Output: "C is invoked"

// class Person {
//     #name = 'Nathan';

//     getName() {
//         return this.#name;
//     }

//     setName(name) {
//         this.#name = name;
//     }
// }

// function test() {
//     var map = {
//         m1: 12,
//         m2: 13,
//         m3: 14,
//         m4: 15,
//     };
//     console(map['m3']);
// }

// function bblSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // Last i elements are already in place
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             // Checking if the item at the present iteration
//             // is greater than the next iteration
//             if (arr[j] > arr[j + 1]) {
//                 // If the condition is true then swap them
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }

// function insertionSort(inputArr) {
//     let n = inputArr.length;
//     for (let i = 1; i < n; i++) {
//       // Choosing the first element in our unsorted subarray
//       let current = inputArr[i];
//       // The last element of our sorted subarray
//       let j = i - 1;
//       while (j > -1 && current < inputArr[j]) {
//         inputArr[j + 1] = inputArr[j];
//         j--;
//       }
//       inputArr[j + 1] = current;
//     }
//     return inputArr;
//   }

// const _mergeArrays = (a, b) => {
//     const c = [];
//     while (a.length && b.length) {
//       c.push(a[0] > b[0] ? b.shift() : a.shift());
//     }
//     // if we still have values, let's add them at the end of `c`
//     while (a.length) {
//       c.push(a.shift());
//     }
//     while (b.length) {
//       c.push(b.shift());
//     }
//     return c;
//   };

// const mergeSort = (a) => {
//     if (a.length < 2) return a;
//     const middle = Math.floor(a.length / 2);
//     const a_l = a.slice(0, middle);
//     const a_r = a.slice(middle, a.length);
//     const sorted_l = mergeSort(a_l);
//     const sorted_r = mergeSort(a_r);
//     return _mergeArrays(sorted_l, sorted_r);
//   };

// app.get('/', (req, res) => {
//     res.send('hi')
// })

// app.get('/', (req, reS) => {
//     reS.sendFile(__dirname + '/index.html')
// })

// let nums = [42, 19, 77, 33, 57]
// console.log(nums.reduce((p, c) => p + c, 0))

// const getItem = await db.collection('nameOfCollectionHere').find().toArray()

// let sum = 1
// let count = 0
// while(count < 10) {
//     sum *= 2
//     console.log(sum)
//     count++
// }

// for (let i = '#'; i.length < 7; i += '#') {
//     console.log(i)
// }

// const a = [2,4,6,8]
// const newA = a.map((_, i, arr) => arr[arr.length - i - 1])
// console.log(newA)

// console.log(newA[0].toString().repeat(22))


