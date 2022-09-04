// const morningRoutine = {
//     value: 'Make Bed',
//     previous: null,
//     next: {
//         value: 'Drink Tea',
//         previous: `<REFERENCE TO NODE MAKE BED>`,
//         next: {
//             value: 'Brush Teeth',
//             previous: `<REFERENCE TO NODE DRINK TEA>`,
//             next: null,
//         },
//     },
// };

// const _mergeArrays = (a, b) => {
//     const c = []

//     while (a.length && b.length) {
//         c.push(a[0] > b[0] ? b.shift() : a.shift())
//     }

//     while(a.length) {
//         c.push(a.shift())
//     }
//     while(b.length) {
//         c.push(b.shift())
//     }
//     return c
// }

// const mergeSort = a => {
//     if(a.length < 2) return a;
//     const middle = Math.floow(a.length/2);
//     const a_l = a.slice(0, middle);
//     const a_r = a.slice(middle, a.length)
//     const sorted_l = mergeSort(a_1)
//     const sorted_r = mergeSort(a_r);

//     return _mergeArrays(sorted_1, sorted_r)
// }

// class A {
//     display() {
//         console.log('A is invoked');
//     }
// }

// class B extends A { }

// class C extends A {
//     constructor() {
//         super();
//     }

// display() {
//     console.log('C is invoked');
//   }
// }
// var b = new B();
// var c = new C();
// b.display(); //output: :"A is invoked"
// c.display(); //Output: "C is invoked"

// function factorial(num) {
//     if(num === 1) {
//         return Number
//     }
//     return num * factorial(num - 1)
// }

// function quicksort(array) {
//     if (array.length <= 1) {
//       return array;
//     }

//     let pivot = array[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < array.length; i++) {
//       array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }

//     return quicksort(left).concat(pivot, quicksort(right));
//   }

//   let unsorted = [23, 45, 16, 37, 3, 99, 22];
//   let sorted = quicksort(unsorted);

//   console.log('Sorted array', sorted);

// const duplicate = list => {
//     return list.concat(list)
// }
// console.log(duplicate([1,2,3,4,5]);)

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

// let str = 'My dogs name is Coco.'

// console.log(str.includes("Coco"))
// console.log(str.replace('dogs', 'cats'))

// const removeFromList = data => {
//     const colors = ['red', 'black', 'white']

//     return data.filter(color => !colors.includes(color))
// }
// console.log(removeFromList(['green', 'red', 'blue', 'purple']))

// const a = [2,4,6,8]
// const newA = a.map((_, i, arr) => arr[arr.length - i - 1])
// console.log(newA)

// const getMid = str => str.slice((str.length-1)/2, str.length/2 + 1) 
// console.log(getMid('Boom'))

// const roundBy = (num, rounded = 5) => {
//     while (num % rounded !== 0) {
//         num++
//     }
//     return num
// }
// console.log(roundBy(11, 2))

// const async functionName = data => {
//     const res = await fetch(urlInfoHere)
//     const data = res.json()
//     console.log(data)
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// for (let prop in menu) {
 
//     if (typeof menu[prop] == 'number') {
//         menu[prop] *= 2
//     }
// }
