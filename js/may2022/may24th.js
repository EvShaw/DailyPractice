// console.log('May 24th, 2022')

// const loggedIn = char => char ? username : defaultName

// let username = ''
// let defaultName = username || 'Stranger'

// console.log(defaultName)

// const inputFromFormNameHere = document.querySelector('#idFormInputNameHere').value

// const inventoryItemName = {
//     pens: true,
//     brand: 'bic', 
//     color: 'blue', 
//     quantity: '25'
// }


// console.log(Object.keys(inventoryItemName))

// let board = ''
// let size = 8

// for (let column = 0; column < size; column++){
//     for (let row = 0; row < size; row++) {
//         if ((column + row) % 2 === 0) {
//             board += ' '
//         } else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }


// console.log(board)

// for (let line = '#'; line.length < 8; line += '#') {
//     console.log(line)
// }
// console.log('########')
// for(let line = "#######"; line.length > 0; line = line.slice(1)) {
//  console.log(line)
// // }
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// for(let prop in menu) {
//     if (typeof menu[prop] === 'number') {
//        menu[prop]*2)    } 
// }

// const codeA = 'a'.charCodeAt()

// function grid(n) {
//     if (n < 0) return null
//     const grid = []
//     for (let row = 0; row < n; row++){
//         const cells = []
//         for (let cell = 0; cell < n; cell++) {
//             cells.push(String.fromCharCode(codeA + (row + cell) % 26))
//         }
//         grid.push(cells.join(' '))
//     }
//     return grid.join('\n')
// }

// function summation(num) {
//     const myArr = []
//     for (let i = 1; i <= num; i++) {
//         myArr.push(i)
//     }
//     myArr.reduce((acc, c))
// }
// console.log(summation(2, 10))

// function anagrams(a, b) {
//     let test = a.toLowerCase().split('').sort().join('')
//     let original = b.toLowerCase().split('').sort().join('')

//     if (test === original) {
//         return true;
//     } else {
//         return false;
//     }

// }

function reverseArray(arr){
    let output= []; 
    for(let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i])
    }
    return output
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let old = arr[i]
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.lenght - 1 - i] = old
    }
    return arr
}

console.log(reverseArray(['A', 'B', 'C']))




