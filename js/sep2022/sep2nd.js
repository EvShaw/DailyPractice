const today = new Date
console.log(today)

// const swapOut = x => {
//     const pairs = {'e':'s', 'v':'h','a':'a', 'n': 'w'}

//     return x.split('').map(el => pairs[el]).join('')
// }

// console.log(swapOut('evan'))

// const seniorOrOpen = (data) => {
//     return (([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
// }

// console.log(seniorOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(seniorOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))

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


// let stringOne = 'Evan'
// let stringTwo = 'Batman'

// const exchangeValue = (newValues, changeValueTo) => {
//     let newValArr = newValues.toLowerCase().split('')
//     let changeValTo = changeValueTo.toLowerCase().split('')
//     // console.log(changeValTo)
//     const replaceWith = {}
//     //create a way to take newValues and assign them as properties. 
//     //create a way to take ChangeValueTo and assign them to the values of the newValues properties

//     for(let el of newValArr) {
//         replaceWith[el] = newValArr[el]
//     }

//     Object.keys(replaceWith).forEach((key, index) => {
//         replaceWith[key] = changeValTo[index]
//     })


//     return newValArr.map(el => replaceWith[el]).join('')
// }

// console.log(exchangeValue(stringOne, stringTwo))

// const persist = num => {
//     let times = 0
//     num = num.toString()

//     while(num.length > 1) {
//         times++

//         num = num.split('').map(Number).reduce((a, b) => a*b).toString()
//     }
//     return times
// }

// setTimeout(() => {
//     console.log('FRIDAY')

// }, 1000)

// const a = [...Array(4)]
// const b = a.map((_, i) => i)
// const c = [...Array(4)].map((_, i) => i)
// const d = Array.prototype.map.call(a, (_, i) => i)
// console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
// console.log(b)   //output: [ 0, 1, 2, 3 ]
// console.log(c)   //output: [ 0, 1, 2, 3 ]
// console.log(d)   //output: [ 0, 1, 2, 3 ]

// const turtles = ['leo', 'ralph', 'mickey', 'donnie']

// for (let i = 0; i < turtles.length; i++) {
//     turtles[i] = turtles[i][0].toUpperCase() + turtles[i].slice(1)
// }
// const keepOnlyTurtles = list => {
//     return list.filter(shells => !turtles.includes(shells))
// }

// console.log(keepOnlyTurtles(['Batman', 'Superman', 'Ralph', ...turtles]))

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
  
//   const mergeSort = (a) => {
//     if (a.length < 2) return a;
//     const middle = Math.floor(a.length / 2);
//     const a_l = a.slice(0, middle);
//     const a_r = a.slice(middle, a.length);
//     const sorted_l = mergeSort(a_l);
//     const sorted_r = mergeSort(a_r);
//     return _mergeArrays(sorted_l, sorted_r);
//   };