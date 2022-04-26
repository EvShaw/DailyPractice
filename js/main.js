console.log('linked')

//April 26th: 

let calculator = {
    read() {
        this.a += prompt('a?')
        this.b += prompt('b?')
    }, 
    sum() {
        return this.a + this.b
    }, 
    mul() {
        return this.a * this.b
    }
}
 console.log(calculator.read())