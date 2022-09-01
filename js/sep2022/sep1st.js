const today = new Date
console.log(today)

// res.render('index.ejs', {items: todoITems, left: itemsLeft})

// const removeExtras = (list, num) => {
//     // const count = {}
//     // const ans = []

//     // for(let el of list) {
//     //     if(count[el]) count[el] = count[el] + 1
//     //     else count[el] = 1
//     //     if(count[el] <= num) ans.push(el)

//     // }
//     // console.log(count)
//     // return ans

//     //refactor the above with filter: 

//     const count = {}

//     return list.filter( el => {
//         count[el] = (count[el] || 0) + 1
//         return count[el] <= num
//     })
// }

// console.log(removeExtras([1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6], 1))

// const allEquals = list => list.every(val => val === list[0])
// console.log(allEquals([1,1,3]))

const senOrOpen = (data) => {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'))
}

console.log(senOrOpen([[45, 12], [55, 21], [19, -2], [104, 20]]))
console.log(senOrOpen([[3, 12], [55, 1], [91, -2], [53, 23]]))
