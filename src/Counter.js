export class Counter {

    constructor(number = 0) {
        this.number = number
    }

    inc() {
        this.number = this.number + 1
    }

    dec() {
        this.number = this.number - 1
    }

    reset() {
        this.number = 0
    }

}

export default Counter