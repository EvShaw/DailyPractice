// // console.log('hi!')

// // const calculator = {
// //     read(){
// //         this.a = +prompt('a?', 0)
// //         this.b = +prompt('b?', 0)
// //     },
// //     sum(){
// //         return this.a + this.b
// //     }, 
// //     mul(){
// //         return this.a * this.b
// //     }
// // }

// // console.log(calculator.read())


// //High order array methods: MAP Practice: 

// // 


// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// //--> 

// // const worlds = ['Mustafar', 'Geonosis', 'Polis Massa', 'Hoth', 'Tattooine', 'World2']

// // //get all name: 

// // const names = characters.map(character => {
// //     console.log(character.name)
// // })
// // const name = worlds.map(locations => {
// //     console.log(locations)
// //     if (locations === 'Hoth') {
// //         return locations
// //     }

// // })
// // console.log(name)

// // const heights = characters.map(character => character.height)
// // console.log(heights)

// // //name and heigth: 

// // const records = characters.map((character) => ({
// //     name: character.name, height: character.height
// // }))

// // console.log(records)

// // const nameAndColor = characters.map( (character) => ({
// //     name: character.name, eye_color: character.eye_color
// // } ))

// // console.log(nameAndColor)

// const fNames = characters.map( character => character.name.split(' ')[0])
// const lNames = characters.map( character => character.name.split(' ')[1])

// console.log(fNames)
// console.log(lNames)

// console.log('')

// function AgencyConstractor(hourlyRate, hours, taxRate){
//     this.hourlyRate = hourlyRate
//     this.hours = hours
//     this.taxRate = taxRate
//     this.calculateProfit = function() {
//         return this.hourlyRate * this.hours * (1 - this.taxRate)
//     }
//     this.invoiceClient = function() {
//         return `Your invoice total is ${this.hourlyRate * this.hours}`
//     }
// }

// let ian = new AgencyConstractor(250,160,.35)


// for (let prop in ian) {
//     console.log(prop)
//     console.log(ian[prop])
// }

// console.log('hi')

// function AgencyContractor(hourlyRate, hours, taxRate) {
//     this.hours = hours
//     this.taxRate = taxRate
//     let rate = hourlyRate
//     let calculateProfit = function () {
//         return rate * this.hours * (1 - this.taxRate)
//     }
//     this.invoiceClient = function () {
//         return `Your invoice total is ${rate * this.hours}`
//     }
// }

// // // let ian = new AgencyContractor(250, 160, .35)

// // console.log(ian.invoiceClient())


