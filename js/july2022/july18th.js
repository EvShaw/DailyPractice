const today = new Date
console.log(today)

// db.collection('rappers').insertOne({jasper:'vip;})
//    .then(result => {

// ObjectNameHere.prototype.propertyNameHere = 'valueHere'

// let calculator = {

//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b;
//     }

//  }

//  console.log(calculator.read())

// app.post('/quotes', (request, response) => {
//     quotesCollection.insertOne(request.body)
//         .then(result => {
//             console.log(result)

//         })
//         .catch(err => console.error(err))
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// const getMid = s => s.slice((s.length-1)/2, s.length/2+1)

// const removeEl = n => n.replaceAll(/!/g, '')

// const deleteXTimes = (arr, n) => {
//     const count = {}
//     const ans = []

//     for (let el of arr) {
//         if (count[el]) count[el] = count[el] + 1
//         else count[el] = 1
//         if (count[el] <= n) ans.push(el)
//     }
//     return ans
// }

// const removeDupes = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeDupes('AAAABBBCCDAABBB'))

// path.join(__dirname, 'test', 'hello.html')

// s.mkdir(path.join(__dirname, '/test'), { }, err => {
//     if(err) throw err 
//    console.log('folder created...')
// })

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//   }