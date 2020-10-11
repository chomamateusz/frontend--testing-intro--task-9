export class Counter {

    constructor(number = 0) {
        this.number = number
        this.render()
    }

    inc() {
        this.number = this.number + 1
        this.render()
    }

    reset() {
        this.number = 0
        this.render()
    }

    render(){
        console.log(this.number)
    }

}

export class DecreasingCounter extends Counter {

    constructor(number = 0) {
        super(number)
    }

    dec() {
        this.number = this.number - 1
        this.render()
    }

}

export default Counter