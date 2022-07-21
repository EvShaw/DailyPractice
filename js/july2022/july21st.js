const today = new Date
console.log(today)


// const li = document.createElement('li')
// li.textContent = 'Im so awesome!'
// document.querySelector('ul').appendChild(li)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with friend',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentists Appointment',
//         isCompleted: false
//     }
// ]

// let salaries = { John: 100, Ann: 160, Pete: 130 }
// let total = 0
// for(key in salaries) {
//     total += salaries[key] 
// }
// console.log(total)

// arrNameHere.find( (element, index, array) => {

// })
// arrName.find(item => item.id == idValHere)

// npm install exptess --save

// quotesCollection.findOneAndUpdate(query, update, options)
//     .then(result => {})
//     .catch(err => console.error(error))

// npm install nodemon ==save-dev
// fs.readFile(path.join(__dirname + '/test', 'hello.txt'), path.join(__dirname, '/test'. 'helloworld.txt'), (err) => {
//     if(err) throw err
//     console.log('file renamed')
// })

// const str = 'The panda eats bamboo!'
// console.log(str)

// console.log(str.replace(/The/g, "Does"))

// const getMid = str => str.slice((str.length-1)/2, str.length/2+1)
// console.log(getMid('testers'))

// function removeExtras(arr, n) {
//     const count = {}
//     const ans = []

//     for(let el of arr) {
//         if(count[el]) count[el] = count[el]+1
//         else count[el] = 1
//         if(count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// console.log(removeExtras('11122233344', 2))

// function persistence(num) {
//     let times = 0
//     num = num.toString()
//     while(num.length > 1) {
//         times++
//         num = num.split('').map(Number).reduce((a, b) => a*b).toString()

//     }
//     return times
// }

// console.log(persistence(39))