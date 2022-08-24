const today = new Date
console.log(today)

// function duplicate(data) {
//     return data.concat(data)
// }

// console.log(duplicate([1,2,3,4,5]))

// const randomArray = [...Array(4)]
// console.log(randomArray)

// const arrayA = randomArray.map((element, index) => index)
// console.log(arrayA)

// const arrayB = [...Array(4)].map((element, index) => index)
// console.log(arrayB)

// const arrayC = Array.prototype.map.call(randomArray, (element, index) => index)
// console.log(arrayC)

// function removeFromList(arr) {
//     const list = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     return arr.filter(b => !list.includes(b))
// }

// console.log(removeFromList(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// const isSQ = num => Math.sqrt(num) % 1 == 0 
// console.log(isSQ(25))

// const removeExtra = (arr, num) => {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if(count[el] <= num) ans.push(el)
//     }

//     return ans
// }

// console.log(removeExtra([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5, 1, 1, 2, 3, 4], 1))

// //convert to use filter: 

// const removeExtra2 = (arr, num) => {
//     const count = {}

//     return arr.filter(n => {
//         count[n] = (count[n] || 0) + 1
//         return count[n] <= num
//     })
// }

// console.log(removeExtra2([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5, 1, 1, 2, 3, 4], 1))

// let str = 'the cup was full!'
// console.log(str)
// console.log(str.replaceAll(/full/g, 'empty'))

// const sheep = arrOfSheep => arrOfSheep.filter(Boolean).length

// const keys = document.querySelector('.allButtons')

// keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;

//     if (!target.matches('button')) {
//         return;
//     } else {
//         calculator.parseInput(value)
//         console.log(value)
//     }
//     console.log(event)
// })

// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
//     console.log('clicked')
//     if(click.target.classList.contains('rose')){
//         document.querySelector('#nikki').classList.toggle('hidden')
//     }else{
//         alert("Wrong!");
//     }
// }