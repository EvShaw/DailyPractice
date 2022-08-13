const today = new Date
console.log(today)

// response.render('index.ejs', {info: data})

// Math.max(...notes.map(n => n.id))

// function SuperHeroes (cape, colors, powers) {
//     this.cape = cape
//     this.colors = colors
//     this.powers = powers
//     this.landing = () => {
//         console.log('HERO LANDING')
//     }
// }

// let ladyBug = new SuperHeroes(true, ['red', 'black', 'white'], ['flight', 'durability'])
// console.log(ladyBug.landing())

// class HeroFactory {
//     constructor(cape, colors, power) {
//         this._cape = cape
//         this._colors = colors
//         this._power = power
//     }
//     get cape() {
//         return this._cape
//     }
//     get colors() {
//         return this._colors
//     }
//     get power() {
//         return this._power
//     }
//     landing() {
//         console.log('HERO LANDING')
//     }
// }

// const bubbleBoy = new HeroFactory(false, ['blue', 'white'], 'superjump', 'bouncy')

// console.log(bubbleBoy.landing())

// const anObject = {
//     myProp: 2,
//     myColor: 'purple'
//   };

// let anotherObject = Object.create(anObject)
// console.log(anotherObject)

// let yetAnother = Object.create(anotherObject)
// console.log(yetAnother)

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

// let users = [
//     {id: 1, name: 'Johnny'},
//     {id: 2, name: 'Bonny'},
//     {id: 3, name: 'Harry'}
// ]

// let user = users.find(item => item.id == 2)
// console.log(user)

// function showMessage(from, text) {    //<--- two paramaters
//     alert(from + ' : ' + text);
// }

// const todoItems = await db.collection('todos').find().toArray()

// db.collection('rappers').insertOne({
//     jasper: 'vip;})
//         .then(result => {

//         }

// let clone = Object.assign({}, user) 


// const roundToNext5 = n => {
//     while(n % 5 !== 0) n++
//     console.log(n)
// }

// console.log(roundToNext5(7))

// const capitals = (word) => {
//     let list = []
   
//     word.split('').forEach( (ele, i) => {
//         console.log(ele)
//         if (ele === ele.toUpperCase()) {
//             list.push(i)
//         }
   
//     })
//     console.log(list)
//     return list
// }

// capitals('CodEWaRs')

// const choice = document.querySelector('input').value.replaceAll(' ', '-').replaceall('.', '').toLowerCase()

// data.map(items => items.Name)

// app.get('/api/persons/:id', (req, res) => {
//     const request = req.params.id
// })

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is runngin on port: ${PORT}`)
// })

// app.set('view engine', 'ejs')

// response.render('index.ejs', {info: nameList})

// const removeAdj = str => [...str].filter((a, i) => a !== str[i - 1])
// console.log(removeAdj(['a', 'a', 'b', 'b', 'b', 'c', 'c']))