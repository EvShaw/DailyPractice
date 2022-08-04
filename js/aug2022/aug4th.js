const today = new Date
console.log(today)

// const roundBy = (n, x = 5) => {
//     while(n % x !== 0) n++
//     return n
// }
// console.log(roundBy(21, 20 ))

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

// app.use(express.json())

// let user = {
//     name: "john", 
//     age: 30
// }

// let clone = Object.assign({}, user) 

// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     get name() {
//         return this._name

// app.get('/api/persons/:id', () => {
//     const request = req.params.id
// })

// const entry = persons.find(entry => entry.id == id)
// const generateID = () => {
//     const maxID = persons.length > 0
//     ? Math.max(...persons.map(n => n.id))
//     : 0
//     return maxID +1
// }

// infoCollection.find({name: trickName}).toArray()
//     .then(resilts => {
//         console.log(results)
//         res.json(results[0])
//     })
// const MongoClient = require('mongodb').MongoClient

// app.get(endpoint, callback)

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
//     if (err) throw err
//     console.log('file renamed...')
// }

// let anObject = {left: 1, right: 2}
// console.log(anObject.left);
// delete anObject.left
// console.log(anObject.left)