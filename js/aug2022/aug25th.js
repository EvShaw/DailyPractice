const today = new Date
console.log(today)

// const removeAsNeeded = list => {
//     const toBeRemoved = ['red', 'orange', 'yellow']

//     return list.filter(el => !toBeRemoved.includes(el))
// }

// console.log(removeAsNeeded(['purple', 'red', 'orange', 'blue', 'yellow', 'green']))

// function removeFromList(arr) {
//     const list = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     return arr.filter(b => !list.includes(b))
// }

// console.log(removeFromList(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// let str = 'My name is Evan'
// let getThis = str.charCodeAt(11)
// let convertTo = String.fromCharCode(getThis)
// console.log(getThis)
// console.log(convertTo)
// let sliceIt = str.slice(3, 7)
// console.log(sliceIt)
// let str2 = '    Yes it is    '
// console.log(str2)
// console.log(str2.trim())
// console.log(str.includes('Evan'))

// let str = 'My name is Evan'
// let regex = /[A-Z]/g
// let found = str.match(regex)
// console.log(found.join(''))
// console.log(found.join('').repeat(21))
// console.log(str.charAt(0))

// const getMid = str => str.slice((str.length-1)/2, str.length/2+1)
// console.log(getMid('Evans'))

// const allEquals = list => list.every(val => val == list[0])
// console.log(allEquals([1,1,1,1]))

// function oldFetch() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.message)
//         })
//         .catch(err => {
//             console.log(err)
//         }) 
// }
// oldFetch()

// const calculator = {
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     }, 
//     sum() {
//         return this.a + this.b
//     }, 
//     mul() {
//         return this.a * this.b
//     }
// }

// db.collection('namehere').find().toArray()