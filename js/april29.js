console.log('April 29th Update')


let user = {
    name: "John", 
    age: 30,
}

let clone = {}

for (let key in user) {
    clone[key] = user[key]
}
//  alert('new')
