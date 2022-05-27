console.log('May 26th, 2022')

// document.querySelector('h2').innerContent = "Changed"

// let nums = [42, 19, 77, 33, 57]

// console.log(nums.reduce((acc, c) => acc + +c, 0) )

// const li = document.createElement('li')
// li.innerContent = 'im an li'
// document.querySelector('ul').appendChild(li)

// data.subclasses.forEach(obj => {
//     console.log(obj.name)
//     const li = document.createElement('li')
//     li.innerContent = 'im an li'
//     document.querySelector('ul').appendChild(li)
// })

// function getFetch(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// getFetch()
// async function getACuteDogPhoto(){
//     const res =await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)

// }
// getACuteDogPhoto()
// let bestColors = ['green', 'blue', 'yellow', 'black']

// bestColors.forEach(color => console.log(color))
// console.log(bestColors.includes('blue'))

// bestColors.forEach( ele => ele.adaddEventListener('click', (e) => {
//     console.log(e.target.id)
// }))

// Object.prototype.objNameHere.actualPropertyNameHere = 'anyValueHere'

// const bluePen = {
//     brand: 'bic',
//     type: 'ballpoint',
//     color: 'red',
//     write() {
//         return 'doesn\'t work'
//     }
// }
// const color = ['red', 'blue', 'black', 'green']

// const clone = {}

// for (comp in bluePen) {
//     clone[comp] = bluePen[comp] 
// }

// console.log(clone)

// const redPen = Object.assign({}, bluePen)
// console.log(redPen)
// // console.log(bluePen.write())

// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

const allEqual = n => n.some(val => val === n[0])
console.log(allEqual([1, 2, 3, 4, 5, 6]))